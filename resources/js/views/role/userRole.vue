<template>
    <div>
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">
                        User Role
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <button class="btn btn-info float-end my-3" @click="muncul"><span class="fa fa-plus"></span></button>
                        <table class="table table-hover">
                            <thead>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Role</th>
                                <th>#</th>
                            </thead>
                            <tbody>
                                <tr v-for="(u, index) in users" :key="u.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ u.name }}</td>
                                    <td>
                                        <span v-for="role in u.roles" @click="hapusRole(u.id, role.id)" class="bg rounded-pill bg-info text-white" role="button">
                                            {{ role.role }}
                                        </span>
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-secondary">
                                            <span class="fa fa-pencil-alt"></span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <BModal v-model="showModal" hide-footer centered header-class="border-0">
          <div class="text-center mb-4">
            <BRow class="justify-content-center">
              <BCol>
                <h4 class="text-primary">Add User Role</h4>
                  <form action="" @submit.prevent="createuserRole">
                      <div class="form-group">
                          <label for="">Pilih Role</label>
                          <select class="form-control mb-3" v-model="role_id">
                              <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.role }}</option>
                          </select>
                      </div>
                      <div class="form-group">
                          <label for="">Pilih User</label>
                          <select class="form-control" v-model="user_id">
                              <option v-for="u in users" :key="u.id" :value="u.id">{{ u.name }}</option>
                          </select>
                      </div>
                      <button class="btn btn-sm btn-info">Submit</button>
                  </form>
              </BCol>
            </BRow>
          </div>
        </BModal>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "userRole",
    props:['roles'],
    data() {
        return {
            showModal:false,
            users:[],
            user_id:"",
            role_id:""
        }
    },
    methods:{
         async createuserRole(){
            await axios.post('/api/admin/role', {
                "user_id": this.user_id,
                "role_id": this.role_id
            })
            .then(res => {
                this.showModal = false
                this.getUser()
            })
        },
        async getUser(){
            await axios.get('/api/admin/user')
            .then(res => {
                this.users = res.data
            })
        },
        async hapusRole(user_id, role_id){
            await axios.delete('/api/admin/user/'+user_id+'/'+role_id)
            .then(res => {
                this.getUser()
            })
        },
        muncul(){
            this.showModal = true;
        }
    },
    created(){
        this.getUser();
    }
}
</script>
