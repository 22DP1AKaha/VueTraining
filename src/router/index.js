import { createRouter, createWebHistory } from 'vue-router';
import AIreceptes from '../pages/aireceptes.vue';
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
  },

  {
    path: '/aireceptes',
    name: 'Aireceptes',
    component: AIreceptes
  },

  {
    path: '/ienakt',
    name: 'Ienakt',
    component: Ienakt
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
