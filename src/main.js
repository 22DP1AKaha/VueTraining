import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // ✅ Import the main App.vue
import AIreceptes from './pages/aireceptes.vue';
import Home from './pages/Home.vue';
import Ienakt from './pages/ienakt.vue';
import Receptes from './pages/receptes.vue';
import Registreties from './pages/registreties.vue';
import ReceptesInstrukcijas from './pages/receptesinstrukcijas.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/receptes', name: 'Receptes', component: Receptes },
  { path: '/aireceptes', name: 'AIreceptes', component: AIreceptes },
  { path: '/ienakt', name: 'Ienakt', component: Ienakt },
  { path: '/registreties', name: 'Registreties', component: Registreties },
  { path: '/recipe/:id', name: 'ReceptesInstrukcijas', component: ReceptesInstrukcijas, props: true }

];

// Set up the router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// ✅ Mount App.vue, NOT Home.vue
createApp(App)
  .use(router)
  .mount('#app');
