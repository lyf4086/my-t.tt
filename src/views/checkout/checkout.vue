<template>
  <div class="main" v-if="hasData">
    <div class="top">
      <div class="back" @click="back"><返回</div>
      <h3>订单信息</h3>
      <div> &nbsp;&nbsp;&nbsp;</div>
    </div>
    <div class="content">
      <div class="order-car">
        <h3>收货信息</h3>
        <div class="">
          <div class="address">地址</div>
          <p>></p>
        </div>
      </div>
      <div class="fenjie"></div>
      <div class="pay-method">
        <h3>支付方式</h3>
        我是支付方式
      </div>
      <div class="fenjie"></div>
      <div class="notice">
        <h3>用户须知</h3>
        用户须知
      </div>
      <div class="fenjie"></div>
      <div class="product-info">
        <h3>商品信息</h3>
        这里是商品信息
      </div>


    </div>
    <div class="bottom">
      <div class="price">
        应付金额 : <i>￥4998.00</i>
      </div>
      <button>现在支付</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        hasData:false,
        option:{}
      }
    },
    methods: {
      back(){
        this.$router.go(-1)
      }

    },
    async created() {
      let ids=this.$store.state.checkout
      // console.log(ids)
      let { data}=await axios(`/proxy/product/skus?ids=${ids}&with_stock=true&with_spu=true`)
      console.log(data.data.list)

      this.hasData=true
    }
  }
</script>
<style scoped>
@import url(./checkout.css);
</style>
