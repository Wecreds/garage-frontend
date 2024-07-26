import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/accessories',
      name: 'accessory',
      component: () => import('@/views/AccessoryView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/categories',
      name: 'category',
      component: () => import('@/views/CategoryView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/colors',
      name: 'color',
      component: () => import('@/views/ColorView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/brands',
      name: 'brand',
      component: () => import('@/views/BrandView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/views/LogoutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore() 
  if (to.meta.requiresAuth && !authStore.loggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
});

export default router
