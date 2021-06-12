
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: 'overview', name: "overview", component: () => import('pages/overviewStandard.vue') },
      { path: '/overviewInCondo', name: "overviewInCondo", component: () => import('pages/overviewCondo.vue') },
      { path: '/overviewCondo', name: "overviewCondo", component: () => import('pages/overviewforeCondo.vue') },
      { path: '/map', name: "map", component: () => import('pages/map.vue') },
      { path: '/', name: "login", component: () => import('pages/login.vue') },
      { path: '/editform', name: "editform", component: () => import('pages/editForm.vue') },
      { path: '/form', name: "form", component: () => import('pages/form.vue') },
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
