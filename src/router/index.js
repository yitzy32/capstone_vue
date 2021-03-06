import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PantryItemNew from '../views/PantryItemNew.vue'
import PantryItemsIndex from '../views/PantryItemsIndex.vue'
import RecipeCreate from '../views/RecipeCreate.vue'
import RecipesIndex from '../views/RecipesIndex.vue'
import RecipeShow from '../views/RecipeShow.vue'
import RecipesSearch from '../views/RecipesSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: '/pantry_items',
    name: 'PantryItemsIndex',
    component: PantryItemsIndex
  },
  {
    path: '/pantry_items/new',
    name: 'PantryItemNew',
    component: PantryItemNew
  },
  {
    path: '/recipes',
    name: 'RecipesIndex',
    component: RecipesIndex
  },
  {
    path: '/recipes/search',
    name: 'RecipesSearch',
    component: RecipesSearch
  },
  {
    path: '/recipes/new',
    name: 'RecipeCreate',
    component: RecipeCreate
  },
  {
    path: '/recipes/:id',
    name: 'RecipeShow',
    component: RecipeShow
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
