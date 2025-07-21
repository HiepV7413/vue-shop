/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

// Navigation Guard: Bảo vệ trang chủ
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  // Nếu chưa đăng nhập và không phải trang Login thì chuyển về Login
  if (!isAuthenticated && to.path !== '/Login/Login') {
    next('/Login/Login');
  } else if (isAuthenticated && to.path === '/Login/Login') {
    // Nếu đã đăng nhập mà vào trang Login thì chuyển về /
    next('/');
  } else {
    next();
  }
});

export default router
