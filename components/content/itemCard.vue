<template>
    <v-card :to="to" >
        <v-img :src='img' class="pa-1"></v-img>
        <v-card-subtitle class="pa-0" style="text-align:center;padding:0">charman</v-card-subtitle>
        <v-card-title class="display-1 pb-0" style="display:block; text-align:center; padding:0">{{name}}</v-card-title>
        <v-card-text class="text-black" style="text-align:center">¥{{price.toLocaleString()}}</v-card-text>
        
    </v-card>
</template>

<script>
export default{
    props:{
        to: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            default: 'BULK HOMME'
        },
        price:{
            type: Number,
            required: true,
            default: 1000
        },
        img: {
            type: String,
            required: true,
        }
    }
}
</script>
<style>
    .item-card-text{
        text-align:center;
    }
</style>