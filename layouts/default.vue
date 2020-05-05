<template>
   <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex class="split-box layout-flex left-box" md4 xs4>
          
      </v-flex>
      <v-flex class="split-box layout-flex right-box" md8 xs8>
          <nuxt />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import splitMenu from '~/components/sideMenu/splitMenu.vue'
// export default {
//     components:{
//         splitMenu
//     }
// }
</script>

<style>
    html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
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

    .split-box{
        position:absolute;
        height:100%;
    }
 
    .left-box {
        left:0;
        width:100%;
    }
 
    .right-box {
        right:0;
        width: 100%;
        overflow-y:scroll;
    }

    .layout-flex{
      padding: 0 !important;
      margin: 0 !important;
      min-height: 100vh;
    }

    @media screen and (max-width:600px) { 
	.split-box {
		position:relative;
		width:100%;
		height:auto;
 
	}
}
</style>
