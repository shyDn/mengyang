import Vue from 'vue'
import Router from 'vue-router'
import Monitor from '@/components/monitor'
import RouterTest from '@/components/RouterTest'
import HomePage from '@/components/HP'
import HomePageShy from '@/components/test/HPShy'
import Skeleton from '@/components/skeleton/skeleton'
import Dashboard from '@/components/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/monitor',
      component: Monitor
    },
    {
      path: '/standard',
      name: 'standard',
      component: resolve => require(['@/components/skeleton/standard'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/register/register'], resolve)
    },
    {
      path: '/',
      component: Skeleton,
      children: [
        { path: '', name: 'dashboard', component: Dashboard},
        { path: '/maptest', component: resolve => require(['@/components/maptest/MapTest'], resolve)},
        { path: '/hp', component: HomePageShy},
        { path: '/video', component: resolve => require(['@/components/hikivision/VideoTest'], resolve)}
      ]
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/routertest',
      name: 'RouterTest',
      component: RouterTest
    },
    // {
    //   path: '/maptest',
    //   name: 'MapTest',
    //   component: resolve => require(['@/components/maptest/MapTest'], resolve)
    // },
    {
      path: '/videotest',
      name: 'VideoTest',
      // component: VideoTest
      component: resolve => require(['@/components/hikivision/VideoTest'], resolve)
    }
  ]
})
