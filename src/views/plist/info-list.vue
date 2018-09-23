<template>
  <div v-if="hasData" id="info-list">
    <router-link :to="'/item/'+item.name+'/'+item.id" v-for="(item,index) in list" :key="index">
      <div class="item">
        <div class="imgwrap">
          <img v-lazy="item.spic" />
        </div>
        <div class="text">
          <h3>{{item.name}}</h3>
          <p>{{item.sub_title}}</p>
          <strong>￥{{item.price}}</strong>
        </div>
      </div>
    </router-link>




  </div>
</template>
<script>
///product/skus?ids=100051701,100047901,100046401,100040601,100035101,100027306&with_stock=true&with_spu=true
 import axios from 'axios'
  export default {
    data(){
      return{
        hasData:false,
        list:[]
      }
    },
    async created() {
      let id=this.$route.params.num
      // console.log(+id)


      let {data}=await axios(`/proxy/product/spus?category_id=${+id}&page=1&page_size=20&sort=sort`)

      data=data.data.list.filter(e=>e.sku_info!=undefined)
      console.log(data)
      let newData=data.map(item=>{
        return{
          id:item.id+'01',
          name:item.name,
          price:item.price,
          sub_title:item.shop_info.spu_mobile_sub_title,
          spic:item.sku_info[0].ali_image,
          url:item.shop_info.tpl_content.base.images.ali_mobile.url[0]
        }
      })

      // this.list=data.data.list
      console.log(newData)
      this.list=newData
      this.hasData=true


    },
  }
</script>
<style scoped>

@import url(./info-list.css);

</style>
