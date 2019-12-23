import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path:'/home',
    name:'home',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'apple',
        component:() => import('../views/Child.vue'),
      }
    ]
  },
  {
    path:'/layout',
    component:()=>import('../components/layout/layout.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
