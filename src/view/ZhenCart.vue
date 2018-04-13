<template>
  <div>
    <nav-bread>购物车</nav-bread>
    <div class="container">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2">
            <span>我的购物车</span>
            <router-link class="order-dingdan" to="/orderHistory">历史订单</router-link>
          </h2>
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>商品</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
                <li>编辑</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="(item, index) in cartList" :key="index">
                <div class="cart-tab-1">
                  <div class="cart-item-check">
                    <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check':item.checked == 1}" @click="editCart('checked',item)">
                      <svg class="icon icon-ok">
                        <use xlink:href="#icon-ok"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="cart-item-pic">
                    <img :src="'/static/img/'+ item.productImage" :alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{ item.productName }}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{ item.salePrice }}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <a class="input-sub" @click="editCart('minu',item) ">-</a>
                        <span class="select-ipt">{{ item.productNum }}</span>
                        <a class="input-add" @click="editCart('add', item)">+</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{ item.productNum * item.salePrice }}</div>
                </div>
                <div class="cart-tab-5">
                  <div class="cart-item-opration">
                    <a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item)">
                      <svg class="icon icon-del">
                        <use xlink:href="#icon-del"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cart-foot-wrap">
          <div class="cart-foot-inner">
            <div class="cart-foot-l">
              <div class="item-all-check">
                <a href="javascipt:;" @click="toggleCheckAll">
                      <span class="checkbox-btn item-check-btn" :class="{'check': checkAllFlag}">
                          <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                      </span>
                  <span>全选</span>
                </a>
              </div>
            </div>
            <div class="cart-foot-r">
              <div class="item-total">
                总价: <span class="total-price">{{ totalPrice }}</span>
              </div>
              <div class="btn-wrap">
                <a class="btn btn--red" :class="{'btn--dis': checkedCount==0}" @click="checkOut">结算</a>
              </div>
            </div>
          </div>
        </div>

        <modal :mdShow="modalConfirm" @niubi="modalConfirm = false">
          <a href="javascript:;" slot="message" v-text="delsucceed">
          </a>
          <div slot="btnGroup">
            <a href="javascript:;" class="btn btn--m" @click="cartDel()">确定</a>
            <a href="javascript:;" class="btn btn--m" @click="modalConfirm = false">取消</a>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import NavBread from '@/components/NavBread'
import Modal from '@/components/Modal'

import axios from 'axios'
export default {
  components: {
    NavBread,
    Modal
  },
  data () {
    return {
      cartList: [],
      modalConfirm: false,
      delsucceed: '你确定要删除该商品吗？',
      delItem: ''
    }
  },
  computed: {
    totalPrice () {
      let money = 0
      this.cartList.forEach((item) => {
        if (item.checked === 1) {
          money += parseInt(item.productNum) * parseFloat(item.salePrice)
        }
      })
      return money
    },
    checkAllFlag () {
      return this.checkedCount === this.cartList.length
    },
    checkedCount () {
      let i = 0
      this.cartList.forEach((item) => {
        if (item.checked === 1) i++
      })
      return i
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/cartList').then((response) => {
        if (response.data.status === 0) {
          let cartList = response.data.result
          this.cartList = cartList
        }
      })
    },
    editCart (flag, item) {
      if (flag === 'add') {
        item.productNum++
        this.$store.commit('updateCartCount', 1)
      } else if (flag === 'minu') {
        if (item.productNum <= 1) {
          return 
        }
        item.productNum--
        this.$store.commit('updateCartCount', -1)
      } else {
        item.checked = item.checked === 1 ? 0 : 1
      }
      axios.post('/users/cartEdit', {
        productId: item.productId,
        productNum: item.productNum,
        checked: item.checked
      }).then((response) => {
        console.log(response)
      })
    },
    delCartConfirm (item) {
      this.delItem = item
      this.modalConfirm = true
    },
    cartDel () {
      axios.post('/users/cartDel', {
        productId: this.delItem.productId
      }).then((response) => {
        this.delsucceed = '删除成功'
        this.modalConfirm = false
        this.init()
        this.$store.commit('updateCartCount', -this.delItem.productNum)
      })
    },
    toggleCheckAll () {
      let flag = this.checkAllFlag
      console.log(flag)
      this.cartList.forEach((item) => {
        item.checked = flag ? 0 : 1
      })
      axios.post('users/editCheckAll', {
        checkAll: this.checkAllFlag
      }).then((response) => {
        console.log(response)
      })
    },
    checkOut () {
      if (this.checkedCount > 0) {
        this.$router.push({
          path: '/address'
        })
      }
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
  width: 120px;
  height: 30px;
  text-align: center;
  font-size: 1.4rem;
  line-height: 30px;
  color: skyblue
}
.order-dingdan:hover {
  border-radius: 5px;
  color: rgba(135,206,235, .7);
  background-color: rgba(135,206,235, .3);
}
</style>


