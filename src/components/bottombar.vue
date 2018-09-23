<template>
  <div class="bottombar">
    <router-link to="/home" tag="div">
      <img src="../assets/img/home.png" />
      <h4>首页</h4>
    </router-link>
    <router-link to="/plist" tag="div">
      <img src="../assets/img/list.png" />
      <h4>分类</h4>
    </router-link>
    <router-link to="/car" tag="div">
      <img src="../assets/img/car.png" />
      <h4>购物车</h4>
      <span>{{carNun}}</span>
    </router-link>
    <router-link to="/mine" tag="div">
      <img src="../assets/img/head.png" />
      <h4>个人中心</h4>
    </router-link>

  </div>
</template>
<style >
 @import url(./bottombar.css);
</style>
<script>
  export default {
    computed:{
      carNun(){
        //  console.log( this.$store.state.ids)
        let num=0
        this.$store.state.ids.forEach(e=>num+=e.checkNumber)
         return num
          // return a.checkNumber+b.checkNumber

      }
    }
  }
</script>
