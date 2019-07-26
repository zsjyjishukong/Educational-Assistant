import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'
import error from '@/pages/error'
import aboutUs from '@/components/index/mine/aboutUs'
import rewardUs from '@/components/index/mine/rewardUs'
import privacy from '@/components/index/mine/privacy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: aboutUs,
      component: aboutUs
    },
    {
      path: '/privacy',
      name: privacy,
      component: privacy
    },
    {
      path: '/reward',
      name: rewardUs,
      component: rewardUs
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
