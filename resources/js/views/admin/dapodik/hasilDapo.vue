<!-- @format -->

<template>
	<layout>
		<div class="row">
      <viewGuru />
      <viewMapel />
      <viewKelas />
			<!-- <div class="col-md-6">
				<div class="card">
					<div class="card-body">
						<div class="card-title">
							<h5>Referensi Dapodik Kelas</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card">
					<div class="card-body">
						<div class="card-title">
							<h5>Referensi Dapodik Mapel</h5>
						</div>

					</div>
				</div>
			</div> -->
		</div>
	</layout>
</template>


<script setup>
import Layout from '@/layouts/main.vue';
import viewGuru from "./views/refguru.vue"
import viewMapel from "./views/refMapel.vue"
import viewKelas from "./views/refKelas.vue"

</script>
