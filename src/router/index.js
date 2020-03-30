import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path: '/mesero',
   name: 'Mesero',
   component: () => import('../views/Mesero.vue') 
  },
  {
    path: '/cocina',
    name: 'Cocina',
    component: () => import('../views/Cocinero.vue') 
  }
];

const router = new VueRouter({
  routes
});

export default router
