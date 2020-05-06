<template>
    <v-app>
    <v-card class="overflow-hidden" flat>
    <v-app-bar
      absolute
      color="white"
      hide-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-toolbar-title><nuxt-link to="/" style="text-decoration: none; color:black !important">Charman</nuxt-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-3 ml-3" nuxt to="/cart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon class="mr-3 ml-3" nuxt to="/login">
        ログイン
      </v-btn>

      <v-btn icon class="mr-3 ml-3" nuxt to="/register">
        会員登録
      </v-btn>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="100vh"
    >
        <v-content class="content-area" style="margin-top: 64px">
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-content>
        <v-row no-gutters justify="center">
            <v-col cols="12">
                <footerBar />
            </v-col>
        </v-row>
        </v-sheet>
  </v-card>
    </v-app>
</template>

<script>
import footerBar from '~/components/footer/footerBar.vue'
export default {
    components:{
        footerBar
    }
}
</script>

<style>
    html {
    font-family: sans-serif,'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial ;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
    box-sizing: border-box;
    margin: 0;
    }
    .container{
        padding: 0;
        margin:0;
    }

    .content-area{
        min-height:100vh;
    }
</style>
