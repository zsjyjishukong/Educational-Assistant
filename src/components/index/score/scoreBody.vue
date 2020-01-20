<template>
  <page-template title="成绩查询" :actived="0">
    <div slot="left">
      <yd-icon name="refresh" @click.native="refreshScore" style="color: #000;"></yd-icon>
    </div>
    <div id="score-body" slot="body">
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
              <td>{{data.usual_score}}</td>
              <td>{{data.term_end_score}}</td>
              <td>{{data.all_score}}</td>
            </tr>
          </table>
        </yd-accordion-item>
      </div>
    </yd-accordion>
    </div>
  </page-template>
</template>

<script>
import pageTemplate from '../../common/page-temlate'
import requestIndex from '../../../api'
export default {
  name: 'scoreBody',
  props: {
    student: {
      type: Object
    }
  },
  components: {
    pageTemplate
  },
  methods: {
    popoutScore: function (scoreObj) {
      let title = scoreObj.lesson_name
      let html = `课程代码：${scoreObj.code}<br>课程类型：${scoreObj.type}<br>学分：${scoreObj.credit}<br>` +
                  `平时成绩：${scoreObj.usual_score}<br>期末成绩：${scoreObj.term_end_score}<br>总成绩：${scoreObj.all_score}<br>`
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
    },
    async queryScore () {
      if (this.queryScoreRetry === 6) {
        this.popout('服务器错误', '查成绩服务错误，请重试……<br>如多次出现，请联系管理员')
        return false
      }
      this.$dialog.loading.open(`正在进行第${this.queryScoreRetry}次查询……`)
      let res = null
      let i = 1
      try {
        res = await requestIndex.getScore()
      } catch (e) {
        this.$dialog.loading.close()
        this.queryScoreRetry += 1
        this.queryScore()
        return true
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
    handleScore: function (res) {
      if (res) {
        if (this.inArray(res.error, this.errorArray)) {
          this.popout('出错了', res.error)
        } else {
          let score = {}
          if (res.data) {
            res.data.forEach(item => {
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
          sessionStorage.setItem('score', JSON.stringify(this.score))
        }
      } else {
        this.popout('服务器错误', `服务器错误，请联系管理员<br>${res.error}`)
      }
      this.$dialog.loading.close()
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
    async refreshScore () {
      let res = await requestIndex.refreshScore()
      console.log(res)
    }
  },
  data () {
    return {
      errorArray: ['密码错误', '用户名不存在或未按照要求参加教学活动'],
      score: {
        point: 0,
        score_info: {}
      },
      queryScoreRetry: 0
    }
  },
  mounted () {
    let score = sessionStorage.getItem('score')
    if (score) {
      this.score = JSON.parse(score)
    } else {
      this.queryScore()
    }
  }
}
</script>

<style scoped>
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
