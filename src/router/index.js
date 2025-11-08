import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import PdfContractView from '../views/PdfContractView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
    {
      path: '/contract/:id',
      name: 'PdfContract',
      component: PdfContractView,
      props: true,
    },
  ],
})

export default router
