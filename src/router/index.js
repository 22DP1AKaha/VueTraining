import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Receptes from '../pages/receptes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/receptes',
    name: 'Receptes',
    component: Receptes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
