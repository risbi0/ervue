import { createWebHistory, createRouter } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/ervue/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/ervue/about',
    name: 'About',
    component: About,
  },
  {
    path: '/ervue/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router