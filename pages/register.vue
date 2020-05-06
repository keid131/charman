<template>
    <v-card flat>
        <v-row justify="center">
            <v-card-title class="">会員登録</v-card-title>
        </v-row>
        <v-divider />
        <v-row justify="center">
            <v-col cols="8">
                <v-card-text>下記内容をご入力ください。</v-card-text>
                 <v-form　ref="form" v-model="valid" lazy-validation>
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
                    label="パスワード(8文字以上16文字以下英数字)"
                    type="password"
                    validate-on-blur
                    required
                    ></v-text-field>

                    <v-row>
                        <v-col cols="5" sm="6">
                            <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            label="名前(性)"
                            ></v-text-field>
                            </v-col>

                            <v-col cols="5" sm="6">
                            <v-text-field
                            v-model="lastName"
                            :rules="lastNameRules"
                            label="名前(名)"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" sm="6">
                            <v-text-field
                                v-model="kanaFirstName"
                                :rules="kanaFirstNameRules"
                                label="フリガナ(姓)"
                                validate-on-blur
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="5" sm="6">
                            <v-text-field
                                v-model="kanaLastName"
                                :rules="kanaLastNameRules"
                                label="フリガナ(名)"
                                validate-on-blur
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-text-field
                    v-model="zipCode"
                    :rules="zipCodeRules"
                    label="郵便番号(ハイフン不要)"
                    @blur="fetchAddress()"
                    type="number"
                    validate-on-blur
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="address"
                    :rules="addressRules"
                    label="住所"
                    validate-on-blur
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="phoneNumber"
                    :rules="phoneNumberRules"
                    label="電話番号(ハイフン不要)"
                    type="number"
                    validate-on-blur
                    required
                    ></v-text-field>
                    <v-checkbox v-model="memberAgreementCheck">
                        <template v-slot:label>
                            <div>
                                <a
                                    target="_blank"
                                    href="/memberAgreement"
                                    @click.stop
                                >
                                    会員規約
                                </a>
                                に同意する
                            </div>
                        </template>
                    </v-checkbox>
                    <v-row justify="center">
                        <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="registerUser(email,password)"
                        >
                        新規会員登録
                        </v-btn>
                    </v-row>
                    <msgBar :snackbar="isSnackBar" :msg="msgText" @closeSnack="isSnackBar = false" />
                </v-form>
            </v-col>
        </v-row>

    </v-card>
</template>
<script>
import firebase from '~/plugins/firebase'
import axiosJsonpAdapter from 'axios-jsonp'
import { mapActions } from 'vuex'
import msgBar from '~/components/snackBar/msgSnackBar.vue'
  export default {
    data: () => ({
    msgText:'会員登録に失敗しました。再度お試しください。',
    isSnackBar: false,
    valid: false,
    memberAgreementCheck: false,
    email: '',
    emailRules: [
    v => !!v || 'メールアドレスは必ずご入力ください。',
    v => /.+@.+\..+/.test(v) || 'メールアドレスの形式に間違いがあります。',
    ],
    password:'',
    passwordRules:[
    v => !!v || 'パスワードは必ずご入力ください。',
    v => /^.{8,16}$/.test(v) || 'パスワードは8文字以上16文字以下でご設定ください。',
    v => /^[a-zA-Z0-9]+$/.test(v) || 'パスワードは半角英数字でご入力ください。'
    ],
    // confirmPassword:'',
    // confirmPasswordRules:[
    // v => !!v || 'パスワード(確認)は必ずご入力ください。',
    // v => this.password.test(v) || 'パスワードが一致しません。'
    // ],
    firstName:'',
    firstNameRules:[
    v => !!v || '必ずご入力ください。',
    v => /^[ぁ-んァ-ヶー一-龠]+$/.test(v) || '名前(姓)は全角で入力してください。'
    ],
    lastName:'',
    lastNameRules:[
    v => !!v || '必ずご入力ください。',
    v => /^[ぁ-んァ-ヶー一-龠]+$/.test(v) || '名前(姓)は全角で入力してください。'
    ],
    kanaFirstName:'',
    kanaFirstNameRules:[
    v => !!v || '必ずご入力ください。',
    v => /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/.test(v) || 'フリガナは全角カタカナでご記入ください。'
    ],
    kanaLastName:'',
    kanaLastNameRules:[
    v => !!v || '必ずご入力ください。',
    v => /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/.test(v) || 'フリガナは全角カタカナでご記入ください。'
    ],
    birthday:'',
    zipCode:'',
    zipCodeRules:[
    v => !!v || '郵便番号は必ずご入力ください。',
    v => /^.{7}$/.test(v) || '正しい郵便番号をご入力ください。'
    ],
    address:'',
    addressRules:[
        v => !!v || '住所は必ずご入力ください。',
    ],
    phoneNumber:'',
    phoneNumberRules:[
        v => !!v || '電話番号を入力してください。',
        v => /^[0-9]+$/.test(v) || '正しい電話番号を入力してください。'
    ],
    select: null,
    }),
    components:{
        msgBar
    },
    methods: {
        async validate () {
            await this.$refs.form.validate()
            return this.valid
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        isCorrectPassword(){
            return this.password===this.confirmPassword
        },
        async fetchAddress() {
            // 郵便番号のバリデーションチェック
            const reg = /^\d{7}$/

            if (!reg.test(this.zipCode)) return

            // 住所apiを叩く
            const res = await this.$axios.$get(process.env.ZIPCODE_API_URL, {
                adapter: axiosJsonpAdapter,
                params: {
                zipcode: this.zipCode
                }
            })
         
            // 存在しない郵便番号でapiを叩くと200以外のステータスが返ってくる
            if (res.status !== 200) return

            // 返却されたデータを挿入する
            this.address = res.results[0].address1 + res.results[0].address2 + res.results[0].address3
    },
    async registerUser(mailAddress, pswd){
        if(await this.validate()){
            firebase.auth().createUserWithEmailAndPassword(mailAddress, pswd).then(async() =>{
                console.log('登録完了しました。')
                await this.onAuth()
                await this.registerUserToFireStore()
                this.$router.push('/')
            }).catch(function(error) {
            // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
        }
    },
    registerUserToFireStore(){
        const uid = this.$store.state.user.uid
        const customerRef=firebase.firestore().collection("customers").doc(uid)
        const userInfo={
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            kanaFirstName: this.kanaFirstName,
            kanaLastName: this.kanaLastName,
            zipCode: this.zipCode,
            address: this.address,
            phoneNumber: this.phoneNumber,
            isDeleted : false
        }
        console.log('userInfo')
        console.log(userInfo)
        customerRef.set(userInfo)
        customerRef.onSnapshot(snapShot => {
                 const result = snapShot.data();
                        if (result.error) {
                            alert(result.error);
                            customerRef.delete();
                            return;
                        }
                        if (result.status && result.status == "succeeded") {
                            alert(result.status);
                        }
            })
    },
    ...mapActions({
        onAuth: 'user/onAuth' // `this.add()` を `this.$store.dispatch('increment')` にマッピングする
      })
    }
}
</script>
