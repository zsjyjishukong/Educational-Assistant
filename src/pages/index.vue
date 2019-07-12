<template>
  <div id="index-page" style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" :title="title" id="navbar">
        <yd-icon name="footmark" slot="right" style="color: #000;" v-if="actived === 1" @click.native="showSelectYear"></yd-icon>
      </yd-navbar>
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
      <yd-actionsheet :items="selectYear" v-model="selectYearShow"></yd-actionsheet>
      <yd-actionsheet :items="selectTerm" v-model="selectTermShow"></yd-actionsheet>
    </yd-layout>
  </div>
</template>

<script>
import 'vue-ydui/dist/ydui.base.css'
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
      hash: '',
      selectYearShow: false,
      selectTermShow: false,
      selectYear: [
        {
          label: '2018',
          callback: () => {
            this.$dialog.toast({mes: '2018'})
            this.selectTermShow = true
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: '2019',
          callback: () => {
            this.$dialog.toast({mes: '2019'})
            this.selectTermShow = true
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        }
      ],

      selectTerm: [
        {
          label: '第一学期',
          callback: () => {
            this.$dialog.toast({mes: '第一学期'})
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: '第二学期',
          callback: () => {
            this.$dialog.toast({mes: '第二学期'})
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        }
      ]
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
    },
    showSelectYear: function () {
      console.log('aaa')
      console.log(this.selectYearShow)
      this.selectYearShow = true
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
