import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Index from './views/index.vue'

import store from './store.js'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      children:[    //子路由数组
       
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
const publicPaths=["/"]; //白名单

router.beforeEach((to,from,next)=>{
  if(publicPaths.indexOf(to.fullPath)!=-1){
    next();
    return;
   }
   
  if(store.getters.getToken==""){
    alert("请登录");
    next("/");
  }else{
    next();
  }
})
export default router;
