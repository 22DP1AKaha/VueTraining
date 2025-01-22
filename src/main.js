import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'; // Import your Home component

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

// Set up the router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the app instance, use the router, and mount it
createApp(Home)  // You can directly mount the Home component here
  .use(router)
  .mount('#app');
