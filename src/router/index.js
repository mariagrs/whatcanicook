import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/RecipeInstruction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RecipeInstruction',
    name: 'Recipe',
    component: Recipe
  }
]

const router = new VueRouter({
  routes
})

export default router
