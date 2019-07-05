<template>
  <div id="index-page" style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" :title="title" id="navbar"></yd-navbar>
      <div id="index-body" style="height: 100%">
        <score-body v-if="actived === 0"></score-body>
        <schedule-body v-if="actived === 1"></schedule-body>
        <mine v-if="actived === 2"></mine>
      </div>

      <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="成绩查询" link="#score" :active="actived === 0 ? true : false" @click.native="changeNavAndTab(0)">
          <yd-icon name="feedback" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="课表查询" link="#schedule" :active="actived === 1 ? true : false" @click.native="changeNavAndTab(1)">
          <yd-icon name="location" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="#mine" :active="actived === 2 ? true : false" @click.native="changeNavAndTab(2)">
          <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>

    </yd-layout>
  </div>
</template>

<script>
import scoreBody from '../components/index/score/scoreBody'
import scheduleBody from '../components/index/schedule/shcedule-body'
import mine from '../components/index/mine/mine'

export default {
  name: 'index',
  components: {
    scoreBody, scheduleBody, mine
  },
  data () {
    return {
      title: '',
      actived: 0,
      hash: ''
    }
  },
  methods: {
    changeNavAndTab: function (id) {
      this.actived = id
      switch (id) {
        case 0:
          this.title = '成绩查询'
          break
        case 1:
          this.title = '课表查询'
          break
        case 2:
          this.title = '我的'
          break
      }
    }
  },
  watch: {
  },
  beforeRouteEnter: function (to, from, next) {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('token').length === 1) {
      console.log('通过')
      next()
    } else {
      console.log('未通过')
      next(vm => {
        vm.$dialog.toast({
          mes: '参数错误，请重新登陆',
          timeout: 5000,
          icon: 'error'
        })
      })
    }
  },
  mounted: function () {
    switch (this.$route.hash) {
      case '#mine':
        this.changeNavAndTab(2)
        break
      case '#schedule':
        this.changeNavAndTab(1)
        break
      case '':
        this.changeNavAndTab(0)
        break
      case '#score':
        this.changeNavAndTab(0)
        break
    }
  }
}
</script>

<style scoped>
#navbar{
}
#index-body{
  overflow: hidden;
}
</style>
