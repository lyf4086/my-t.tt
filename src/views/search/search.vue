<template>
  <div>
    <div class="searchwrap">
      <input type="" placeholder="请输入搜索内容"
          class="put" v-model="val" @keyup="up"
          ref="put"
      >
      <input class="btn" type="submit" value="返回" @click="back"/>
    </div>
    <ul class="putlist"  v-if="!objData">
      <li v-for="item,index in list" @click="liClick(item)">
        {{item}}
      </li>
    </ul>
    <ul class="objlist"   v-if="objData">
      <router-link class="list-item" :to="'/item/'+item.name+'/'+item.id+'01'"
        :name="item.price" v-for="item,index in objlist" :key="index" tag="li"
      >

          <div class="img-wrap">
            <img v-lazy="item.sku_info[0].ali_image" />
          </div>
          <div class="text">
            <h3>{{item.name}}</h3>
            <p>{{item.shop_info.highlights}}</p>
            <h4>{{item.price}}</h4>
          </div>

      </router-link>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        val:'',
        list:[],
        objlist:[],
        objData:false
      }
    },
    mounted() {
      this.$refs.put.focus()
    },
    methods: {

      async up(){
        this.objData=false
        let {data}=await axios(`/search/v1/search/suggest?keyword=${this.val}`)
        // console.log(data.data)

        this.list=data.data
      },
      back(){
        this.$router.go(-1)
      },
      async liClick(item){
        let {data}=await axios(`search/v1/search/result?keyword=${item}&page=1&size=20&sort=0`)
        // console.log(data.data.spu)
        let list=await axios(`/proxy/product/spus?ids=${data.data.spu.join()}`)

        this.objlist=list.data.data.list
         console.log(this.objlist)
         this.objData=true
      }
    }
  }
</script>
<style scoped>
  @import  url(./search.css);
</style>
