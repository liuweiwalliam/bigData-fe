import { createRouter, createWebHistory } from 'vue-router'
import Check from '@/views/check.vue'
import Monitor from '@/views/monitor.vue'
import Source from '@/views/source/source.vue'
import Task from '@/views/task.vue'

const routes = [
  {
    path: '/',
    name: 'Source',
    component: Source
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: Monitor
  },
  {
    path: '/source',
    name: 'Source',
    component: Source
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
