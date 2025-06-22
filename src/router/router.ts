import { createRouter, createWebHistory } from 'vue-router'
import helloworld from '@/views/helloworld.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/helloworld',
      name: 'helloworld',
      component: helloworld,
      meta: { title: "Hello World" },
    },
  ], 
});

// Global Navigation Guard
router.beforeEach((to, _from, next) => {
  document.title = `social-app ${to.meta.title || ''}`;
  next();
});

export default router;
