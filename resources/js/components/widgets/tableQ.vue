<template>
      <!-- User Interface controls -->
      <BRow>
        <BCol md="4" class="col-12 right">
          <BFormGroup
            label="page"
            label-for="per-page-select"
            label-cols-sm="6"
            label-cols-md="12"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
          >
            <BFormSelect id="per-page-select" v-model="perPage" :options="pageOptions" size="sm" />
          </BFormGroup>
        </BCol>
      </BRow>
      <!-- Main table element for typed table-->
      <BTable
        v-model:sort-by="sortBy"
        :sort-internal="true"
        :items="itemsTyped"
        :fields="fieldsTyped"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :responsive="false"
        :filterable="filterOn"
        :small="true"
        :multisort="true"
        @filtered="onFiltered"
      >
        <template #cell(name)="row">
          {{ (row.value as PersonName).first }}
          {{ (row.value as PersonName).last }}
        </template>
        <template #cell(actions)="row">
          <BButton size="sm" class="mr-1" @click="info(row.item, row.index)"> Info modal </BButton>
          <BButton size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </BButton>
        </template>
        <template #row-details="row">
          <BCard>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              <BButton size="sm" class="btn btn-success" @click="row.toggleDetails">Close</BButton>
            </ul>
          </BCard>
        </template>
      </BTable>
      <BCol sm="7" md="2" class="my-1">
          <BPagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            :align="'fill'"
            size="sm"
            pills
          />
        </BCol>
      <!-- Info modal -->
      <BModal
        :id="infoModal.id"
        v-model="infoModal.open"
        :title="infoModal.title"
        :ok-only="true"
        @hide="resetInfoModal"
      >
        <pre>{{ infoModal.content }}</pre>
      </BModal>
  </template>

  <script setup lang="ts">
  import {
    BButton,
    BFormSelect,
    BInputGroup,
    BFormCheckbox,
    BFormGroup,
    BCol,
    BFormInput,
    BInputGroupText,
    BFormCHeckbox,
    BPagination,
    BRow,
    BModal,
    BContainer,
    BTable,
    type BTableSortBy,
    type ColorVariant,
    type TableFieldRaw,
    type TableItem,
    type LiteralUnion,
  } from 'bootstrap-vue-next'
  import {computed, reactive, ref} from 'vue'

  interface PersonName {
    first: string
    last: string
  }

  interface Person {
    name: PersonName
    age: number
    isActive: boolean
  }

  const itemsTyped: TableItem<Person>[] = [
    {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
    {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
    {
      isActive: false,
      age: 9,
      name: {first: 'Mini', last: 'Navarro'},
      _rowVariant: 'success' as ColorVariant,
    },
    {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
    {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
    {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
    {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
    {
      isActive: true,
      age: 87,
      name: {first: 'Larsen', last: 'Shaw'},
      _cellVariants: {age: 'danger', isActive: 'warning'},
    },
    {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
    {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
    {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
    {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}},
  ]

  const fieldsTyped: Exclude<TableFieldRaw<Person>, string>[] = [
    {
      key: 'name',
      label: 'Person full name',
      sortable: true,
      sortDirection: 'desc',
    },
    {
      key: 'sortableName',
      label: 'Person sortable name',
      sortable: true,
      sortDirection: 'desc',
      formatter: (_value: unknown, _key?: LiteralUnion<keyof Person>, item?: Person) =>
        item ? `${item.name.last}, ${item.name.first}` : 'Something went wrong',
      sortByFormatted: true,
      filterByFormatted: true,
    },
    {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
    {
      key: 'isActive',
      label: 'Is Active',
      formatter: (value: unknown) => (value ? 'Yes' : 'No'),
      sortable: true,
      sortByFormatted: true,
      filterByFormatted: true,
    },
    {key: 'actions', label: 'Actions'},
  ]

  const pageOptions = [
    {value: 5, text: '5'},
    {value: 10, text: '10'},
    {value: 15, text: '15'},
    {value: 100, text: 'Show a lot'},
  ]

  const totalRows = ref(itemsTyped.length)
  const currentPage = ref(1)
  const perPage = ref(5)
  const sortBy = ref<BTableSortBy[]>([])
  const sortDirection = ref('asc')
  const filter = ref('')
  const filterOn = ref([])
  const infoModal = reactive({
    open: false,
    id: 'info-modal',
    title: '',
    content: '',
  })

  // Create an options list from our fields
  const sortOptions = computed(() =>
    fieldsTyped.filter((f) => f.sortable).map((f) => ({text: f.label, value: f.key}))
  )

  function info(item: TableItem<Person>, index: number) {
    infoModal.title = `Row index: ${index}`
    infoModal.content = JSON.stringify(item, null, 2)
    infoModal.open = true
  }

  function resetInfoModal() {
    infoModal.title = ''
    infoModal.content = ''
  }

  function onFiltered(filteredItems: TableItem<Person>[]) {
    // Trigger pagination to update the number of buttons/pages due to filtering
    totalRows.value = filteredItems.length
    currentPage.value = 1
  }

  function onAddSort() {
    sortBy.value.push({key: '', order: 'asc'})
  }
  </script>
