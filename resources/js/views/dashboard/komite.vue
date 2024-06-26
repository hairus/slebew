<template>
    <Layout>
        <PageHeader title="Komite" pageTitle="Dashboards" />
        <Loader v-show="loading"></Loader>
        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="mb-4">Pengaturan Komite</BCardTitle>
                        <BForm>
                            <BFormGroup class="mb-3" label="Biaya" label-for="formrow-firstname-input">
                                <BFormInput id="formrow-firstname-input" type="number" v-model="form.price" placeholder="Enter Your Price"></BFormInput>
                            </BFormGroup>

                            <div>
                                <BButton type="submit" @click="simpan" variant="primary" class="btn btn-sm">Submit</BButton>
                            </div>
                        </BForm>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="mb-4">Result</BCardTitle>
                        <BTableSimple responsive>
                            <BThead>
                                <BTr>
                                    <BTh>No</BTh>
                                    <BTh>Biaya</BTh>
                                    <BTh>Action</BTh>
                                </BTr>
                            </BThead>
                            <BTbody>
                                <BTr v-for="(price, index) in prices" :key="price">
                                    <BTh>{{index + 1}}</BTh>
                                    <BTd>{{price.price}}</BTd>
                                    <BTd>
                                        <BButton class="btn btn-sm btn-success mx-2" @click="editPrice(price.price, price.id)">
                                            <i class="mdi mdi-pencil"></i>
                                        </BButton>
                                        <BButton class="btn btn-sm btn-danger" @click="removePrice(price.id)">
                                            <i class="mdi mdi-trash-can"></i>
                                        </BButton>
                                    </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </BCardBody>
                </BCard>
            </BCol>
            <BModal v-model="showModal" hide-footer centered header-class="border-0">
                <div class="text-center mb-4">
                    <div class="avatar-md mx-auto mb-4">
                        <div class="avatar-title bg-light rounded-circle text-primary h1">
                            <i class="mdi mdi-tooltip-edit"></i>
                        </div>
                    </div>

                    <BRow class="justify-content-center">
                        <BCol xl="10">
                            <h4 class="text-primary">Edit !</h4>
                            <BFormGroup class="mb-3" label="Biaya" label-for="formrow-firstname-input">
                                <BFormInput id="formrow-firstname-input" type="number" v-model="form.price" placeholder="Enter Your Price"></BFormInput>
                                <BButton class="mt-2 btn btn-sm btn-info" @click="update">Update</BButton>
                            </BFormGroup>
                        </BCol>
                    </BRow>
                </div>
            </BModal>
        </BRow>
    </Layout>
</template>
<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import simplebar from "simplebar-vue";
import axios from "axios";
import {BModal} from "bootstrap-vue-next";
import Loader from "../../components/widgets/loader.vue"

export default {
    components: {
        BModal,
        Layout,
        PageHeader,
        simplebar,
        Loader
    },
    data() {
        return{
            form:{
                price:"",
                id:""
            },
            prices:[],
            showModal:false,
            loading:false
        }
    },
    methods:{
        async simpan (){
            this.loading = true;
            await axios.post('/api/admin/komite', {
                "price" : this.form.price
            })
                .then(res => {
                    this.form.price = "";
                    this.getPrice();
                    this.loading = false
                })
                .catch(e => {
                    console.log(e)
                })
        },
        async getPrice (){
            await axios.get('/api/admin/getPrice')
                .then(res => {
                    this.prices = res.data
                })
        },
        editPrice(price, id){
            this.showModal = true;
            this.form.price = price;
            this.form.id = id;
        },
        async update(){
            this.loading = true;
            await axios.put('/api/admin/update', {
                "id" : this.form.id,
                "price" : this.form.price
            })
                .then(res => {
                    this.getPrice()
                    this.showModal = false;
                    this.form.price = "";
                    this.form.id = "";
                    this.loading = false;
                })
        },
        async removePrice(id){
            this.loading = true
            await axios.delete('/api/admin/delPrice/' +id)
                .then(res => {
                    this.getPrice();
                    this.loading = false;
                })
        }
    },
    created() {
        this.getPrice()
    }
}
</script>
