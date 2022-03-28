import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path:'/3203:id',
    name:'heping',
    component:()=> import('../views/qiangzhan/HePing')
  },
  {
    path:'/3204:id',
    name:'chuanyue',
    component:()=> import('../views/qiangzhan/ChuanYue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
