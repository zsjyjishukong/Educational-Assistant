<template>
  <div id="schedule-body">
    <div class="blur" style="height: 100%">
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
        <yd-flexbox class="body" v-for="i in 4" :key="i">
          <yd-flexbox-item>
            {{(2*i-1)}}-{{2*i}}
          </yd-flexbox-item>
          <yd-flexbox-item v-for="j in 6" :key="j" :style="{background: calculateClassForOddOrEven(classes[j-1][i-1]).bgcolor, color: calculateClassForOddOrEven(classes[j-1][i-1]).color}">
            <div class="class-detail">
              <div class="class-name">
                {{calculateClassForOddOrEven(classes[j-1][i-1]).name}}
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
</template>

<script>
import requestSchedule from '../../../api/index'

export default {
  name: 'schedule-body',
  props: {
    student: {
      type: Object
    }
  },
  data () {
    return {
      classes: [
        // 周一 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周二 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周三 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周四 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周五 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周六 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ],
        // 周日 1-4 节
        [
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}],
          [{name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,0,0,0)'}]
        ]
      ],
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
    async querySchedule () {
      // this.classes = []
      this.$dialog.loading.open('正在查询……')
      let res = await requestSchedule.getSchedule(this.year, this.term)
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
      this.handleClasses(res.schedule)
    },
    fatherQuerySchedule: function (year, term) {
      this.year = year
      this.term = term
      this.querySchedule()
    },
    handleClasses: function (obj) {
      let classArray = []
      for (let i of obj) {
        let tmpArray = []
        for (let j of i) {
          let tmpArray1 = []
          for (let k of j) {
            let tmp = {name: '', teacher: '', weeks: '', color: '#fff', bgcolor: 'rgba(255,255,255,0)'}
            let data = k
            tmp.name = this.limitTextLength(data.name, 12)
            tmp.teacher = data.teacher
            tmp.place = data.place
            tmp.weeks_arr = data.weeks_arr
            if (this.inArray(this.nowWeek, data.weeks_arr)) {
              tmp.bgcolor = data.color
            } else {
              tmp.color = 'rgb(157, 170, 176)'
              tmp.bgcolor = 'rgba(243, 243, 243, 0.8)'
            }
            tmp.weeks = data.weeks_text
            tmpArray1.push(tmp)
          }
          tmpArray.push(tmpArray1)
        }
        classArray.push(tmpArray)
      }
      this.classes = classArray
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
          if (str.toString().indexOf(array[i]) !== -1) {
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
        let nowWeek = parseInt(week)
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
    this.$emit('changeNavAndTab', 1)
  }
}
</script>

<style scoped>
#schedule-body{
  height: 100%;
  background-image: url("scorebg.jpg");
}
.blur {
  background: rgba(0, 0, 0, .3);
}
.yd-flexbox-item{
  text-align: center;
  user-select: none;
}
.schedule{
  color: #eee;
  height: 100%;
}
.title{
  background: #777;
  padding: 0.1rem 0;
  height: 8%;
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
  height: 2.5rem;
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
