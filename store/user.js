import firebase from '~/plugins/firebase'
import 'firebase/auth'
export const state = () => ({
    email: null,
    uid: null
})

export const mutations = {
    // 状態の変更を行う。
    setUid(state, data) {
        state.uid = data
    },
    setUserInfo(state, data) {
        state.email = data.email
        state.uid = data.uid
    }
}

export const actions = {
    onAuth({ commit }) {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : null;
            if (!user) {
                commit('setUserInfo', { email: null, uid: null })
                return;
            }
            commit('setUserInfo', { email: user.email, uid: user.uid })
        });
    },
    sendEmailVerification() {
        user = firebase.auth().currentUser
        user.sendEmailVerification().then(function () {
            return true;
        }).catch(function () {
            return false;
        });
    }
}

export const getters = {
    getUserName(state) {
        return state.userName
    },
    getUserUid(state) {
        return state.uid
    },
    getUserBooks(state) {
        return state.userBook
    }
}