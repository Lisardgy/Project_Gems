
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'ovs', name: "overviewStd", component: () => import('pages/overviewStandard.vue') },
      { path: '/', name: "overviewCnd", component: () => import('pages/overviewCondo.vue') },
      { path: '/ov4c', name: "overview4Cnd", component: () => import('pages/overviewforeCondo.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
