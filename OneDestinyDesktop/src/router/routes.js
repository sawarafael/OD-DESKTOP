
const routes = [

  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/Main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'main', component: () => import('pages/Main.vue') }
    ]
  },

  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout'),
    children: [
      { path: 'profile', component: () => import('pages/Profile.vue') }
    ]
  },

  {
    path: '/library',
    component: () => import('layouts/LibraryLayout'),
    children: [
      { path: 'library', component: () => import('pages/Library') }
    ]
  },

  {
    path: '/market',
    component: () => import('layouts/MarketLayout'),
    children: [
      { path: 'market', component: () => import('pages/Market') }
    ]
  },

  {
    path: '/groups',
    component: () => import('layouts/GroupsLayout'),
    children: [
      { path: 'groups', component: () => import('pages/Groups')}
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
