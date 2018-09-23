import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let  shopList=JSON.parse(localStorage.getItem('t.tt-car'))||[]
let shopArr=[]
// console.log(shopList)
for(let attr in shopList){
  shopArr.push(shopList[attr])
}
// console.log(shopArr)
let store=new Vuex.Store({
  state:{
    ids:shopArr,
    checkout:''
    // [{id:100051701,checkNumber:1,checked:true}]
  },
  mutations:{
    async addCar(state,payload){
      let hasThisData=state.ids.find(e=>e.id==payload.id)
      if(hasThisData){
        let index=state.ids.findIndex(e=>e.id==payload.id)
        // console.log(index)
        state.ids[index].checkNumber+=1
      }else{
         state.ids.push({
            id:payload.id,
            checkNumber:1,
            checked:true
          })
      }

    },
    changeAll(state,payload){
        state.ids.forEach(e=>e.checked=payload.bl)
    },
    changeOne(state,payload){
      console.log(payload.obj)
      state.ids.forEach(e=>{
        if(e.id==payload.obj.id){
          console.log('就是他')
          e.checked=!e.checked
        }else{
          console.log('找不到')
        }
      })

    },
    addNum(state,payload){
      let id=payload.obj.id
      if(id){
        let index=state.ids.findIndex(e=>e.id==id)
        // console.log(state.ids[index],123,state.ids[index].checkNumber+=1)
        state.ids[index].checkNumber++
        // state.ids.forEach(e=>{
        //   if(e.id==id){
        //     e.checkNumber+=1
        //   }
        // })
      }
    },
    cutNum(state,payload){
      let id=payload.obj.id
      if(id){
        // let index=state.ids.findIndex(e=>e.id==id)
        // // console.log(999,index)
        // if(state.ids[index].checkNum>1){
        //   state.ids[index].checkNumber-=1

        // }else{
        //   state.ids[index].checkNumber=1
        // }
        state.ids.find(e=>{
          if(e.id==id){
            e.checkNumber>1?--e.checkNumber:1
          }
        })
      }
    },
    deletOne(state,payload){
      // console.log('我是deleteOne',payload.id)
      let index=state.ids.findIndex(e=>e.id==payload.id)
      // console.log(index)
      state.ids.splice(index,1)
    },
    addCheckOut(state,payload){

        state.checkout=payload.id

      console.log(state.checkout)
    }
  },
  actions: {
      shanchu(context,obj){
        // console.log('我是action',context,obj.obj)
        context.commit('deletOne',{
          id:obj.obj.id
        })
      }
  }

})

store.watch((state) => {

  return {...state.ids}

},(newValue)=> {
  // console.log('localstorage')
  localStorage.setItem('t.tt-car',JSON.stringify(newValue))

},{
  deep:true
})





export default store
