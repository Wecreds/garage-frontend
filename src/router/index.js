import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fullLayout',
      component: () => import('@/layouts/FullLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/accessories',
          name: 'accessory',
          component: () => import('@/views/AccessoryView.vue'),
        },
        {
          path: '/categories',
          name: 'category',
          component: () => import('@/views/CategoryView.vue'),
        },
        {
          path: '/colors',
          name: 'color',
          component: () => import('@/views/ColorView.vue'),
        },
        {
          path: '/brands',
          name: 'brand',
          component: () => import('@/views/BrandView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'blankLayout',
      component: () => import('@/layouts/BlankLayout.vue'),
      children: [
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
      ],
    },
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
