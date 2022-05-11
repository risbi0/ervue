import { createWebHistory, createRouter } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router