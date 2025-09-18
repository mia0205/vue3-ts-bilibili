import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/video', component: () => import('@/views/video/index.vue') }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
