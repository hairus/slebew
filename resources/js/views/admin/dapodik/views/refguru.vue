<!-- @format -->

<template>
	<div class="col-md-6">
		<div class="card">
			<div class="card-body">
				<div class="card-title">
					<h5>Referensi Dapodik Guru</h5>
					<hr />
				</div>
				<dataTables
					:datas="datas"
					:columns="columns"
					v-if="datas.length > 1"
					class="my-3" />
			</div>
		</div>
	</div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import dataTables from "../../../../components/dataTables.vue"

const datas = ref([]);
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    canSort: true,
  },
  {
    accessorKey: 'nama',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'ptk_id',
    header: 'PTK ID',
    enableSorting: true,
  },
  {
    accessorKey: 'edit',
    header: 'Edit',
    cell: (info) => 'edit',
    enableSorting: false,
  },
];
const getDatas = async () => {
  await axios.get('/api/admin/ptk')
  .then(res => {
    datas.value = res.data
  })
}

onMounted(() => {
  getDatas()
})
</script>
