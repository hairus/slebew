<!-- @format -->

<template>
	<Layout>
		<div>
			<div class="row">
        <div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<div class="card-title mb-4">Add Mgmp</div>
							<form action="">
                <div class="form-group">
                  <label for="">Pilih Nama</label>
                  <select name="" id="" class="form-control">
                    <option value="">1</option>
                  </select>
                </div>
              </form>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card">
						<div class="card-body">
							<div class="card-title mb-4">Guru Mgmp</div>
							<button
								class="btn btn-sm btn-primary float-end mb-3"
								@click="isOpen = true">
								Add
							</button>
							<table class="table">
								<thead>
									<th>No</th>
									<th>Nama</th>
									<th>Mapel</th>
									<th>#</th>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>1</td>
										<td>1</td>
										<td>1</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- modal -->

				<!-- Modal Add MGMP-->
				<BModal
					v-model="isOpen"
					id="modal-standard"
					title="ADD GURU MGMP"
					title-class="font-18">
					<form>
						<div class="form-group">
							<label for="">Pilih Guru</label>
							<select
								name=""
								id=""
								class="form-control">
								<option
									v-for="guru in gurus"
									:key="guru.id">
									{{ guru.nama }}
								</option>
							</select>
						</div>
					</form>
				</BModal>
			</div>
		</div>
		<raw-data />
	</Layout>
</template>
<script>
	import Layout from '@/layouts/main.vue';
	import rawData from './rawData.vue';
	import axios from 'axios';
	export default {
		components: {
			Layout,
			rawData,
		},
		data() {
			return {
				isOpen: false,
				gurus: [],
			};
		},
		methods: {
			getGuru() {
				axios.get('/api/admin/mgmp').then((res) => {
					this.gurus = res.data;
				});
			},
		},
		mounted() {
			this.getGuru();
		},
	};
</script>
