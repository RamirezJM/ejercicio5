import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    alias: '/acerca'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router