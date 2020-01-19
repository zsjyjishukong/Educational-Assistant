<template>
  <page-template title="课表查询" :actived="1">
    <div id="schedule-body" slot="body">
      <div class="blur">
        <div class="schedule">
          <yd-flexbox class="title">
            <yd-flexbox-item>
              {{showNowWeek()}}<br>
              {{month}}月
            </yd-flexbox-item>
            <yd-flexbox-item v-for="(i, key) in week" :key="i.getDate()">
              {{day[key]}}<br>
              {{i.getDate()}}日
            </yd-flexbox-item>
          </yd-flexbox>
          <yd-flexbox class="body" v-for="i in dayClassesNum" :key="i">
            <yd-flexbox-item class="lesson_num">
              {{(2*i-1)}}-{{2*i}}
            </yd-flexbox-item>
            <yd-flexbox-item v-for="j in dayTest" :key="j" :style="{background: setOpacity(calculateClassForOddOrEven(classes[j-1][i-1]).bgcolor), color: calculateClassForOddOrEven(classes[j-1][i-1]).color}">
              <div class="class-detail">
                <div class="class-name">
                  {{limitTextLength(calculateClassForOddOrEven(classes[j-1][i-1]).name, 12)}}
                </div>
                <div class="class-teacher">
                  {{calculateClassForOddOrEven(classes[j-1][i-1]).teacher}}
                </div>
                <div class="class-place">
                  {{calculateClassForOddOrEven(classes[j-1][i-1]).place}}
                </div>
                <div class="class-week">
                  {{calculateClassForOddOrEven(classes[j-1][i-1]).weeks}}
                </div>
              </div>
            </yd-flexbox-item>
          </yd-flexbox>
        </div>
      </div>
    </div>
  </page-template>
</template>

<script>
import requestSchedule from '../../../api/index'
import pageTemplate from '../../common/page-temlate'

