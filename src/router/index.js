import { createRouter, createWebHistory } from 'vue-router';
import AIreceptes from '../pages/aireceptes.vue';
import Home from '../pages/Home.vue';
import Ienakt from '../pages/ienakt.vue';
import Receptes from '../pages/receptes.vue';
import Registreties from '../pages/registreties.vue';
import receptesInstrukcijas from '../pages/receptesinstrukcijas.vue';


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
  },

  {
    path: '/registreties',
    name: 'Registreties',
    component: Registreties
  },
  { path: '/recepte/:id', 
    name: 'ReceptesInstrukcijas', 
    component: receptesInstrukcijas, 
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
