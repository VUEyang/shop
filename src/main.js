// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import lazyload from 'vue-lazyload'
import { currency } from './util/currency'

// register globally
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(Vuex)
Vue.use(infiniteScroll)

// css
// import '@/assets/css/base'
// import '@/assets/css/login'
// import '@/assets/css/checkout'
// import '@/assets/css/product'
Vue.config.productionTip = false

Vue.use(lazyload, {
  loading: '/static/loading/loading-spinning-bubbles.svg'
})
Vue.filter("currency", currency)

const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    updateUserInfo(state, nickName) {
      state.nickName = nickName
    },
    updateCartCount(state, cartCount) {
      state.cartCount += cartCount
    },
    initCartCount(state, cartCount) {
      state.cartCount = cartCount
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
