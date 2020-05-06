<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ msg }}
      <v-btn
        color="blue"
        text
        @click="closeSnackBar"
      >
        閉じる
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    props:{
        snackbar:{
            type: Boolean
        },
        msg:{
            type: String
        }
    },
    data(){
        return {
            text: 'My timeout is set to 2000.',
            timeout: 0,
        }
    },
    methods:{
        closeSnackBar(){
            this.$emit('closeSnack')
        }
    }
  }
</script>