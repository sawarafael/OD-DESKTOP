
const routes = [
  {
    path: '/Main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main.vue') }
    ]
  },

  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout'),
    children: [
      { path: '', component: () => import('pages/Profile.vue') }
    ]
  },

  {
    path: '/library',
    component: () => import('layouts/LibraryLayout'),
    children: [
      { path: '', component: () => import('pages/Library') }
    ]
  },

  {
    path: '/market',
    component: () => import('layouts/MarketLayout'),
    children: [
      { path: '', component: () => import('pages/Market') }
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
