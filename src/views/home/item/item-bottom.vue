<template>
  <div class="bottombar">
    <span @click="goCar">
      <i>{{this.$store.state.ids.length}}</i>
    </span>
    <button class="btn1" @click="addCar">加入购物车</button>
    <button class="btn2" @click="goCheckOut">现在购买</button>
  </div>
</template>
<style scoped>

@import url(./item.css);


</style>
<script>
  export default {
    methods: {
      addCar(){
        console.log(this.$route.params)
        this.$store.commit('addCar',{
          id:+this.$route.params.id
        })
      },
      goCar(){
        console.log(this.$router)
        this.$router.push({
          name:'Car'
        })
      },
      goCheckOut(){
        this.$store.commit('addCheckOut',{
          id:+this.$route.params.id
        })
        this.$router.push({
          name:'CheckOut'
        })
      }
    }
  }
</script>
