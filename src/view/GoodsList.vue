<template>
  <div class="sdf">
     <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 31 32">
            <title>add</title>
            <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
          <symbol id="icon-question" viewBox="0 0 32 32">
            <title>question</title>
            <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
            <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
          </symbol>
        </defs>
      </svg>
    <nav-header></nav-header>
    <nav-bread>首页</nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序方式:</span>
          <a href="javascript:void(0)" class="default cur">--</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-ok"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop">筛选条件</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>价格区间:</dt>
              <dd>
                <a href="javascript:void(0)" @click="setPriceFilter('all')" :class="{'cur': priceChecked=='all'}">All</a>
              </dd>
              <dd v-for="(price, index) in priceFilter" :key="index">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur': priceChecked==index}">{{ price.startPrice | currency('￥')}} - {{ price.endPrice | currency('￥') }}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/img/' + item.productImage" :alt="item.productName"></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ item.productName }}</div>
                    <div class="price">{{ item.salePrice | currency('￥')}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
                <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                  ...<img src="/static/loading/loading-spinning-bubbles.svg" v-show="loading">
                </div> -->
                <div class="shipping-addr-more" v-if="goodsList.length>=8">
              <a class="addr-more-btn up-down-btn" href="javascript:;" @click="loadMore">
                {{message}}
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>

      <!-- 未登录 -->
      <model :mdShow="mdShow" @niubi="mdShow = false">
        <p slot="message">请先登录否则无法加入购物车</p>
        <div class="logdiv" slot="btnGroup">
          <a href="javascript:;" class="btn-login" @click="mdShow = false">关闭</a>
        </div>
      </model>

      <!-- 登录 -->
      <model :mdShow="mdShowCart" @niubi="mdShowCart = false">
        <p slot="message">
          <svg class="icon icon-arrow-short"><use xlink:href="#icon-edit"></use></svg>
          <span>加入购物车成!</span>
        </p>
        <div class="btn-shop" slot="btnGroup">
          <a href="javascript:;" class="btn btn--m" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m"  to="/cart"> 查看购物车</router-link>
        </div>
      </model>

  </div>
</template>

<script>
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import NavBread from '@/components/NavBread'
import Model from '@/components/Modal'

import '@/assets/css/base'
import '@/assets/css/login'
import '@/assets/css/checkout'
import '@/assets/css/product'

import axios from 'axios'
export default {
  name: 'GoodsList',
  data () {
    return {
      goodsList: Array,
      sortFlag: true,
      priceChecked: 'all',
      page: 0,
      pagesize: -8,
      loading: false,
      busy: true,
      mdShow: false,
      mdShowCart: false,
      message: '加载更多商品',
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '100.00'
        },
        {
          startPrice: '100.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '2000.00'
        },
        {
          startPrice: '2000.00',
          endPrice: '5000.00'
        }
      ]
    }
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Model
  },
  mounted () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList (flag) {
      let param = {
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked,
        page: this.page,
        pagesize: this.pagesize
      }
      axios.get('goods/list', {params: param}).then((response) => {
        let res = response.data
        console.log(res)
        if(res.status==0){
          if(flag){
              this.goodsList = this.goodsList.concat(res.result.list);
console.log(1)
            if(res.result.count==0){
                this.busy = true;
                console.log(2)
            }else{
                this.busy = false;
                console.log(3)
            }
          }else{
            this.goodsList = res.result.list;
            this.busy = false;
            console.log(4)
          }
        }else{
          this.busy = true;
          this.message = '我是有底线的'
          console.log(5)
        }
      })
    },
    sortGoods () {
      this.sortFlag = !this.sortFlag
      this.getGoodsList()

      // for(let i = 0; i < this.GoodsList.length-1; i++) {
      //   for(let j =  0; j < this.GoodsList.length-1-i; j++) {
      //     if(this.GoodsList[j].salePrice > this.GoodsList[j+1].salePrice) {
      //       var str = this.GoodsList[j]

      //       this.GoodsList[j] = this.GoodsList[j+1]

      //       this.GoodsList[j+1] = str
      //     }
      //   }
      // }

      console.log(this.goodsList)
    },
    setPriceFilter (index) {
      console.log(index)
      this.page = 0
      this.priceChecked = index
      this.getGoodsList()
    },
    loadMore () {
      setTimeout(() => {
        console.log(this.busy,555)
        if(!this.busy) {
          this.busy = true
          this.page++
          this.getGoodsList(true)
          console.log(666)
        }
      }, 800)
    },
    addCart (productId) {
      if(document.cookie) {
        var userId = document.cookie.split('userId=')[1].split(';')[0]
        if (userId) {
          this.mdShowCart = !this.mdShowCart
          axios.post('goods/addCart', {
            'productId': productId
         }).then((result) => {
            this.$store.commit('updateCartCount', 1)
        })
        } else {
          this.mdShow = !this.mdShow
        }
      } else {
        this.mdShow = !this.mdShow
      }
    }
  }
}
</script>

<style>
.logdiv {
  width: 100%;
}
.btn-shop {
  margin-left: auto;
  margin-right: auto;
}
</style>
