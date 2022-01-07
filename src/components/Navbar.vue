<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-4">
      <b-navbar-brand href="#">
        <img :src="logo" alt="brandLogo"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <div class="mx-3 c-pointer">
            <i class="pi pi-th-large text-white opacity-50"></i>
          </div>

          <div class="mx-3 c-pointer">
            <i class="pi pi-bell text-white opacity-50"></i>
          </div>

          <div class="mx-3 c-pointer">
            <i class="pi pi-question-circle text-white opacity-50"></i>
          </div>

          <div class="display-border px-1 rounded-circle mx-3 c-pointer opacity-50">
            <i class="pi pi-user text-white"></i>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from "../assets/images/logo.png"
export default {
  name: 'Navbar',
  components: {
  },
  data(){
    return{
      logo:Logo
    }
  }
};
</script>
