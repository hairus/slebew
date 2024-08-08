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
                  <th>Mapel</th>
                  <th>Semester</th>
                  <th>Tingkat</th>
                  <th>Aksi</th>
                </thead>
                <tbody>
                  <tr v-for="cp in cpData" :key="cp.id">
                    <td>{{ cp.id }}</td>
                    <td>{{ cp.mapel }}</td>
                    <td>{{ cp.semester }}</td>
                    <td>{{ cp.tingkat }}</td>
                    <td class="cursor-pointer">
                      <button class="btn" @click="deleteById(cp.id)">
                        <i class="bx bx-trash text-danger"></i>
                      </button>
                      <button @click="editCp(cp)" class="btn">
                        <i class="bx bx-edit-alt text-primary"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- Modal Add CP-->
        <BModal
          v-model="isOpen"
          id="modal-standard"
          title="ADD CAPAIAN BELAJAR"
          title-class="font-18"
          @ok="handleOk"
          @hide="preventHide"
          @cancel="clear"
        >
          <form @submit.prevent="createCp">
            <div class="form-group">
              <label for="mapel">Mapel</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.mapel"
                :class="{ 'is-invalid': errorMessages.mapel.length }"
              />
              <span
                v-if="errorMessages.mapel.length"
                class="ms-2 text-danger"
                >{{ errorMessages.mapel[0] }}</span
              >
            </div>
            <div class="form-group">
              <label for="semester">Semester</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.semester"
                :class="{ 'is-invalid': errorMessages.semester.length }"
              />
              <span
                v-if="errorMessages.semester.length"
                class="ms-2 text-danger"
                >{{ errorMessages.semester[0] }}</span
              >
            </div>
            <div class="form-group">
              <label for="tingkat">Tingkat</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.tingkat"
                :class="{ 'is-invalid': errorMessages.tingkat.length }"
              />
              <span
                v-if="errorMessages.tingkat.length"
                class="ms-2 text-danger"
                >{{ errorMessages.tingkat[0] }}</span
              >
            </div>
          </form>
        </BModal>

        <!-- Modal Edit CP -->
        <BModal
          v-model="editModal"
          id="modal-standard"
          title="Edit Capaian Belajar"
          title-class="font-18"
          @ok="handleUpdateOk"
          @hide.prevent
          @cancel="clear"
        >
          <form @submit.prevent="updateCp">
            <div class="form-group">
              <label for="mapel">Mapel</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.mapel"
                :class="{ 'is-invalid': errorMessages.mapel.length }"
              />
              <span
                v-if="errorMessages.mapel.length"
                class="ms-2 text-danger"
                >{{ errorMessages.mapel[0] }}</span
              >
            </div>
            <div class="form-group">
              <label for="semester">Semester</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.semester"
                :class="{ 'is-invalid': errorMessages.semester.length }"
              />
              <span
                v-if="errorMessages.semester.length"
                class="ms-2 text-danger"
                >{{ errorMessages.semester[0] }}</span
              >
            </div>
            <div class="form-group">
              <label for="tingkat">Tingkat</label>
              <input
                type="text"
                class="form-control"
                v-model="cp.tingkat"
                :class="{ 'is-invalid': errorMessages.tingkat.length }"
              />
              <span
                v-if="errorMessages.tingkat.length"
                class="ms-2 text-danger"
                >{{ errorMessages.tingkat[0] }}</span
              >
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
      editModal: false,
      cp: {
        id: null,
        mapel: "",
        semester: "",
        tingkat: "",
      },
      cpData: [],
      hasError: false,
      errorMessages: {
        mapel: [],
        semester: [],
        tingkat: [],
      },
    };
  },
  watch: {
    "cp.mapel"(newVal, oldVal) {
      if (this.errorMessages.mapel.length) {
        this.errorMessages.mapel = [];
      }
    },
    "cp.semester"(newVal, oldVal) {
      if (this.errorMessages.semester.length) {
        this.errorMessages.semester = [];
      }
    },
    "cp.tingkat"(newVal, oldVal) {
      if (this.errorMessages.tingkat.length) {
        this.errorMessages.tingkat = [];
      }
    },
  },
  mounted() {
    this.getDatas();
  },
  methods: {
    preventHide(event) {
      if (this.hasError) {
        event.preventDefault();
      }
    },
    handleOk(event) {
      this.createCp(event);
    },
    handleUpdateOk(event) {
      this.updateCp(event);
    },
    createCp(event) {
      event.preventDefault();

      if (!Number.isInteger(Number(this.cp.semester))) {
        this.errorMessages.semester = ["Semester harus berupa angka."];
        this.hasError = true;
        return;
      }

      axios
        .post("/api/admin/cp", this.cp)
        .then(() => {
          this.isOpen = false;
          this.hasError = false;
          this.clearErrors();
          this.cp = {
            id: "",
            mapel: "",
            semester: "",
            tingkat: "",
          };
          this.getDatas();
        })
        .catch((error) => {
          this.hasError = true;
          this.errorMessages = error.response.data.errors;
          console.log(this.errorMessages);
        });
    },
    updateCp(event) {
      event.preventDefault();

      if (!Number.isInteger(Number(this.cp.semester))) {
        this.errorMessages.semester = ["Semester harus berupa angka."];
        this.hasError = true;
        return;
      }

      axios
        .put(`/api/admin/cp/${this.cp.id}`, this.cp)
        .then(() => {
          this.editModal = false;
          this.hasError = false;
          this.clearErrors();
          this.cp = {
            id: "",
            mapel: "",
            semester: "",
            tingkat: "",
          };
          this.getDatas();
        })
        .catch((error) => {
          this.hasError = true;
          this.errorMessages = error.response.data.errors;
          console.log(this.errorMessages);
        });
    },
    getDatas() {
      axios
        .get("/api/admin/cp")
        .then((res) => {
          this.cpData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteById(id) {
      if (confirm("Are you sure to delete this data?")) {
        axios
          .delete(`/api/admin/cp/${id}`)
          .then(() => {
            this.getDatas();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    editCp(cp) {
      this.cp = { ...cp };
      this.editModal = true;
    },
    clear() {
      this.editModal = false;
      this.isOpen = false;
      this.clearErrors();
      this.cp = {
        id: "",
        mapel: "",
        semester: "",
        tingkat: "",
      };
    },
    clearErrors() {
      this.errorMessages = {
        mapel: [],
        semester: [],
        tingkat: [],
      };
    },
  },
};
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
</style>
