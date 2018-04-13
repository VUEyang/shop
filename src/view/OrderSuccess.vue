<template>
  <div class="container">
    <nav-header></nav-header>
    <nav-bread>订单内容</nav-bread>
    <div class="page-title-normal">
      <h2 class="page-title-h2"><span>check out</span></h2>
    </div>
    <!-- 进度条 -->
    <div class="check-step">
      <ul>
        <li class="cur"><span>确认</span> 地址</li>
          <li class="cur"><span>订单</span> 内容</li>
          <li class="cur"><span>付款</span></li>
          <li class="cur"><span>提交订单</span>成功</li>
      </ul>
    </div>

    <div class="order-create">
      <div class="order-create-pic"><img src="static/img/ok-2.png" alt=""></div>
      <div class="order-create-main">
        <h3>恭喜你! <br>您的订单正在处理中!</h3>
        <p>
          <span>订单号：{{orderId}}</span>
          <span>金额：{{total}}</span>
        </p>
        <div class="order-create-btn-wrap">
          <div class="btn-l-wrap">
            <!-- <a href="javascript:;" class="btn btn--m">返回购物车</a> -->
            <router-link to="/cart" class="btn btn--m">返回购物车</router-link>
          </div>
          <div class="btn-r-wrap">
            <!-- <a href="javascript:;" class="btn btn--m">返回商城首页</a> -->
            <router-link to="/" class="btn btn--m">返回商城首页</router-link>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavBread from '@/components/NavBread'
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'

import axios from 'axios'
export default {
  components: {
    NavBread,
    NavHeader,
    NavFooter
  },
  data () {
    return {
      orderId: 10000,
      total: 999
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/orderDetail').then((response) => {
        let res = response.data
        if(res.status == 0) {
          this.orderId = res.result[res.result.length - 1].orderId
          this.total = res.result[res.result.length - 1].orderTotal
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
