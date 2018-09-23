<template>
  <div class="topbar">
    <span :style="{opacity:isHome?1:0}" @click="homeBtn"></span>
    <span >
      <i v-show="isHome" ></i>
      <strong v-show="!isHome">{{title}}</strong>
    </span>
    <span @click="goSearch" :style="{opacity:isHome?1:0}"></span>
    <div class="list" ref="list">
      <div class="item">
        <p>锤子科技商城</p>
      </div>
      <div class="item">
        <p>坚果Pro 2S</p>
      </div>
      <div class="item">
        <p>坚果R1</p>
      </div>
      <div class="item">
        <p>坚果TNT工作站</p>
      </div>
      <div class="item">
        <p>坚果3</p>
      </div>
      <div class="item">
        <p>应用</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        title:'',
        isHome:true,
        isShow:true
      }
    },
    methods:{
      homeBtn(){
        if(this.isShow){
          this.$refs.list.style.height='300px'
        }else{
          this.$refs.list.style.height=0
        }
        this.isShow=!this.isShow
      },
      goSearch(){
        this.$router.push('/sear')
      }
    },
    watch:{
      $route(to,from){
        if(to.name=='Home'){
          this.title=''
          this.isHome=true
        }else if(to.name=='Plist'){
          this.title='列表'
          this.isHome=true
        }else if(to.name=='Car'){
          this.title='购物车'
          this.isHome=false
        }else if(to.name=='Mine'){
          this.title='个人中心'
          this.isHome=false
        }else if(to.name=='Login'){
          this.title='登录'
          this.isHome=false
        }

      }
    }
  }
</script>
<style >

</style>
