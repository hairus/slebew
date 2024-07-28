<!-- @format -->

<template>
    <div>
        <BModal v-model="showModal" @hide.prevent @ok="simSub" @cancel="showModal = !showModal"
            @close="showModal = !showModal" id="modal-center-SubMenu" centered title="Add Sub Menu">
            <form>
                <div class="form-group">
                    <label for="" class="mt-4">Parent</label>
                    <select name="" id="" v-model="parent" class="form-control">
                        <option v-for="m in menus" :key="m.id" :value="m.id">
                            {{ m.label }}
                        </option>
                    </select>
                    <label for="" class="mt-4">Label</label>
                    <input type="text" class="form-control" v-model="label">
                    <label for="" class="mt-4">Link</label>
                    <input type="text" class="form-control" v-model="link">
                </div>
            </form>
        </BModal>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ModalAddSubMenu',
    props: ['menus', 'roles'],
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        async simSub() {
            await axios.post('/api/admin/menus', {
                parent: this.parent,
                label: this.label,
                link: this.link,
            })
            .then(res =>{
                this.showModal = false
                this.$emit('reload')
                this.parent = "";
                this.label = "";
                this.link = "";
            })
        },
    },
};
</script>

<style lang="scss" scoped></style>
