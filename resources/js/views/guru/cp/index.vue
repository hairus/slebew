<template>
  <Layout>
    <div>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="card-title mb-4">CP Kontrol</div>
              <button
                class="btn btn-sm btn-primary float-end mb-3"
                @click="isOpen = true"
              >
                Add
              </button>
              <table class="table">
                <thead>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Mapel</th>
                  <th>Tingkat</th>
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

        <!-- Modal Add CP-->
        <BModal
          v-model="isOpen"
          id="modal-standard"
          title="ADD CAPAIAN BELAJAR"
          title-class="font-18"
        >
          <form @click.prevent>
            <div class="form-group">
              <label for="">Mapel</label>
              <input type="text" class="form-control" v-model="cp.mapel" />
            </div>
            <div class="form-group">
              <label for="">Semester</label>
              <input type="text" class="form-control" v-model="cp.semester" />
            </div>
            <div class="form-group">
              <label for="">Tingkat</label>
              <input type="text" class="form-control" v-model="cp.tingkat" />
            </div>
          </form>
        </BModal>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/main.vue";
import axios from "axios";
export default {
  components: {
    Layout,
  },
  data() {
    return {
      isOpen: false,
      cp: {
        mapel: "",
        semester: "",
        tingkat: "",
      },
    };
  },
  mounted() {
    axios
      .get("/api/cp")
      .then((response) => {
        this.cp = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    createCp() {
      axios
        .post("/api/cp", this.cp)
        .then((response) => {
          console.log(response);
          this.cp.push(response.data.data);
          this.isOpen = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
