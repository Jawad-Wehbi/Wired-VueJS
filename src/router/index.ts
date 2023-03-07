import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import LoginView from '../views/LoginView/LoginView.vue';
import VerifyLogin from '../views/VerifyLogin/VerifyLogin.vue';
import DashboardView from '../views/DashboardView/DashboardView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/verify-login',
    name: 'verify-login',
    component: VerifyLogin,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
