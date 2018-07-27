import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest from '@/components/RouterTest'
import HomePage from '@/components/HP'
// import MapTest from '@/components/maptest/MapTest'
import VideoTest from '@/components/hikivision/VideoTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    {
      path: '/maptest',
      name: 'MapTest',
      component: resolve => require(['@/components/maptest/MapTest'], resolve)
    },
    {
      path: '/videotest',
      name: 'VideoTest',
      component: VideoTest
      // component: resolve => require(['@/components/hikivision/VideoTest'], resolve)
    }
  ]
})
