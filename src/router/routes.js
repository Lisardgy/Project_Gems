
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/', name: "login", component: () => import('pages/login.vue') },
      { path: '/map', name: "map", component: () => import('pages/map.vue') },
      { path: '/markermap', name: "markermap", component: () => import('pages/marker_map.vue') },
      { path: '/overview', name: "overview", component: () => import('pages/overviewStandard.vue') },
      { path: '/overviewInCondo', name: "overviewInCondo", component: () => import('pages/overviewCondo.vue') },
      { path: '/overviewCondo', name: "overviewCondo", component: () => import('pages/overviewforeCondo.vue') },
      { path: '/form', name: "form", component: () => import('pages/form.vue') },
      { path: '/addroom', name: "addcondo", component: () => import('pages/addroomcondo.vue') },
      { path: '/editform', name: "editform", component: () => import('pages/editForm.vue') },
      { path: '/editcondo', name: "editcondo", component: () => import('pages/editcondo.vue') },
      { path: '/editroom', name: "editroom", component: () => import('pages/editroomcondo.vue') },
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
