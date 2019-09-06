<template>
  <yd-layout>
    <div id="score-body">
      <div class="jd">
      <span class="name">
        姓名：{{student.name}}
      </span>
      <yd-countup
        :endnum="score.point"
        duration="2"
        decimals="2"
        separator=","
        prefix="总绩点："
      ></yd-countup>
      <span class="name">
        学院：{{student.collage}}
      </span>

    </div>
      <yd-accordion>
      <div class="no-score" v-if="isEmptyObject(score.score_info)">
        暂无成绩
      </div>
      <div v-for="(valYear, keyYear) in score.score_info" :key="keyYear">
        <yd-accordion-item v-for="(valTerm, keyTerm) in valYear" :title="keyYear + '学年 第' + keyTerm + '学期'" :key="keyTerm">
          <table class="score-table" cellspacing="0">
            <tr class="first-tr">
              <td>课程</td>
              <td>学分</td>
              <td>平时成绩</td>
              <td>期末成绩</td>
              <td>总成绩</td>
            </tr>
            <tr class="score-trs" v-for="(data, keyData) in valTerm" :key="keyData" @click="popoutScore(data)">
              <td v-text="limitTextLength(data.lesson_name, 12)" class="lesson-name"></td>
              <td>{{data.credit}}</td>
              <td>{{data.peace_score}}</td>
              <td>{{data.term_end_score}}</td>
              <td>{{data.all_score}}</td>
            </tr>
          </table>
        </yd-accordion-item>
      </div>
    </yd-accordion>
    </div>
  </yd-layout>
</template>

<script>

export default {
  name: 'scoreBody',
  props: {
    student: {
      type: Object
    },
    score: {
      type: Object
    }
  },
  methods: {
    popoutScore: function (scoreObj) {
      let title = scoreObj.lesson_name
      let html = `课程代码：${scoreObj.lesson_code}<br>课程类型：${scoreObj.lesson_type}<br>学分：${scoreObj.credit}<br>` +
                  `平时成绩：${scoreObj.peace_score}<br>期末成绩：${scoreObj.term_end_score}<br>总成绩：${scoreObj.all_score}<br>`
      if (scoreObj.make_up_score) {
        html += `补考成绩：${scoreObj.make_up_score}`
      }
      if (scoreObj.rebuild_score) {
        html += `重修成绩：${scoreObj.rebuild_score}`
      }
      html += `绩点：${scoreObj.point}<br>开课学院：${scoreObj.teach_college}`
      this.popout(title, html)
    },
    popout: function (title, msg) {
      this.$dialog.confirm({
        title: title,
        mes: msg,
        opts: [
          {
            txt: '确定',
            color: true
          }
        ]
      })
    },
    limitTextLength: function (text, num) {
      if (!text) {
        return ''
      }
      if (text.length > num) {
        return text.substring(0, num - 3) + '…'
      }
      return text
    },
    isEmptyObject: function (obj) {
      for (let i in obj) {
        return false
      }
      return true
    }
  },
  data () {
    return {
      errorArray: ['密码错误', '用户名不存在或未按照要求参加教学活动']
    }
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: true, showId: 0, title: '成绩查询', leftShow: false, rightShow: false, leftLink: ''})
    if (!this.score) {
      this.$emit('queryScore')
    }
  }
}
</script>

<style scoped>
  #score-body{
    /*height: 100%;*/
  }
  .jd{
    text-align: center;
    padding-top: 0.3rem;
    padding-bottom:  0.3rem;
    color: #04be02;
  }
  .name{
    margin: .2rem;
  }
  .score-table{
    margin: auto;
    width: 100%;
  }
  .score-table th, .score-table td{
    text-align: center;
  }
  .first-tr{
    height: 0.5rem;
  }
  .first-tr td{
    border-bottom: 1px solid #44c125;
    mso-cellspacing: 0;
  }
  .score-trs{
    height: 0.6rem;
  }
  .no-score{
    margin-top: 10%;
    background: #f5f5f5;
    text-align: center;
    color: #ccc;
    font-size: 18px;
  }
</style>
