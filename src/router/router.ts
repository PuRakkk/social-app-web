import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    // {
    //   path: '/helloworld',
    //   name: 'helloworld',
    //   component: helloworld,
    //   meta: { title: "Hello World" },
    // },
  ], 
});

// Global Navigation Guard
router.beforeEach((to, _from, next) => {
  document.title = `Social App ${to.meta.title || ''}`;
  next();
});

export default router;
