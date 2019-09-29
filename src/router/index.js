import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'
import error from '@/pages/error'
import aboutUs from '@/components/index/mine/aboutUs'
import rewardUs from '@/components/index/mine/rewardUs'
import privacy from '@/components/index/mine/privacy'
import score from '@/components/index/score/scoreBody'
import schedule from '@/components/index/schedule/scheduleBody'
import mine from '@/components/index/mine/mine'
import calendar from '@/components/index/mine/calendar'

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
      component: index,
      children: [
        {
          path: '/',
          redirect: 'score'
        },
        {
          path: 'score',
          name: 'score',
          component: score
        }, {
          path: 'schedule',
          name: 'schedule',
          component: schedule
        }, {
          path: 'mine',
          name: 'mine',
          component: mine
        }, {
          path: 'about',
          name: 'aboutUs',
          component: aboutUs
        }, {
          path: 'privacy',
          name: 'privacy',
          component: privacy
        }, {
          path: 'reward',
          name: 'rewardUs',
          component: rewardUs
        }, {
          path: 'calendar',
          name: 'calendar',
          component: calendar
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
