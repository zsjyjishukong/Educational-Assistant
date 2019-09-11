<template>
  <div id="index-page" style="height: 100%;">
    <yd-layout>
      <yd-navbar slot="navbar" :title="title" id="navbar">
        <router-link :to="leftLink" slot="left" v-if="leftShow">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        <yd-icon name="footmark" slot="right" style="color: #000;" v-if="rightShow" @click.native="showSelectYear"></yd-icon>
      </yd-navbar>
      <div id="index-body" style="height: 100%">
        <router-view ref="child" v-on:changeNavAndTab="changeNavAndTab"
                     :student="student" :score="score" v-on:queryScore="queryScore"></router-view>
      </div>

      <yd-tabbar slot="tabbar" v-if="tabbarShow">
        <yd-tabbar-item title="成绩查询" link="/index/score" :active="actived === 0 ? true : false">
          <yd-icon name="feedback" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="课表查询" link="/index/schedule" :active="actived === 1 ? true : false">
          <yd-icon name="location" slot="icon"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/index/mine" :active="actived === 2 ? true : false">
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
import requestIndex from '../api/index.js'

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
      leftShow: false,
      leftLink: '',
      rightShow: false,
      selectYear: [
        {
          label: '2017-2018',
          callback: () => {
            this.selectTermShow = true
            this.selectedYear = '2017-2018'
            /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
          }
        },
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
      ],
      student: {
        studentID: sessionStorage.getItem('studentId'),
        password: sessionStorage.getItem('password'),
        name: '查询中…',
        collage: '查询中…'
      },
      errorArray: ['密码错误', '用户名不存在或未按照要求参加教学活动'],
      score: {
        point: 0,
        score_info: {}
      },
      tabbarShow: true
    }
  },
  methods: {
    changeNavAndTab: function (obj) {
      /*
        {
          tabShow: true/false,
          showId: 0/1/2,
          title: ''
        }
      */
      this.actived = obj.showId
      this.tabbarShow = obj.tabShow
      this.title = obj.title
      this.leftShow = obj.leftShow
      this.leftLink = obj.leftLink
      this.rightShow = obj.rightShow
    },
    showSelectYear: function () {
      this.selectYearShow = true
    },
    async queryStudentInfo () {
      let res = await requestIndex.getStudentInfo(this.student.studentID, this.student.password)
      if (res.code === 0) {
        this.$set(this.student, 'name', res.data.student_name)
        this.$set(this.student, 'collage', res.data.student_xy)
        this.$set(this.student, 'major', res.data.student_zy)
        this.$set(this.student, 'administrativeClass', res.data.student_xzb)
        this.$set(this.student, 'img', res.data.img)
      } else if (res.code === 2) {
        document.cookie = 'token='
        this.$router.push('/')
      }
    },
    async queryScore () {
      // this.$dialog.loading.open('正在查询……')
      let i = 1
      let res = await requestIndex.getScore()
      if (res.code === 2) {
        this.$dialog.toast({
          mes: '未登录，请重新登录',
          timeout: 1500,
          icon: 'error'
        })
        document.cookie = 'token='
        this.$router.push('/')
      }
      while (res.error) {
        if (this.inArray(res.error, this.errorArray)) {
          break
        } else if (i < 5) {
          res = await requestIndex.getScore()
          i++
        } else {
          res = false
        }
      }
      this.handleScore(res)
    },
    inArray: function (str, array) {
      if (str) {
        for (let i in array) {
          if (str.indexOf(array[i]) !== -1) {
            return true
          }
        }
      }
      return false
    },
    handleScore: function (res) {
      if (res) {
        if (this.inArray(res.error, this.errorArray)) {
          this.popout('出错了', res.error)
        } else {
          let score = {}
          if (res.data) {
            res.data.forEach(function (item, index) {
              if (!score[item['year']]) {
                score[item['year']] = {}
              }
              if (!score[item['year']][item['term']]) {
                score[item['year']][item['term']] = []
              }
              score[item['year']][item.term].push(item)
            })
          }
          this.$set(this.score, 'score_info', score)
          this.$set(this.score, 'point', res.point ? res.point : 0)
        }
      } else {
        this.popout('服务器错误', `服务器错误，请联系管理员<br>${res.error}`)
      }
      this.$dialog.loading.close()
    },
    limitTextLength: function (text, num) {
      if (text.length > num) {
        return text.substring(0, num - 3) + '…'
      }
      return text
    }
  },
  mounted () {
    this.queryStudentInfo()
    this.queryScore()
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
