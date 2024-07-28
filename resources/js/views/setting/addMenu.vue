<!-- @format -->

<template>
    <div>
        <BModal v-model="showModal" @hide.prevent @ok="simMenu" @cancel="showModal = !showModal"
            @close="showModal = !showModal" id="modal-center-menu" centered title="Add Sub Menu">
            <form>
                <div class="form-group">
                    <label for="">Label</label>
                    <input type="text" class="form-control" v-model="label">
                </div>
                <div class="form-group">
                    <label for="">is Title</label>
                    <select name="" id="" class="form-control" v-model="isTitle">
                        <option value="0">false</option>
                        <option value="1">true</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Icon</label>
                    <input type="text" class="form-control" v-model="icon">
                </div>
                <div class="form-group">
                    <label for="">Role</label>
                    <select name="" id="" class="form-control" v-model="role">
                        <option v-for="r in roles" :key="r.id" :value="r.role">{{ r.role }}</option>
                    </select>
                </div>
            </form>
        </BModal>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Modal add Menu',
    props: ['roles'],
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        async simMenu() {
            await axios.post('/api/admin/menus', {
                label: this.label,
                isTitle: this.isTitle,
                role: this.role,
                icon: this.icon,
            }).then(res => {
                this.showModal = false;
                this.$emit('reload')
                this.label = "";
                this.isTitle = "";
                this.role = "";
                this.icon = "";

            })
        },
    },
};
</script>

<style lang="scss" scoped></style>
