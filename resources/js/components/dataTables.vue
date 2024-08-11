<!-- @format -->
<!-- install -->
<script setup>
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";
import { ref, computed, watch } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  datas: Array,
  columns: Array,
});

const data = ref(props.datas); // Awalnya data adalah array kosong

const selected = ref(5);
const sorting = ref([]);
const filter = ref("");

const table = computed(() => {
  return useVueTable({
    data: data.value,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // initialState: {
    // 	pagination: {
    // 		pageSize: selected.value,
    // 	},
    // },
    state: {
      get sorting() {
        return sorting.value;
      },
      get globalFilter() {
        return filter.value;
      },
      get globalFilter() {
        return filter.value;
      },
    },
    onSortingChange: (updaterOrValue) => {
      sorting.value =
        typeof updaterOrValue === "function"
          ? updaterOrValue(sorting.value)
          : updaterOrValue;
    },
  });
});
// watch(
// 	selected,
// 	(newValue) => {
//     selected.value = newValue
// 		console.log('User data changed:', newValue);
// 	},
// 	{ immediate: true }
// );
</script>

<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="row ms-2">
        <select
          v-model="selected"
          class="form-control"
          @change="table.setPageSize(selected)"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
      </div>
      <div class="row">
        <div class="form-group">
          <input
            type="text"
            class="form-control col-3"
            placeholder="search"
            v-model="filter"
          />
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :class="{
              'cursor-pointer select-none': header.column.getCanSort(),
            }"
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <FlexRender
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
            {{ { asc: " ↑", desc: "↓" }[header.column.getIsSorted()] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Page {{ table.getState().pagination.pageIndex + 1 }} of
      {{ table.getPageCount() }} - {{ table.getFilteredRowModel().rows.length }}
    </p>
    <div class="">
      <button
        class="btn btn-sm btn-primary me-1"
        @click="table.setPageIndex(0)"
      >
        first Page
      </button>
      <button class="btn btn-sm btn-primary me-1" @click="table.previousPage()">
        Prev Page
      </button>
      <button class="btn btn-sm btn-primary me-1" @click="table.nextPage()">
        Next Page
      </button>
      <button
        class="btn btn-sm btn-primary col"
        @click="table.setPageIndex(table.getPageCount() - 1)"
      >
        last Page
      </button>
    </div>
  </div>
</template>
