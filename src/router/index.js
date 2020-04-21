import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Category from '../views/Category.vue'
import Cocktail from '../views/Cocktail.vue'
import CocktailCategory from '../views/CocktailCategory.vue'
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
    path: '/cocktail/:id',
    name: 'Cocktail',
    component: Cocktail
  },
  {
    path: '/recipes/category/:type/:name',
    name: 'Category',
    component: Category
  },
  {
    path: '/cocktails/category/:name',
    name: 'CocktailCategory',
    component: CocktailCategory
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
