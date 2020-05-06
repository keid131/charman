<template>
    <v-card flat>
        <v-row justify="center">
            <v-card-title>ログイン</v-card-title>
        </v-row>
        <v-divider />
        <v-row justify="center" class="pb-5">
            <v-col cols="6">
                 <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="メールアドレス"
                    validate-on-blur
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="パスワード"
                    type="password"
                    validate-on-blur
                    required
                    ></v-text-field>
                  
                </v-form>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4 "
                    @click="login"
                    >
                    ログイン
                </v-btn>
                <msgBar :snackbar="isSnackBar" :msg="msgText" @closeSnack="isSnackBar = false" />
            </v-col>
          </v-row>
          <v-divider />
          <v-row justify="center">
            <v-col cols="6">
                <v-row justify="center">
                  <v-card-title>会員登録がまだ登録していないお客様</v-card-title>
                  <v-card-text class="pt-5 font-weight-bold">以下より会員登録をお願いいたします。</v-card-text>
                  <v-btn class="primary mt-5" to="/register">会員登録</v-btn>
                </v-row>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
import firebase from '~/plugins/firebase'
import { mapActions } from 'vuex'
import msgBar from '~/components/snackBar/msgSnackBar.vue'
  export default {
    data: () => ({
      msgText:'ログインに失敗しました。再度お試しください。',
      isSnackBar: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスをご入力ください。',
        v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が間違っています。',
      ],
      password:'',
      passwordRules:[
        v => !!v || 'パスワードをご入力ください。',
      ],
      select: null,
    }),
    components:{
      msgBar
    },
    methods: {
      login () {
        if(/.+@.+\..+/.test(this.email)){
          firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(data =>{
            console.log('ログイン完了');
            this.onAuth()
            this.$router.push('/')
          }).catch(error=>{
            this.isSnackBar = true
          });
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      openSnackBar(){
        this.isSnackBar = true
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      ...mapActions({
        onAuth: 'user/onAuth' // `this.add()` を `this.$store.dispatch('increment')` にマッピングする
      })
    },
  }
</script>
