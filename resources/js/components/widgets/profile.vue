<script>
import Loader from "./loader.vue";
import profileImg from '../../../images/profile-img.png';
import { avatar1 } from "../../../images/users/data";
/**
 * Profile component
 */
export default {
  components: { Loader },
  data() {
    return {
      profileImg, avatar1, user : JSON.parse(localStorage.getItem('user')),
    }
  },
  props: {
    updating: {
      type: Boolean,
    },
  },
};
</script>
<template>
<!--  <Loader :loading="updating">-->
    <BCard no-body class="overflow-hidden">
      <div class="bg-primary-subtle">
        <BRow>
          <BCol cols="7">
            <div class="text-primary p-3">
              <h5 class="text-primary">Welcome Back !</h5>
              <p>{{user.name.toUpperCase()}}</p>
            </div>
          </BCol>
          <BCol cols="5" class="align-self-end">
            <img :src="profileImg" alt class="img-fluid" />
          </BCol>
        </BRow>
      </div>
      <BCardBody class="pt-0">
        <BRow>
          <BCol>
            <div class="avatar-md profile-user-wid mb-4">
              <img :src="avatar1" alt class="img-thumbnail rounded-circle" />
            </div>
              <div class="justify-content-center text-center">
                <p class="text-muted mt-0 text-truncate">Guru</p>
                <p class="text-muted mt-0 text-truncate">Wali</p>
                <p class="text-muted mt-0 text-truncate">Piket</p>
              </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
<!--  </Loader>-->
</template>
