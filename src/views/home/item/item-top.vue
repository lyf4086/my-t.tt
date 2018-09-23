<template>
  <div class="topbar">
    <span @click="back" :style="{background:'none'}"><i><返回</i></span>
    <span class="text">{{title}}</span>
    <span @click="goSearch">&nbsp;</span>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title:''
      }
    },
    created() {
      // let id=this.$router.query.id
      // console.log(this.$route.params.num)
      //let num=this.$route.params.num
      this.title=this.$route.params.title
      if(this.$route.params.num==64){
        this.title='手机'
      }
       if(this.$route.params.num==77){
        this.title='空气净化'
      }
       if(this.$route.params.num==60){
        this.title='官方配件'
      }
       if(this.$route.params.num==69){
        this.title='品牌周边'
      }
       if(this.$route.params.num==61){
        this.title='好物优选'
      }

    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      goSearch(){
        this.$router.push('/sear')
      }
    }
  }
</script>
<style scoped>

@import url(./item.css);


</style>
