import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/Cart'
import Address from '@/view/Address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'
import OrderHistory from '@/view/OrderHistory'

import ZhenCart from '@/view/ZhenCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      // name: Cart,
      component: Cart,
      children: [
        {
          path: '',
          component: ZhenCart
        },
        {
          path: '/orderHistory',
          name: OrderHistory,
          component: OrderHistory
        }
      ]
    },
    {
      path: '/address',
      // name: Address,
      component: Address
    },
    {
      path: '/orderConfirm',
      // name: OrderConfirm,
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      // name: OrderSuccess,
      component: OrderSuccess
    },
  ]
})
