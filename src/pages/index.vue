<template>
  <div id="index-page" style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" :title="title" id="navbar">
        <yd-icon name="footmark" slot="right" style="color: #000;" v-if="actived === 1" @click.native="showSelectYear"></yd-icon>
      </yd-navbar>
      <div id="index-body" style="height: 100%">
        <router-view ref="child"></router-view>
      </div>

      <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="成绩查询" link="/index/score" :active="actived === 0 ? true : false" @click.native="changeNavAndTab(0)">
          <yd-icon name="feedback" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="课表查询" link="/index/schedule" :active="actived === 1 ? true : false" @click.native="changeNavAndTab(1)">
          <yd-icon name="location" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/index/mine" :active="actived === 2 ? true : false" @click.native="changeNavAndTab(2)">
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
import scheduleBody from '../components/index/schedule/scheduleBody'
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
      selectedYear: '',
      selectedTerm: '',
      selectYear: [
        {
          label: '2018-2019',
          callback: () => {
            this.selectTermShow = true
            this.selectedYear = '2018-2019'
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: '2019-2020',
          callback: () => {
            this.selectTermShow = true
            this.selectedYear = '2019-2020'
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        }
      ],

      selectTerm: [
        {
          label: '第一学期',
          callback: () => {
            this.selectedTerm = 1
            this.$refs.child.fatherQuerySchedule(this.selectedYear, this.selectedTerm)
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
        {
          label: '第二学期',
          callback: () => {
            this.selectedTerm = 2
            this.$refs.child.fatherQuerySchedule(this.selectedYear, this.selectedTerm)
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
    this.changeNavAndTab(0)
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
