<!-- @format -->

<template>
	<div class="col-md-6">
		<div class="card">
			<div class="card-body">
				<div class="card-title">
					<h5>Referensi Dapodik Kelas</h5>
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
    accessorKey: 'tingkat_pendidikan_id_str',
    header: 'Tingkat',
    enableSorting: true,
  },
  {
    accessorKey: 'kurikulum_id_str',
    header: 'Kurikulum',
    enableSorting: true,
  }
];
const getDatas = async () => {
  await axios.get('/api/admin/rombles')
  .then(res => {
    datas.value = res.data
  })
}

onMounted(() => {
  getDatas()
})
</script>
