import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import guard from './guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth', }
    }
  },
})

router.beforeEach(guard.beforeEach)

export default router