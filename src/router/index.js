import { createRouter, createWebHistory } from 'vue-router';
import badRequest from './badRequest';
import product from './product';
import home from './home';

const routes = [
  ...badRequest,
  ...home,
  ...product,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;