<template>
  <div id="calendar-page" style="height: 100%">
      <el-calendar style="text-align: center">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <a class="date">{{ date.getDate()}}</a>
          <a v-if="isDay(date)" :class="isDay(date).isRest === true ? 'rest' : 'study'" >{{isDay(date).isRest === true ? '休' : '班'}}</a>
          <a v-else=""></a>
          <div class="name" v-if="isDay(date)">{{isDay(date).name}}</div>
        </template>
      </el-calendar>
  </div>
</template>
<script>
// import CalendarData from '../../../api/CalendarData'
export default {
  name: 'calendar',
  data () {
    return {
      holidayData: {
        2019: {
          9: {
            13: {
              name: '中秋节',
              isRest: true
            },
            29: {
              name: '',
              isRest: false
            },
            30: {
              name: '',
              isRest: true
            }
          },
          10: {
            1: {
              name: '国庆节',
              isRest: true
            },
            '2-9': {
              name: '',
              isRest: true
            },
            3: {
              name: '',
              isRest: true
            },
            4: {
              name: '',
              isRest: true
            },
            5: {
              name: '',
              isRest: true
            },
            6: {
              name: '',
              isRest: true
            }
          }
        }
      },
      isShowRest: ''
    }
  },
  methods: {
    isDay: function (nowDate) {
      let date = nowDate.getDate()
      let month = nowDate.getMonth()
      let year = nowDate.getFullYear()
      month = month + 1
      if (this.holidayData[year]) {
        if (this.holidayData[year][month]) {
          if (this.holidayData[year][month][date]) {
            return this.holidayData[year][month][date]
          }
        }
      }
      return false
    }
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '2019-2020学年校历', leftShow: true, rightShow: false, leftLink: './mine'})
  }
}
</script>

<style scoped>
  .date{
    margin-left: 5px;
    font-size: 15px;
  }
  .name{
    margin: 50% 0;
    color: #aaa;
  }
  .rest{
    float: right;
    margin-right: 3px;
    color: #04be02 ;
    margin-top: -3px;
    font-size:10px;
  }
  .study{
    float: right;
    margin-right: 3px;
    color: #EF4F4F ;
    margin-top: -3px;
    font-size:10px;
  }
  .holiday{
    display: block;
    margin-top: 5px;
    color: #C0C4CC;
  }
  #index-body{
    height: 80%;
  }
</style>
