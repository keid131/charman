<template>
    <v-card flat class="mt-5 mb-5">
        <v-row no-gutters>
            <v-col cols="3">
                <v-img :src="img"></v-img>
            </v-col>
            <v-col cols="9">
                <v-card-title>{{name}}</v-card-title>
                <v-divider />
                <v-card-text>サイズ:{{size}}</v-card-text>
                <v-card-text>個数:{{amount}}</v-card-text>
                <v-row no-gutters>
                    <v-col cols="4" class="mt-5">
                        <v-btn class="ma-2" outlined color="black" @click="deleteProduct">削除</v-btn>
                    </v-col>
                    <v-spacer />
                    <v-col cols="4" class="mt-5">
                        <v-card-text class="font-weight-regular">小計（税込）¥{{price.toLocaleString()}}</v-card-text>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default{
    props:{
        name: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        size:{
            type: String
        },
        img: {
            type: String,
            required: true
        },
        amount: {
            type: Number
        }
    },
    methods:{
        deleteProduct(){
            this.$emit('deleteProduct');
        }
    }
}
</script>
