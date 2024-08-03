<!-- @format -->

<template>
	<div class="col-md-6">
		<div class="card">
			<div class="card-body">
				<div class="card-title">
					<h5>Referensi Dapodik Mapel</h5>
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
import dataTables from "../tableTest.vue"

const datas = ref([]);
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    canSort: true,
  },
  {
    accessorKey: 'nama_mata_pelajaran',
    header: 'Mapel',
    enableSorting: true,
  },
  {
    accessorKey: 'mata_pelajaran_id',
    header: 'Mapel ID',
    enableSorting: true,
  },
];
const getDatas = async () => {
  await axios.get('/api/admin/mapels')
  .then(res => {
    datas.value = res.data
  })
}

onMounted(() => {
  getDatas()
})
</script>
