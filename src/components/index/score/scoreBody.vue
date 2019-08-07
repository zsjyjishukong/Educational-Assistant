<template>
  <div id="score-body">
    <div class="jd">
      <span class="name">
        姓名：齐昊宇
      </span>
      <yd-countup
        endnum="3.4556"
        duration="2"
        decimals="2"
        separator=","
        prefix="总绩点："
      ></yd-countup>
      <span class="name">
        学院：信息管理系
      </span>
    </div>
    <yd-accordion>
      <div v-for="(valYear, keyYear) in score" :key="keyYear">
        <yd-accordion-item v-for="(valTerm, keyTerm) in valYear" :title="keyYear + '学年 第' + keyTerm + '学期'" :key="keyTerm">
          <table class="score-table" cellspacing="0">
            <tr class="first-tr">
              <td>课程</td>
              <td>学分</td>
              <td>平时成绩</td>
              <td>期末成绩</td>
              <td>总成绩</td>
            </tr>
            <tr v-for="(data, keyData) in valTerm" :key="keyData" @click="scoreTip()">
              <td v-text="limitTextLength(data.lesson_name, 12)"></td>
              <td>{{data.point}}</td>
              <td>{{data.peace_score}}</td>
              <td>{{data.term_end_score}}</td>
              <td>{{data.all_score}}</td>
            </tr>
          </table>
        </yd-accordion-item>
      </div>
    </yd-accordion>
  </div>
</template>

<script>
import {getScore} from '../../../api/index'
export default {
  name: 'scoreBody',
  methods: {
    async queryScore () {
      let userid = '20153320140'
      let pass = '130682qhy'
      this.$dialog.loading.open('正在查询，请稍后……')
      // for (let resStatus = 500; resStatus === 200;) {
      //   let res = await getScore(userid, pass)
      // }
      let i = 0
      await getScore(userid, pass, i)
        .then((res) => {
          this.score = res
          this.$dialog.loading.close()
        })
        .catch((err) => {
          let status = err.response.status
          if (status === 502) {
            console.log(this)
            this.$dialog.loading.close()
            this.popout('服务器错误', '服务器错误，请联系管理员,错误码：1')
          } else if (status === 500) {
            if (i < 3) {
              getScore(userid, pass, i)
            } else {
              this.popout('服务器错误', '服务器错误，请联系管理员，错误码：2')
            }
          }
        })
    },
    limitTextLength: function (text, num) {
      if (text.length > num) {
        return text.substring(0, num - 3) + '…'
      }
      return text
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
  },
  data () {
    return {
      score: null
    }
  },
  mounted () {
    this.queryScore()
  }
}
</script>

<style scoped>
  #score-body{
    height: 100%;
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
    border-top: 1px solid #0bb20c;
    border-bottom: 1px solid #0bb20c;
  }
  .score-table th, .score-table td{
    text-align: center;
  }
  .first-tr td{
    border-bottom: 1px solid #0bb20c;
    mso-cellspacing: 0;
  }
</style>
