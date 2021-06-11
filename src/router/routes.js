
const routes = [
  {
    path: '/',
<<<<<<< HEAD
    component: () => import('src/pages/map.vue'),
=======
    component: () => import('src/pages/editForm.vue'),
>>>>>>> edit_form_page
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
