<template>
  <div  class="main" v-if="hasData">

    <div class="index-btn">
      <div class="btn-wrap">
        <button :class="{'active':addClass==1}" @click="handel11">商品</button>
        <button :class="{'active':addClass==2}" @click="handel22">详情</button>
        <button :class="{'active':addClass==3}" @click="handel33">参数</button>
        <button :class="{'active':addClass==4}" @click="handel44">推荐</button>
      </div>
    </div>
    <div ref="main">
      <img v-lazy="list[0].sku_info[0].ali_image" />
      <div class="infomation">
        <h3>商品信息</h3>
        <h2>{{list[0].name}}</h2>
        <p>{{list[0].shop_info.spu_sub_title}}</p>
        <strong>￥{{list[0].price}}</strong>
      </div>
      <div class="img-wrap" >
        <h3>商品详情</h3>
        <img v-lazy="list[0].shop_info.tpl_content.base.images.ali_mobile.url[0]" />

      </div>
    </div>

  </div>
</template>
<style scoped>
@import url(./item.css);

</style>
<script>
import axios from 'axios'
  export default {
    data(){
      return{
        hasData:false,
        list:'',
        addClass:1
      }
    },
    async created() {
      // console.log(this.$route.params.id.slice(0,7))
      let data=await axios(`/proxy/product/spus?ids=${this.$route.params.id.slice(0,7)}`)

      this.list=data.data.data.list
      // console.log(this.list[0])

      // console.log(this.list[0].shop_info.tpl_content.base.images.ali_mobile.url[0])
      this.hasData=true
    },
    mounted() {
      window.addEventListener('scroll',this.handelScroll)
    },
    methods: {
      handelScroll(){
        let num=window.scrollY
        // console.log(num)
        if(num<400){
          this.addClass=1
        }
        if(num>400&&num<900){
          this.addClass=2
        }
        if(num>901&&num<3500){
          this.addClass=3
        }
        if(num>3501){
          this.addClass=4
        }
      },
      handel11(){
        this.addClass=1
         this.$refs.main.style.transform='translateY(0px)'
      },
       handel22(){
         this.addClass=2
        //  console.log(this.$refs.main)
        this.$refs.main.style.transform='translateY(-400px)'
      },
       handel33(){
         this.addClass=3
          this.$refs.main.style.transform='translateY(-900px)'
      },
       handel44(){
         this.addClass=4
          this.$refs.main.style.transform='translateY(-3500px)'
      },
    }
  }
</script>
