<template>
<div class="main">
  <img src="@/assets/img/zhuan.gif" width="100%" v-if="!hasData"/>
  <div v-if="hasData" >
    <div class="banner">
      <div class="banner_pic">
         <van-swipe :autoplay="3000">
          <van-swipe-item  v-for="item,index in banner" :key="index">
            <img v-lazy="item.src" width="370"/>
          </van-swipe-item>

        </van-swipe>
      </div>

      <div class="icon_link">
        <router-link to="/plist/64" tag="div">
          <div>
            <img src="@/assets/img/icon1.png" width="25">
            <p>手机</p>
          </div>
        </router-link>
        <router-link to="/plist/77" tag="div">
          <div>
            <img src="@/assets/img/icon2.png" width="25">
            <p>空气净化</p>
          </div>
        </router-link>
        <router-link to="/plist/60" tag="div">
          <div>
            <img src="@/assets/img/icon3.png" width="25">
            <p>官方配件</p>
          </div>
        </router-link>
        <router-link to="/plist/69" tag="div">
          <div>
            <img src="@/assets/img/icon4.png" width="25">
            <p>品牌周边</p>
          </div>
        </router-link>
       <router-link to="/plist/61" tag="div">
          <div>
            <img src="@/assets/img/icon5.png" width="25">
            <p>好物优选</p>
          </div>
       </router-link>

      </div>
    </div>

    <div class="fenjie"></div>
    <div class="hotsell">
      <h2 class="title-text">
        <span>热销商品</span>
        <span>></span>
      </h2>
      <div class="itemwrap">
        <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item style="display:flex">
            <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" :name="item.price" v-for="item,index in rexiao " :key="index" tag="div">
              <div class="item"  >
                  <div class="imgwrap">
                    <img v-lazy="item.shop_info.ali_image" />
                  </div>
                  <h3>{{item.shop_info.sku_mobile_title}}</h3>
                  <p>{{item.shop_info.sku_mobile_sub_title}}</p>
                  <h4>￥{{item.price}}</h4>
                </div>
            </router-link>


          </mt-swipe-item>

        </mt-swipe>
      </div>
    </div>
    <div class="fenjie"></div>
    <div class="bigpic">
      <div class="left_wrap">
        <p>
          <router-link :to="'/item/'+999+'/'+bigpic[0].linkUrl.replace(/[^0-9]/ig,'')" >
            <img v-lazy="bigpic[0].src" />
          </router-link>
        </p>
        <p>
          <router-link :to="'/item/'+999+'/'+bigpic[1].linkUrl.replace(/[^0-9]/ig,'')" >
            <img v-lazy="bigpic[1].src" />
          </router-link>
        </p>
        <p>

            <img v-lazy="bigpic[2].src" />

        </p>

      </div>
      <div class="right_wrap">

          <img v-lazy="bigpic[3].src" />

      </div>
    </div>
    <div class="fenjie"></div>
    <div class="newlaunch">
      <h2 class="title-text ">
        <span>新品首发</span>
        <span>></span>
      </h2>
      <router-link :to="'/item/'+item.shop_info.title+'/'+item.id"  v-for="item,index in shoufa" :key="index" tag="div" >
        <div class="item">
        <div class="imgwrap">
          <img v-lazy="item.shop_info.ali_image" width="168"/>
          </div>
          <h3>{{item.shop_info.sku_mobile_title}}</h3>
          <p>{{item.shop_info.sku_mobile_sub_title}}</p>
          <h4>￥{{item.price}}</h4>
      </div>

      </router-link>

    </div>
    <div class="fenjie"></div>
    <div class="shoujike margin-b">
      <h2 class="title-text">
        <span>坚果Pro 2S "足迹"系列保护套</span>
        <span>></span>
      </h2>
      <div class="itemwrap">
        <mt-swipe :auto="0" :show-indicators="false">
          <mt-swipe-item style="display:flex">
          <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in shoujike " :key="index" tag="div">
              <div class="item" >
              <div class="imgwrap">
                <img v-lazy="item.shop_info.ali_image" width="126"/>
              </div>
              <h3>{{item.shop_info.sku_mobile_title}}</h3>
              <p>{{item.shop_info.sku_mobile_sub_title}}</p>
              <h4>￥{{item.price}}</h4>
            </div>
          </router-link>


          </mt-swipe-item>

        </mt-swipe>
      </div>
    </div>
    <div class="fenjie"></div>
    <div class="partslist margin-b">
      <h2 class="title-text">
        <span>坚果系列手机及配件</span>
        <span>></span>
      </h2>
      <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in sjpeijian" :key="index" tag="div">
        <div id="item" >
            <div class="imgwrap">
              <img v-lazy="item.shop_info.ali_image" width="168"/>
            </div>
            <h3>{{item.shop_info.sku_mobile_title}}</h3>
            <p>{{item.shop_info.sku_mobile_sub_title}}</p>
            <h4>￥{{item.price}}</h4>
         </div>
      </router-link>
    </div>
    <div class="fenjie"></div>
    <div class="peijian margin-b">
      <h2 class="title-text">
        <span>官方配件</span>
        <span>></span>
      </h2>
      <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in gfpeijian" :key="index" tag="div">
          <div id="item">
            <div class="imgwrap">
              <img v-lazy="item.shop_info.ali_image" width="168"/>
            </div>
            <h3>{{item.shop_info.sku_mobile_title}}</h3>
            <p>{{item.shop_info.sku_mobile_sub_title}}</p>
            <h4>￥{{item.price}}</h4>
          </div>
      </router-link>

    </div>
    <div class="fenjie"></div>
    <div class="wuxian margin-b">
      <router-link :to="'/item/'+'优选'+'/'+item.linkUrl.replace(/[^0-9]/ig,'')" v-for="item,index in twopic" :key="index">
        <img  v-lazy="item.src" />
      </router-link>
    </div>
    <div class="fenjie"></div>
    <div class="airfilter margin-b" >
      <h2 class="title-text">
        <span>净化器及配件</span>
        <span>></span>
      </h2>
      净化器及配件

    </div>
    <div class="fenjie"></div>
    <div class="rounding margin-b">
      <h2 class="title-text">
        <span>品牌周边</span>
        <span>></span>
      </h2>
      品牌周边
    </div>
     <div class="fenjie"></div>
    <div class="fourpic margin-b">
      <div class="left">
        <router-link :to="'/item/'+888+'/'+fourpic[0].linkUrl.replace(/[^0-9]/ig,'')" tag="div">
          <img v-lazy="fourpic[0].src" />
        </router-link>
        <router-link :to="'/item/'+888+'/'+fourpic[1].linkUrl.replace(/[^0-9]/ig,'')" tag="div">
          <img v-lazy="fourpic[1].src" />
        </router-link>
        <router-link :to="'/item/'+888+'/'+fourpic[2].linkUrl.replace(/[^0-9]/ig,'')" tag="div">
          <img v-lazy="fourpic[2].src" />
        </router-link>
      </div>
      <div class="right">
        <router-link :to="{name:'Item',params:{title:888899,id:fourpic[3].linkUrl.replace(/[^0-9]/ig,'')} }" tag="div">
          <img v-lazy="fourpic[3].src" />
        </router-link>
      </div>
    </div>
    <div class="fenjie"></div>
    <div class="selected margin-b">
      <h2 class="title-text">
        <span>品牌精选</span>
        <span>></span>
      </h2>
      <router-link :to="'/item/'+item.shop_info.title+'/'+item.id" v-for="item,index in jingxuan" :key="index" tag="div">
          <div id="item" >
          <div class="imgwrap">
            <img v-lazy="item.shop_info.ali_image" width="168"/>
          </div>
          <h3>{{item.shop_info.sku_mobile_title}}</h3>
          <p>{{item.shop_info.sku_mobile_sub_title}}</p>
          <h4>￥{{item.price}}</h4>
         </div>
      </router-link>
    </div>
    <div class="fenjie"></div>
    <div class="footerpic margin-b">
        <router-link :to="
          item.linkUrl.replace(/[^0-9]/ig,'')==69?
          {name:'InfoList',params:{num:69}}:
          {name:'Item',params:{title:'呵呵哒',id:item.linkUrl.replace(/[^0-9]/ig,'')}
        }" tag="div" v-for="item,index in bottompic" :key="index">
        <!--<div v-for="item,index in bottompic" :key="index">
        :to="{name:'Item',params:{title:888899,id:fourpic[3].linkUrl.replace(/[^0-9]/ig,'')} }"
        "'/item/'+888+'/'+item.linkUrl.replace(/[^0-9]/ig,'')"
        -->
          <img v-lazy="item.src" />
        <!--</div>-->
        </router-link>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        hasData:false,
        banner:[],
        hotsell:[],
        bigpic:[],
        twopic:[],
        bottompic:[],
        fourpic:[],

        rexiao:[],
        shoufa:[],
        shoujike:[],
        sjpeijian:[],
        gfpeijian:[],
        zhoubian:[],
        jingxuan:[],
        jinghuaqi:[],
      }
    },
    async created () {
      let data=await axios(`https://resource.smartisan.com/marketing/mobile/index_0479cbf5245ba3505a3c58087fec8d61.json`)

      this.hasData=true
      this.banner=data.data.banner.dataList
      this.bigpic=data.data.floors[1].dataList
      this.twopic=data.data.floors[6].dataList
      this.bottompic=data.data.floors[11].dataList
      this.fourpic=data.data.floors[9].dataList
      // let num111=this.banner[0].linkUrl.replace( /[^0-9]/ig,'')


  //8,6,6,14,14,15,12
      let Ids=data.data.floors.filter(e=> {
        return +e.dataList[0]
      }).map(e=>e.dataList)
      // console.log(Ids)
      let arrId=[].concat(...Ids)
      // console.log(arrId.length)
      let {data:{data:{list}}}=await axios(`/proxy/product/skus?ids=${arrId}&with_stock=true&with_spu=true`)
        // console.log(list)
        let num=0
        this.rexiao=list.slice(num,num+=8)
        this.shoufa=list.slice(num,num+=6)
        this.shoujike=list.slice(num,num+=6)
        this.sjpeijian=list.slice(num,num+=14)
       this. gfpeijian=list.slice(num,num+=14)
        this.zhoubian=list.slice(num,num+=15)
        this.jingxuan=list.slice(num,num+=12)



    }

  }
</script>
<style >
@import url('./home.css');

</style>

