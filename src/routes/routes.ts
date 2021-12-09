interface Route {
  path: `/${string}`,
}

export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/home', component: '@/pages/home' },
      { path: '/login', component: '@/pages/login' },
    ],
  },
  {
    path: '/404',
    component: '@/pages/error/error',
    'exact': true,
  },
];