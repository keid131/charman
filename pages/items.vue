<template>
  <div>
    <v-row justify="center">
      <p class="font-weight-regular text-center display-1">PRODUCT</p>
    </v-row>
    <v-row>
        <v-col cols="3">
            <itemCard to="test" name="hogehoge" :price="price" :img="url" />
        </v-col>
        <v-col cols="3">
            <itemCard to="test" name="hogehoge" :price="price" :img="url" />
        </v-col>
    </v-row>
  </div>
</template>
<script>
  import itemCard from '~/components/content/itemCard.vue'
  export default {
       data: () => ({
           price: 4800,
           url : 'https://firebasestorage.googleapis.com/v0/b/anemoi-94557.appspot.com/o/white_.png?alt=media&token=0ebf0f0c-ca9c-4fd6-9d1e-5271af4c37dd'
       }),
    components:{
      itemCard
    }
  }
</script>

