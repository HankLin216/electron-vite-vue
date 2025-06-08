import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/ExplorerView.vue') },
  { path: '/search', component: () => import('../views/SearchView.vue') },
  { path: '/source-control', component: () => import('../views/SourceControlView.vue') },
  { path: '/debug', component: () => import('../views/DebugView.vue') },
  { path: '/extensions', component: () => import('../views/ExtensionsView.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router