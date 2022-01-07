<template>
  <div id="app">
    <Navbar></Navbar>
    <b-card class="bg-dark-grey p-0 rounded-0 subheader" v-if="!isHome">
      <span class="text-white" v-for="item in breadCrumbItem" :key="item.name">
          <i class="pi pi-arrow-left text-white mx-3 c-pointer" :to="prevRouter"></i>
          {{item.name}}
      </span>
    </b-card>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import router from 'vue-router'
export default {
    components: {
      Navbar
    },
    data(){
      return{
        breadCrumbItem:[],
        prevRouter:""
      }
    },
    computed: {
        isHome() {
            return this.$route.name == 'Home'
        }
    },
    mounted(){
      debugger;
      this.getRoute();
      this.prevRouter = router.go(-1)
    },
    watch:{
      $route(){
        this.getRoute();
      }
    },
    methods:{
      getRoute(){
        this.breadCrumbItem = this.$route.matched;
        console.log(this.$route.matched);
      }
    }
}
</script>
<style scoped>
  .subheader .card-body{
    padding: 12px 16px;
  }
</style>
