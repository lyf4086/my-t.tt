<template>
  <div >
    <img src="@/assets/img/zhuan.gif" width="100%"  v-if="!onoff"/>
    <div v-if="onoff" class="cart">
      <div class="kong" v-if="!dataList.length">
        <img src="../../assets/img/kong.png" />
        <p>您的购物车是空的，快去选购吧</p>
      </div>
      <div class="car_main">
        <div class="item" v-for="item,index in dataList" :key="item.id">
          <span :class="{'selected':item.checked}" @click="changeChecked(item)"></span>
          <img v-lazy="item.shop_info.ali_image" />
          <div class="detail">
            <i>限时优惠</i>
            <button @click="del(item)">删除</button>
            <h3>{{item.spu.name}}</h3>
           <!-- <p>{{item.attr_info[1].value}}</p>-->
            <strong class="strong"><a>￥{{item.spu.price}}</a> × {{item.checkNumber}} </strong>
            <span class="btnwrap">
              <button @click="add(item)">+</button>
              <p>{{item.checkNumber}}</p>
              <button @click="cut(item)">-</button>
            </span>
          </div>
        </div>
      </div>
      <div class="fenjie"></div>
      <div class="related">
        <h2>相关推荐</h2>
        <router-link :to="'/item/'+item.shop_info.title+'/'+item.id"  v-for="item,index in tuijian" :key="index" tag="div">
          <div class="related_item" :key="item.id">
            <div class="img_wrap">
              <img v-lazy="item.shop_info.ali_image" />
            </div>
            <h3>{{item.shop_info.sku_mobile_title}}</h3>
            <p>{{item.shop_info.sku_mobile_sub__title}}</p>
            <strong>&nbsp;￥{{item.price}}</strong>
          </div>
        </router-link>
      </div>

      <div class="car_bottom">
        <div class="select_num">
          <span :class="{'selected':allBtnChecked}" @click="checkAll"></span>
          <i>已选择{{checkedNum}}件</i>
        </div>
        <div class="select_heji">
          <h3>合计：<i>￥{{heji}}</i></h3>
          <p>已享免邮费</p>
        </div>
        <div class="select_btn">
          <button>现在结算</button>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
@import url('./car.css');
</style>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        onoff:false,
        dataList:[],
        tuijian:[]
      }
    },
    computed:{
      heji(){
        let num=0
        this.dataList.forEach(e=>{
          num+=e.price*e.checkNumber
        })
        return num
      },
      checkedNum(){
        return this.dataList.filter(e=>e.checked).length
      },
      allBtnChecked(){
        return this.$store.state.ids.every(item=>item.checked)
      }
    },
    methods:{
      changeChecked(item){
          console.log(item.id)
          this.$store.commit('changeOne',{
            obj:item
          })
      },
      add(item){

        // this.dataList.forEach(e=>{
        //   if(e.id==item.id){
        //     e.checkNumber++
        //   }
        // })
        this.$store.commit('addNum',{
          obj:item
        })
      },
      cut(item){
        // this.dataList.find(e=>{
        //   if(e==item){
        //     e.checkNumber==1?1:e.checkNumber-=1
        //   }
        // })
        this.$store.commit('cutNum',{
          obj:item
        })
      },
      del(item){
        let index=this.dataList.findIndex(e=>e==item)
        console.log(index)
        this.dataList.splice(index,1)
        this.$store.dispatch('shanchu',{
          obj:item
        })
      },
      checkAll(ev){
        let bl=ev.target.classList.toggle('selected')
        // console.log(bl)
        this.$store.commit('changeAll',{
          bl:bl
        })
      }
    },

    async created() {
      let ids=this.$store.state.ids
       console.log(ids)
      let idArr=[]
      if(!!ids){
         idArr=ids.map(e=>e.id)
      }

      let { data}=await axios(`/proxy/product/skus?ids=${idArr.join()}&with_stock=true&with_spu=true`)
      let tuijian=await axios(`/proxy/product/skus?ids=100051704,100046406,100040601,100035101,100047701,100037801,100053001,100042205,100033802,100051702,100046401,100040601,100040604,100035113,100047901,100047401,100040501,100033802,100041701,100045101,100026601,100026701,100027004,100035104,100035111,100035202,100035703,100039702,100040910&with_stock=true&with_spu=true`)


      let newObjArr=ids.map(item=>{
        let obj=data.data.list.filter(e=>e.id==item.id)[0]
        return Object.assign(item,obj)
      })



      // data.data.list.forEach(e=>{
      //   e.checked=true
      // })
      this.dataList=newObjArr
      // console.log(data)
      console.log(this.dataList)
      this.tuijian=tuijian.data.data.list
      this.onoff=true
    }







  }
</script>
