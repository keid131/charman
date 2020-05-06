<template>
    <v-card flat>
        <v-row justify="center">
            <v-card-title>ショッピングカート</v-card-title>
        </v-row>
        <v-row justify="center">
            <v-col cols="6">
                <div v-if="$store.state.cart.cart.length != 0">
                    <div v-for="item in $store.state.cart.cart">
                        <v-divider />
                        <cartCard :name="item.Name" :price="item.Price" :img="item.Img" :size="item.Size" :amount="item.Amount" @deleteProduct="remove(item.Id, item.Size)" />
                        <v-divider />
                    </div>
                    <v-row justify="end">
                        <v-col cols="3">
                            <v-card-text>合計 ¥{{$store.state.cart.totalPrice}}</v-card-text>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-5">
                        <v-btn　color="success" class="mr-4" nuxt to="/order">購入手続きへ進む</v-btn>
                        <v-btn　color="success" class="mr-4" nuxt to="/">さらに商品を探す</v-btn>
                        <v-btn　color="success" class="mr-4" @click="clear()">カートを空にする</v-btn>
                    </v-row>
                </div>
                <div v-else>
                    <v-divider />
                    <v-card-text class="text-red">カートに商品が入っていません</v-card-text>
                    <v-divider />
                    <v-row justify="center" class="mt-5">
                        <v-btn　color="success" class="mr-4" nuxt to="/">商品を探す</v-btn>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
import cartCard from '~/components/cart/cartCard.vue'
import { mapActions } from 'vuex'
export default{
    data(){
        return{
            price:3000
        }
    },
    components:{
        cartCard
    },
    methods:{
        remove(id, size){
            this.deleteProduct({productId: id, size: size});
        },
        clear(){
            this.clearCart();
        },
        ...mapActions({
            deleteProduct: 'cart/deleteProduct',
            clearCart: 'cart/clearCart',
      })
    }
}
</script>
