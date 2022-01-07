import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItemDetails: JSON.parse(sessionStorage.getItem('cartData')) || []
  },
  actions: {
    addCartItem(context, payload) {
      sessionStorage.setItem('cartData', JSON.stringify(payload));
      context.commit('SET_ADD_CART', payload);
    },
  },
  mutations: {
    SET_ADD_CART(state, payload){
      state.cartItemDetails = payload;
    }
  },
  getters:{
    getCartItemDetails:(state)=> state.cartItemDetails,
  }
})
