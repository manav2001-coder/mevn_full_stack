
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'Home', component: () => import('pages/IndexPage.vue') },
      
    ]
  },
  {
    path:"/login",
    component: () =>import('pages/Login.vue')
  },
  {path:'/privacy-policy',component: () => import('pages/PrivatePolicy.vue')},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
