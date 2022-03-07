import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Center from '../views/Center.vue'
import Sinema from '../views/Sinema.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'
import Crud from '../views/CRUD.vue'
import Commingsoon from '../views/Film/Commingsoon'
import Nowplaying from '../views/Film/Nowplaying'
import Detail from '../views/Detail.vue'
import auth from '../auth/auth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    //  次級路由
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'commingsoon',
        component: Commingsoon
      },
      //  若路徑為/Film，自動將路徑導到 Nowplaying
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/center',
    component: Center,
    //  路由獨享守衛
    beforeEnter: (to, from, next) => {
      if (!auth()) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/sinema',
    component: Sinema
  },
  {
    path: '/detail/:myid',
    name: 'johnnydetail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/CRUD',
    component: Crud
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//  全局守衛
// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   if (to.path === '/center') {
//     if (!auth()) {
//       next('/login')
//     }
//     next()
//   } else {
//     next()
//   }
// })

export default router
