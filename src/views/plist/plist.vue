<template>
  <div id="plist" >
    <img src="@/assets/img/zhuan.gif" width="100%" v-if="!hasData"/>
    <div v-if="onoff">

        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[0].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[0].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj1" :key="index" tag="div">
              <div class="list_item">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>></strong>
              </div>
            </router-link>

          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[1].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[1].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj2" :key="index" tag="div">
              <div class="list_item_ban">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>> &nbsp;</strong>
              </div>
            </router-link>


          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[2].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[2].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj3" :key="index">
                <div class="list_item_kuai">
                  <img v-lazy="item.shop_info.ali_image"/>
                  <h3>{{item.shop_info.title}}</h3>
                  <strong></strong>
                </div>

            </router-link>

          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[3].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[3].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj4" :key="index">
              <div class="list_item_kuai">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong></strong>
              </div>
            </router-link>


          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[4].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[4].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj5" :key="index">
              <div class="list_item_ban">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>></strong>
              </div>
            </router-link>


          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[5].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[5].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj6" :key="index">
              <div class="list_item_kuai">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong></strong>
              </div>
            </router-link>

          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[6].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[6].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj7" :key="index">
              <div class="list_item_ban">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>></strong>
              </div>
            </router-link>

          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[7].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[7].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj8" :key="index">
              <div class="list_item_ban">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>></strong>
              </div>
            </router-link>

          </div>
        </div>
        <div class="fenjie"></div>
        <div class="item" >
          <div class="title_wrap">
            <h2>{{data[8].name}}</h2>
          </div>
          <div class="img_wrap">
            <img v-lazy="data[8].image.src" />
          </div>
          <div class="content">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in obj9" :key="index">
              <div class="list_item_ban">
                <img v-lazy="item.shop_info.ali_image"/>
                <h3>{{item.shop_info.title}}</h3>
                <strong>></strong>
              </div>
            </router-link>

          </div>
        </div>

    </div>
  </div>
</template>
<style>
@import url('./plist.css');
</style>
<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        hasData:false,
        onoff:false,
        data:[],
        obj1:[],
        obj2:[],
        obj3:[],
        obj4:[],
        obj5:[],
        obj6:[],
        obj7:[],
        obj8:[],
        obj9:[],

      }
    },
    async created() {

      let {data}=await axios(`/fenlei/marketing/mobile/category_36922745762882f3ae51bdc99ad1bbf2.json`)
      let dataTotal=data
     data= data.map(e=>{
        return e.layout.dataList
      })
      data=data.map(e=>{
        return e.map(a=>a.sku)
      })
      let arr=[]
      data.forEach(e=>{
        arr.push(...e)
      })
      let list=await axios(`proxy/product/skus?ids=${arr.join()}&with_stock=true&with_spu=true`)
      // console.log(dataTotal)
      this.data=dataTotal
      list=list.data.data.list
      // console.log(list)
      let num=0
      this.obj1=list.slice(num,num+=5)
      this.obj2=list.slice(num,num+=6)
      this.obj3=list.slice(num,num+=9)
      this.obj4=list.slice(num,num+=6)
      this.obj5=list.slice(num,num+=4)
      this.obj6=list.slice(num,num+=6)
      this.obj7=list.slice(num,num+=2)
      this.obj8=list.slice(num,num+=4)
      this.obj9=list.slice(num,num+=2)

      // console.log(this.data[0].name)
      this.onoff=true
      this.hasData=true
    },
  }
</script>
