import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
import HomeView from '@/views/home/HomeView.vue';
import { useLoadingStore } from '@/stores/loading';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/renewal',
    name: 'renewal',
    children: [
      {
        path: 'cn',
        name: 'renewal-cn',
        component: () => import('@/views/renewal/CNumberFormView.vue'),
      },
      {
        path: 'rn',
        name: 'renewal-rn',
        component: () => import('@/views/renewal/RNumberFormView.vue'),
      },
      {
        path: 'ipnpn',
        name: 'renewal-ipnpn',
        component: () => import('@/views/renewal/IPNPNumberFormView.vue'),
      },
      {
        path: 'search-by',
        name: 'renewal-search-by',
        component: () => import('@/views/renewal/SearchByView.vue'),
      },
    ],
  },
  {
    path: '/test-view',
    name: 'test-view',
    component: () => import('@/views/TestView.vue'),
  },
  {
    path: '/another-test-view',
    name: 'another-test-view',
    component: () => import('@/views/AnotherTestView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeResolve((to, _from, next) => {
  const loadingStore = useLoadingStore();
  if (to.name) loadingStore.isLoading = true;

  next();
});

router.afterEach((_to, _from) => {
  const loadingStore = useLoadingStore();
  loadingStore.isLoading = false;
});

export default router;
