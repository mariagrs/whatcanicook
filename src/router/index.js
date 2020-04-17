import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Category from '../views/Category.vue'
import Cocktail from '../views/Cocktail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Recipe/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/Cocktail/:id',
    name: 'Cocktail',
    component: Cocktail
  },
  {
    path: '/Category/:type/:name',
    name: 'Category',
    component: Category
  }

]

const router = new VueRouter({
  routes
})

export default router
