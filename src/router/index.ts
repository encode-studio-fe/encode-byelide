import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('../views/DataSourceView.vue')
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('../views/PageLayoutView.vue')
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => import('../views/ActionsView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// export const innerRouter = createRouter({
//   history: createMemoryHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     }
//   ]
// })

export default router
