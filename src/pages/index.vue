<template>
  <div id="index-page" style="height: 100%;">
    <router-view :student="student"></router-view>
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
      student: {
        studentID: sessionStorage.getItem('studentId'),
        password: sessionStorage.getItem('password'),
        name: '查询中…',
        collage: '查询中…'
      }
    }
  },
  methods: {
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
      } else if (res.code === 1) {
        this.queryStudentInfo()
        return true
      }
    }
  },
  mounted () {
    this.queryStudentInfo()
  }
}
</script>

<style scoped>
#index-body{
  overflow: hidden;
}
</style>
