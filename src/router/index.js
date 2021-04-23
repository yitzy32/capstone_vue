import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersSignup from '../views/UsersSignup.vue'
import UsersSignIn from '../views/UsersSignIn.vue'
import PantryItemNew from '../views/PantryItemNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'UsersSignup',
    component: UsersSignup
  },
  {
    path: '/sessions',
    name: 'UsersSignIn',
    component: UsersSignIn
  },
  {
    path: '/pantry_items/new',
    name: 'PantryItemNew',
    component: PantryItemNew
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
