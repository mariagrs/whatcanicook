import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/category/:type/:name',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }

]

const router = new VueRouter({
  routes
})

export default router
