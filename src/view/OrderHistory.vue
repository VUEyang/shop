<template>
  <div>
    <nav-bread>历史订单</nav-bread>
    <div class="container">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2">
            <span>历史订单</span>
            <router-link class="order-dingdan" to="/cart">我的购物车</router-link>
          </h2>
        </div>
        <div class="item-list-wrap" v-for="(item,index) in cartList" v-if="index<num" :key="index">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>时间：{{item.createDate}}</li>
                <li>订单号：{{item.orderId}}</li>
                <li>总额：{{item.orderTotal | currency('￥')}}</li>
                <!-- <li>小计</li>
                <li>编辑</li> -->
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="ship in item.goodsList">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img :src="'/static/img/'+ ship.productImage" :alt="ship.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{ ship.productName }}</div>
                  </div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-price">x{{ ship.productNum }}</div>
                </div>
                <!-- <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                        <span class="select-ipt">x{{ ship.productNum }}</span>
                    </div>
                  </div>
                </div> -->
                <div class="cart-tab-4">
                  <div class="item-price-total">{{ ship.productNum * ship.salePrice | currency('￥') }}</div>
                </div>
                <!-- <div class="cart-tab-5">
                  <div class="cart-item-opration">
                    <a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item.productId)">
                      <svg class="icon icon-del">
                        <use xlink:href="#icon-del"></use>
                      </svg>
                    </a>
                  </div>
                </div> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="shipping-addr-more">
              <a class="addr-more-btn up-down-btn" href="javascript:;" @click="more">
                查看更多
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBread from '@/components/NavBread'

import axios from 'axios'
export default {
  components: {
    NavBread,
    
  },
  data () {
    return {
      cartList: [],
      num: 3
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/orderDetail').then((response) => {
        if (response.data.status === 0) {
          let cartList = response.data.result
          this.cartList = cartList
          console.log(response)
        }
      })
    },
    more () {
      this.num += 3
    },
    vacancy () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
.input-sub, .input-add {
  min-width: 41px;
  height: 100%;
  border: 0;
  color: #605F5F;
  text-align: center;
  font-size: 16px;
  overflow: hidden;
  display: inline-block;
  background: #f0f0f0;
}
.item-quantity .select-self-area .select-ipt {
  display: inline-block;
  padding: 0 3px;
  width: 30px;
  min-width: 30px;
  text-align: center;
}
.item-quantity .select-self-area {
  background: none;
  border: 1px solid #f0f0f0;
}
.input-sub:hover, .input-add:hover {
  background: rgba(209,67,74,.2)
}
.order-dingdan {
  float: right;
  display: inline-block;
  width: 150px;
  height: 30px;
  font-size: 1.4rem;
  text-align: center;
  line-height: 30px;
  color: skyblue
}
.order-dingdan:hover {
  border-radius: 5px;
  color: rgba(135,206,235, .7);
  background-color: rgba(135,206,235, .3);
}
.cart-item-head>ul{
  /* display: -webkit-box; */
  /* width: 100%; */
}
.cart-item-head>ul>li {
  /* display: block;
  -webkit-box-flex: 1; */
  letter-spacing: 0;
}
/* .cart-tab-2 {
  display: block;
} */

</style>


