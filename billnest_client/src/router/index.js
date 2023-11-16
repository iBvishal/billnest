import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage';

const routes = [
  {
      path: '/',
      component: Homepage,
      name: 'home'
  },
  {
      path: '/about',
      component: Homepage,
      name: 'about'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
