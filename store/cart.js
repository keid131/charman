import firebase from '~/plugins/firebase'
import 'firebase/auth'
export const state = () => ({
    cart: [],
    totalPrice: 0
})

export const mutations = {
    // 状態の変更を行う。
    addCart(state, data) {
        const dataIndex = state.cart.findIndex(n => (n.Id == data.Id) & (n.Size == data.Size))
        if (dataIndex != -1) {
            state.cart[dataIndex].Amount++;
        } else {
            data['Amount'] = 1;
            state.cart.push(data);
        }
    },
    deleteProduct(state, data) {
        const dataIndex = state.cart.findIndex(n => (n.Id == data.Id) & (n.Size == data.Size))
        console.log(dataIndex)
        if (dataIndex === -1) {
            return
        }
        if (state.cart[dataIndex].Amount > 1) {
            state.cart[dataIndex].Amount--;
        } else if (state.cart[dataIndex].Amount === 1) {
            const newCart = state.cart.filter(n => (n.Id !== data.Id) | (n.Size !== data.Size));
            state.cart = newCart;
        }
        return
    },
    clearCart(state) {
        state.cart = []
    },
    calcAmount(state) {
        var newTotalPrice = 0
        state.cart.forEach(n => {
            newTotalPrice += n.Amount * n.Price
        });
        state.totalPrice = newTotalPrice
    }
}

export const actions = {
    // 一連の処理はここに記載する。フロントエンドからのDBの書き込みもここから行う。
    // TODO: DB周りの処理はサーバーサイドに移管する。
    // 状態の変更はmutationsで行うためここでは行わない。
    onAuth({ commit }) {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : null;
            if (!user) {
                return;
            }
            commit('setUserInfo', { email: user.email, uid: user.uid })
        });
    },
    addCart({ commit, state }, { productId, name, price, imgUrl, size }) {
        //commit('addCart', { Id: 'test', Name: 'name', Price: 1000, Img: '', Size: 'M' })
        commit('addCart', { Id: productId, Name: name, Price: price, Img: imgUrl, Size: size });
        commit('calcAmount');
    },
    clearCart({ commit }) {
        commit('clearCart');
        commit('calcAmount');
    },
    deleteProduct({ commit }, { productId, size }) {
        commit('deleteProduct', { Id: productId, Size: size });
        commit('calcAmount');
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