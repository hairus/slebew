
<script>

import simplebar from "simplebar-vue";
import us from '../../images/flags/us.jpg';
import fr from '../../images/flags/french.jpg';
import es from '../../images/flags/spain.jpg';
import zh from '../../images/flags/chaina.png';
import ar from '../../images/flags/arabic.png';

import logoDarkLg from '../../images/logo-dark.png';
import logoDarkSm from '../../images/logo.svg';
import logoLightLg from '../../images/logo-light.png';
import logoLightSm from '../../images/logo-light.svg';

import avatar1 from '../../images/users/avatar-1.jpg';
import avatar3 from '../../images/users/avatar-3.jpg';
import avatar4 from '../../images/users/avatar-4.jpg';

import github from '../../images/brands/github.png';
import bitbucket from '../../images/brands/bitbucket.png';
import dribbble from '../../images/brands/dribbble.png';
import dropbox from '../../images/brands/dropbox.png';
import mail_chimp from '../../images/brands/mail_chimp.png';
import slack from '../../images/brands/slack.png';

import megamenu from '../../images/megamenu-img.png';

/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      logoDarkLg, logoDarkSm, logoLightLg, logoLightSm, avatar1, avatar3, avatar4, github, bitbucket, dribbble, dropbox, mail_chimp, slack, megamenu,
      languages: [
        {
          flag: us,
          language: "en",
          title: "English",
        },
        {
          flag: fr,
          language: "fr",
          title: "French",
        },
        {
          flag: es,
          language: "es",
          title: "Spanish",
        },
        {
          flag: zh,
          language: "zh",
          title: "Chinese",
        },
        {
          flag: ar,
          language: "ar",
          title: "Arabic",
        },
      ],
      lan: this.$i18n.locale,
      text: null,
      flag: null,
      value: null,
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  components: { simplebar },
  mounted() {
    this.value = this.languages.find((x) => x.language === this.$i18n.locale);
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'login' });
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img :src="logoDarkSm" alt height="22" />
            </span>
            <span class="logo-lg">
              <img :src="logoDarkLg" alt height="17" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img :src="logoLightSm" alt height="22" />
            </span>
            <span class="logo-lg">
                <h4 class="mt-3 text-white">SMAN 1 KRAKSAN</h4>
              <!-- <img :src="logoLightLg" alt height="19" /> -->
            </span>
          </router-link>
        </div>

        <BButton variant="white" id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>

        <!-- App Search-->
        <BForm class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" :placeholder="$t('navbar.search.text')" />
            <span class="bx bx-search-alt"></span>
          </div>
        </BForm>
      </div>

      <div class="d-flex">
        <BDropdown class="d-inline-block d-lg-none ms-2" variant="black" menu-class="dropdown-menu-lg p-0" toggle-class="header-item noti-icon" right>
          <template v-slot:button-content>
            <i class="mdi mdi-magnify"></i>
          </template>

          <BForm class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                <div class="input-group-append">
                  <BButton class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </BButton>
                </div>
              </div>
            </div>
          </BForm>
        </BDropdown>

        <div class="dropdown d-none d-lg-inline-block ms-1">
          <BButton variant="white" type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </BButton>
        </div>

        <BDropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" :src="avatar1" alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1">{{ user.name.toUpperCase() }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>

          <BDropdownDivider></BDropdownDivider>
          <BLink href="javascript:void(0)" @click="logout()" class="dropdown-item text-danger">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            {{ $t('navbar.dropdown.henry.list.logout') }}
          </BLink>
        </BDropdown>

        <div class="dropdown d-inline-block">
          <BButton variant="white" type="button" class="btn header-item noti-icon right-bar-toggle toggle-right" @click="toggleRightSidebar">
            <i class="bx bx-cog bx-spin toggle-right"></i>
          </BButton>
        </div>
      </div>
    </div>
  </header>
</template>
