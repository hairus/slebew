<template>
    <Layout>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Management Role</div>
                            </div>
                            <div class="card-body">
                                <form action="" @submit.prevent="createRole">
                                    <div class="form-group">
                                        <label for="">Create Role</label>
                                        <input type="text" class="form-control" v-model="role">
                                    </div>
                                    <button class="btn btn-sm btn-primary mt-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title">Role</div>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <thead>
                                        <th>No</th>
                                        <th>Role</th>
                                        <th>#</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(rl, index) in roles" :key="rl.id">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ rl.role }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-danger" @click="hapus(rl.id)"><span class="fa fa-trash-alt"></span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <user-role :roles="roles"/>
    </Layout>
</template>
<script>
import Layout from "@/layouts/main.vue";
import axios from "axios";
import userRole from "./userRole.vue"
export default {
    components: {
        Layout,
        userRole
    },
    data(){
        return{
            role:"",
            roles:[],
            users:[]
        }
    },
    methods:{
        async createRole(){
            await axios.post('/api/admin/role', {
                "role" : this.role
            })
            .then(res => {
                this.role = "";
                this.getRoles();
            })
        },
        async getRoles (){
            await axios.get('/api/admin/role')
            .then(res => {
                this.roles = res.data
            })
        },
        async hapus(id){
            await axios.delete('/api/admin/role/'+id)
            .then(res => {
                this.getRoles();
            })
        },
        async createuserRole(){

        }
    },
    mounted(){
        this.getRoles();
    }
}
</script>
