import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/home.vue'),
  },
];

var router = createRouter({
  history: createWebHistory(),
  // history: process.env.NODE_ENV === 'production' ? createWebHistory() : createWebHashHistory(),
  routes: routes,
  /*scrollBehavior(to, from, savedPosition) {
		return { top: 50, behavior: 'smooth' }
	},*/
});

export default router;
