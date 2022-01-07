<template>
  <div class="container mt-4">
    <div class="card-width position-relative">
      <router-link to="/configureNewDoor">
        <b-card class="shadow-sm rounded mb-3 arrow-icon c-pointer" v-for="card in cards" :key="card.title">
          <h5 class="mb-0 fw-bold">{{card.title}}</h5>
          <p class="text-muted fs-14 mb-0">{{card.subheader}}</p>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
      return{
            cards: [
                {
                    title: 'Configure your door from scratch',
                    subheader:"Residential, Commerical, Entry doors"
                },
                {
                    title: 'Parts / Openers',
                    subheader:"Order Parts and Openers"  
                },
                {
                    title: 'Direct Item Entry',
                    subheader:"Order Parts / Openers using a Product ID" 
                },
                {
                    title: 'Choose from favourites',
                    subheader:"Re-order door from your favourites " 
                }
            ]
      }
  }
};
</script>

<style>
  .card-width .arrow-icon:after{
    content:url('../assets/images/right-arrow.png');
    position:absolute;
    right: 2%;
    top: 38%;
  }
</style>
