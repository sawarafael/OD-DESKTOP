import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Market from '../views/Market.vue'
import Profile from '../views/Profile.vue'
import Groups from '../views/Groups.vue'
import Library from '../views/Library.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },{
    path: '/Main',
    name: 'Main',
    component: Main
  }, {
    path: '/Market',
    name: 'Market',
    component: Market
  }, {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: 'Library',
    name: '/Library',
    component: Library
  }
]
 
   

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
