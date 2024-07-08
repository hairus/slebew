<!-- @format -->

<template>
	<div class="col-6">
		<div class="card">
			<div class="card-header">
				<div class="card-title">
					<h3>Management Role</h3>
				</div>
			</div>
			<div class="card-body">
				<div class="clearfix">
					<BButton
						v-b-modal.modal-center1
						class="float-end my-3 btn-success"
						><span class="fa fa-robot"></span
					></BButton>
				</div>
				<vue3-datatable
					:rows="rows"
					:columns="cols"
					:loading="loading"
					:totalRows="total_rows"
					:isServerMode="true"
					:pageSize="params.pagesize"
					@change="changeServer"
					:pageSizeOptions="[5, 10, 20, 50, 100]"
					class="table">
					<template #id="data">
						<strong>{{ data.value.id }}</strong>
					</template>
					<template #actions="data">
						<div class="flex gap-4">
							<button
								type="button"
								class="btn btn-success btn-sm bt-sm !py-1 m-2"
								@click="viewUser(data.value)">
								<span class="fa fa-eye"></span>
							</button>
							<button
								type="button"
								class="btn btn-danger btn-sm !py-1"
								@click="deleteUser(data.value)">
								<span class="fa fa-trash"></span>
							</button>
						</div>
					</template>
				</vue3-datatable>
				<BModal
					v-model="showModal"
					@hide.prevent
					@ok="simRole"
					@cancel="showModal = !showModal"
					@close="showModal = !showModal"
					id="modal-center1"
					centered
					title="Add Role">
					<form>
						<div class="form-group">
							<label for="">Create Role</label>
							<BFormInput
								id="input-invalid"
								:state="state"
								v-model="role"
								placeholder="role" />
							<BFormInvalidFeedback
								id="input-live-feedback"
								v-if="errors">
								{{ errors.message }}
							</BFormInvalidFeedback>
						</div>
					</form>
				</BModal>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue3Datatable from '@bhplugin/vue3-datatable';
	import '@bhplugin/vue3-datatable/dist/style.css';
	export default {
		components: {
			Vue3Datatable,
		},
		data() {
			return {
				roles: [],
				cols: [
					{ field: 'id', width: '50px', title: 'ID' },
					{ field: 'role', title: 'ROLE' },
					{ field: 'actions', title: 'ACTION' },
				],
				loading: true,
				total_rows: 0,
				params: { current_page: 1, pagesize: 5 },
				rows: [],
				role: '',
				showModal: false,
				state: null,
				errors: null,
			};
		},
		methods: {
			kesini() {
				this.showModal = false;
			},
			async getRoles() {
				await axios.get('/api/admin/role').then((res) => {
					this.rows = res.data.data;
					this.pagi = res.data.links.length;
					this.loading = false;
					this.total_rows = res.data.total;
				});
			},
			viewUser(gg) {
				alert('View User \n' + gg.role);
			},
			async paginate() {
				await axios.get('/api/admin/role?paginate=' + this.showData).then((res) => {
					this.roles = res.data;
				});
			},
			async deleteUser(gg) {
				if (confirm('yakin akan menghapus')) {
					await axios.delete('/api/admin/role/' + gg.id).then((res) => {
						this.getRoles();
					});
				}
			},
			async changeServer(page) {
				// console.log(page)
				this.loading = true;
				await axios
					.get(
						'/api/admin/role?page=' +
							page.current_page +
							'&paginate=' +
							parseInt(page.pagesize)
					)
					.then((res) => {
						this.rows = res.data.data;
						this.loading = false;
					});
			},
			async simRole() {
				await axios
					.post('/api/admin/role', {
						role: this.role,
					})
					.then((res) => {
						this.getRoles();
						this.role = '';
						this.errors = null;
						this.state = null;
						this.showModal = false;
					})
					.catch((e) => {
						this.errors = e.response.data;
						this.state = false;
					});
			},
			cek() {
				alert('gggg');
			},
		},
		created() {
			this.getRoles();
		},
	};
</script>

<style></style>
