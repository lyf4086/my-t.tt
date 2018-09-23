<template>
<div>
  <img src="@/assets/img/zhuan.gif" width="100%"  v-if="!isShow"/>
  <div class="main" v-if="isShow" >
    <div class="information" @click="login">
      <div class="avatar">
        <img src="https://static.smartisanos.cn/account/asset/img/default-user-avatar.png" />
      </div>
      <div class="tele">
        <span>&nbsp;&nbsp;<i v-if="!isLogin">登录/注册</i><i v-if="isLogin">{{user}}</i></span>
        <span>></span>
      </div>
      <div class="btns">
        <div>
          <a href="#">全部订单</a>
        </div>
        <div>
          <a href="#">代付款</a>
        </div>
        <div>
          <a href="#">待收货</a>
        </div>
        <div>
          <a href="#">售后</a>
        </div>
      </div>
    </div>
    <div class="address">
      <div class="item">
        <span>地址管理</span>
        <span>></span>
      </div>
      <div class="item">
        <span>我的优惠券</span>
        <span>></span>
      </div>
      <div class="item">
        <span>优先购买码</span>
        <span>></span>
      </div>
      <div class="item">
        <span>提货兑换卡</span>
        <span>></span>
      </div>
    </div>
    <div class="problem">
      <div class="item">
        <span>常见问题</span>
        <span>></span>
      </div>
      <div class="item">
        <span>服务支持</span>
        <span>></span>
      </div>
    </div>
    <div class="service">
      <div class="item">
        <span>以旧换新</span>
        <span>></span>
      </div>
      <div class="item">
        <span>意外碎屏保修服务</span>
        <span>></span>
      </div>
      <div class="item">
        <span>延长保修服务</span>
        <span>></span>
      </div>

    </div>
  </div>
</div>
</template>
<style scoped>
@import url('./mine.css');
</style>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        isShow:false,
        isLogin:false,
        user:''
      }
    },
    created() {
      let info=this.$local.fetch('t.tt')
      console.log(info)
      this.isLogin=true
      this.user=info.userName
      this.isShow=true
    },
    methods: {
      login(){
        console.log(999999)
        this.$router.push('/login')
      }
    }
  }
</script>
