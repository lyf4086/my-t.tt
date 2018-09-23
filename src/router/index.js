import Vue from 'vue'
import Router from 'vue-router'

let Home=()=>import('../views/home/home.vue')
let TopBar=()=>import('@/components/topbar')
let NavBar =()=>import('@/components/bottombar')
let Plist=()=>import ('@/views/plist/plist.vue')
let Car=()=>import ('@/views/car/car.vue')
let Mine=()=>import('@/views/mine/mine.vue')

let itemTop=()=>import('@/views/home/item/item-top')
let itemMain=()=>import('@/views/home/item/item-main')
let itemBottom=()=>import('@/views/home/item/item-bottom')
let InfoList =()=>import('@/views/plist/info-list')
let SearchPut=()=>import('../views/search/search.vue')

let Login=()=>import('@/views/login/login.vue')
let CheckOut=()=>import ('@/views/checkout/checkout.vue')

Vue.use(Router)

let router= new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      components:{
        top:TopBar,
        nav:NavBar,
        default:Home
      },
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/plist',
      name:'Plist',
      components:{
        top:TopBar,
        nav:NavBar,
        default:Plist
      },
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/plist/:num',
      name:'InfoList',
      components:{
        top:itemTop,
        nav:NavBar,
        default:InfoList
      }
    },
    {
      path:'/car',
      name:'Car',
      components:{
        top:TopBar,
        nav:NavBar,
        default:Car
      }
    },
    {
      path:'/mine',
      name:'Mine',
      components:{
        top:TopBar,
        nav:NavBar,
        default:Mine
      }
    },
    {
      path:'/item/:title/:id',
      name:'Item',
      components:{
        top:itemTop,
        nav:itemBottom,
        default:itemMain
      }
    },
    {
      path:'/sear',
      name:'SearchPut',
      component:SearchPut
    },
    {
      path:'/login',
      name:'Login',
      components:{
        top:TopBar,
        default:Login
      }
    },
    {
      path:'/checkout',
      name:'CheckOut',
      component:CheckOut
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'*',
      redirect:'/home'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})





export default router