export default {
  name: 'schedule-body',
  props: {
    student: {
      type: Object
    }
  },
  components: {
    pageTemplate
  },
  data () {
    return {
      dayTest: 7,
      dayClassesNum: 0,
      classes: [],
      year: '2019-2020',
      term: '1',
      month: new Date().getMonth() + 1,
      week: [],
      day: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      nowWeek: 0,
      schoolDate: '2019/08/26 00:00:00'
    }
  },
  methods: {
    limitTextLength: function (text, num) {
      if (text.length > num) {
        return text.substring(0, num - 3) + '…'
      }
      return text
    },
    setOpacity: function (bgcolor) {
      if (bgcolor === 'rgba(255,0,0,0)') {
        return 'none'
      } else {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgcolor)
        return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, 0.8)` : null
      }
    },
    async querySchedule () {
      // this.classes = []
      this.$dialog.loading.open('正在查询……')
      let res = ''
      try {
        res = await requestSchedule.getSchedule(this.year, this.term)
      } catch (e) {
        this.$dialog.loading.close()
        this.$dialog.toast({
          type: 'error',
          mes: '请求服务器失败'
        })
        console.log(e)
        return false
      }
      while ('error' in res) {
        res = await requestSchedule.getSchedule(this.year, this.term)
      }
      if (res.code === 2) {
        this.$dialog.toast({
          mes: '未登录，请重新登录',
          timeout: 1500,
          icon: 'error'
        })
        document.cookie = 'token='
        this.$router.push('/')
      }
      this.handleClasses(res.data)
    },
    fatherQuerySchedule: function (year, term) {
      this.year = year
      this.term = term
      this.querySchedule()
    },
    handleClasses: function (arr) {
      this.classes = []
      let defaultClass = {name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}
      let dayClassesNum = 4
      for (let val of arr) {
        if (!this.classes[parseInt(val.day)]) {
          this.classes[parseInt(val.day)] = []
        }
        if (!this.classes[parseInt(val.day)][parseInt(val.lesson)]) {
          this.classes[parseInt(val.day)][parseInt(val.lesson)] = []
        }
        let nowWeek = this.nowWeek.toString()
        if (!this.inArray(nowWeek, val['weeks_arr'])) {
          val['bgcolor'] = '#ffffff'
          val['color'] = '#999'
        }
        this.classes[parseInt(val.day)][parseInt(val.lesson)].push(val)
      }
      for (let i = 0; i < this.dayTest; i++) {
        if (!this.classes[i]) {
          this.classes[i] = []
        }
        for (let j = 0; j < dayClassesNum; j++) {
          if (!this.classes[i][j]) {
            this.classes[i][j] = []
            this.classes[i][j][0] = defaultClass
          }
        }
      }
      this.dayClassesNum = 4
      this.$dialog.loading.close()
    },
    showWeekFirstDay: function () {
      let nowDate = new Date()
      let week = []
      week[0] = new Date(nowDate - (nowDate.getDay() - 1) * 86400000)
      for (let i = 1; i < 7; i++) {
        week[i] = new Date(week[i - 1].getTime() + 86400000)
      }
      return week
    },
    queryNowWeek: function () { // 计算当前时间周数  school是开学时间
      let schoolDate = this.schoolDate
      let dateBegin = new Date(schoolDate) // 转化为Date对象的形式
      let dateEnd = new Date()
      let between = dateEnd.getTime() - dateBegin.getTime()
      let week = Math.ceil(Math.ceil(between / (24 * 3600 * 1000) / 7))
      return week
    },
    showNowWeek: function () {
      this.nowWeek = this.queryNowWeek()
      if (this.nowWeek < 1 || this.nowWeek > 20) { // 计算中间时间
        return '假期'
      } else {
        return '第' + this.nowWeek + '周'
      }
    },
    inArray: function (str, array) {
      if (str) {
        for (let i in array) {
          if (str.toString().indexOf(array[i].trim()) !== -1) {
            return true
          }
        }
      }
      return false
    },
    calculateClassForOddOrEven: function (array) {
      if (array.length === 0) {
        return {name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,255,255,0)'}
      } else if (array.length === 1) {
        return array[0]
      } else if (array.length > 1) {
        let week = this.nowWeek
        for (let lesson of array) {
          if (this.inArray(week.toString(), lesson.weeks_arr)) {
            return lesson
          }
        }
        let nowWeek = this.nowWeek
        for (; nowWeek < 21; nowWeek++) {
          for (let lesson of array) {
            if (this.inArray(nowWeek.toString(), lesson.weeks_arr)) {
              return lesson
            }
          }
        }
        nowWeek = parseInt(week)
        for (;nowWeek > 1; nowWeek--) {
          for (let lesson of array) {
            if (this.inArray(nowWeek, lesson.week_arr)) {
              return lesson
            }
          }
        }
        return {name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,255,255,0)'}
      }
    }
  },
  mounted () {
    this.querySchedule()
    this.showNowWeek()
    this.week = this.showWeekFirstDay()
    this.$emit('changeNavAndTab', {tabShow: true, showId: 1, title: '课表查询', leftShow: false, rightShow: true, leftLink: ''})
  }
}
</script>

<style scoped>
#schedule-body{
  height: 100%;
  background-image: url("katong.jpg");
  background-size: 100% 100%;
}
#schedule-body * {
  box-sizing: border-box;
}
.blur {
  background: rgba(0, 0, 0, .2);
  height: 100%;
  overflow-y: hidden;
}
.yd-flexbox-item{
  text-align: center;
  user-select: none;
}
.lesson_num{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.schedule{
  color: #eee;
  height: 100%;
}
.title{
  background: rgba(0, 0, 0, .1);
  padding: 0.1rem 0;
  height: 8%;
  border-bottom: 1px solid #fff;
}
.body{
  height: 23%;
}
.body .yd-flexbox-item:nth-child(1){
  height: 100%;
  vertical-align: center;
  line-height: 2.61rem;
  border-right: 0.5px solid #fff;
  width: 50%;
  background: rgba(0, 0, 0, .1)
}
.body .yd-flexbox-item:nth-of-type(2),
.body .yd-flexbox-item:nth-of-type(3),
.body .yd-flexbox-item:nth-of-type(4),
.body .yd-flexbox-item:nth-of-type(5),
.body .yd-flexbox-item:nth-of-type(6),
.body .yd-flexbox-item:nth-of-type(7),
.body .yd-flexbox-item:nth-of-type(8)
{
  background: rgba(0,0,0,.5);
  border-radius: 0.1rem;
  height: 96%;
  display: flex;
  justify-content:center;
  align-items:Center;
  width: 80%;
  margin-left: 0.05rem;
}
  .class-detail{
    font-size: 11px;
    line-height: 0.6rem;
  }
  .class-name{
    line-height: 15px;
  }
  .class-place{
    font-size: 11px;
    line-height: 15px;
  }
  .class-week{
    font-size: 11px;
    line-height: 15px;
  }
</style>
