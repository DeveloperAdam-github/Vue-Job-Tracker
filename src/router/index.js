import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import AddJob from '../views/AddJob.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/addJob',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
