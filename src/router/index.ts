import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/video/:id', component: () => import('@/views/video/IndexInfo.vue') }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
