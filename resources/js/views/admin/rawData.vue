<!-- @format -->

<template>
	<div class="col-md-12">
		<div class="card">
			<div class="card-body">
				<div class="card-title">PTKS</div>
				<p style="color: blue">ini berangkat dari table ptks</p>
        <button class="btn btn-sm btn-primary" @click="getPtks">get</button>
				<div class="table table-responsive">
					<table class="table table-striped table-hover">
						<thead>
							<th>ptk_id</th>
							<th>Nama</th>
							<th>raw</th>
							<th>ptks->pembelajaran->rombels raw</th>
							<th>pembelajaran dan rombel</th>
							<th>#</th>
						</thead>
						<tbody>
							<tr
								v-for="ptk in ptks"
								:key="ptk.id">
								<td>{{ ptk.ptk_id }}</td>
								<td>{{ ptk.nama }}</td>
								<td>{{ ptk }}</td>
								<td>
									<div v-if="ptk.pembelajarans">
										<ul
											v-for="pembelajaran in ptk.pembelajarans"
											:key="pembelajaran.id">
											<li>{{ pembelajaran }}</li>
										</ul>
									</div>
								</td>
								<td>
									<div v-if="ptk.pembelajarans">
										<ul
											v-for="pembelajaran in ptk.pembelajarans"
											:key="pembelajaran.id">
											<li>
												{{ pembelajaran.mata_pelajaran_id_str }} -
												{{ pembelajaran.rombels.nama }}
											</li>
										</ul>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				ptks: [],
			};
		},
		methods: {
			async getPtks() {
				await axios.get('/api/admin/ptk').then((res) => {
					this.ptks = res.data;
				});
			},
			mounted() {
				this.getPtks();
			},
		},
	};
</script>
