import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // ✅ Import the main App.vue
import AIreceptes from './pages/aireceptes.vue';
import Home from './pages/Home.vue';
import Receptes from './pages/receptes.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/receptes', name: 'Receptes', component: Receptes },
  { path: '/aireceptes', name: 'AIreceptes', component: AIreceptes }
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
