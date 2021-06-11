
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: 'ovs', name: "overviewStd", component: () => import('pages/overviewStandard.vue') },
      { path: '/ff', name: "overviewCnd", component: () => import('pages/overviewCondo.vue') },
      { path: '/ov4c', name: "overview4Cnd", component: () => import('pages/overviewforeCondo.vue') },
      { path: '/map', name: "map", component: () => import('pages/overviewforeCondo.vue') },
      { path: '/', name: "login", component: () => import('pages/login.vue') },
      { path: '/editform', name: "editform", component: () => import('pages/overviewforeCondo.vue') },
      { path: '/form', name: "form", component: () => import('pages/overviewforeCondo.vue') },
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
