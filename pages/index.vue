<template>
  <div>
    <v-row no-gutters class="main-home-img" >
      <v-col cols="6">
        <overLayCard />
      </v-col>
      <v-col cols="6">
        <overLayCard />
      </v-col>
    </v-row>
    <v-row no-gutters class="sub-home-img">
      <v-col cols="6">
        <overLayCard />
      </v-col>
      <v-col cols="6">
        <overLayCard />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import overLayCard from '~/components/overlay/overLayCard.vue'
  export default {
    components:{
      overLayCard
    },
    data(){
      return{
        img:'~/static/white_shirt.png'
      }
    },
  }
</script>
<style>
  .main-home-img{
    min-height:60vh
  }
  .sub-home-img{
    min-height:40vh
  }
</style>
