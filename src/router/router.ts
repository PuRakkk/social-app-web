import { createRouter, createWebHistory } from 'vue-router'
import signin from '@/views/signin.vue';
import Login from '@/views/login.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'sigin',
      component: signin,
      meta: { title: "Signin" },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: "Login" },
    },
  ], 
});

// Global Navigation Guard
router.beforeEach((to, _from, next) => {
  document.title = `social-app ${to.meta.title || ''}`;
  next();
});

export default router;
