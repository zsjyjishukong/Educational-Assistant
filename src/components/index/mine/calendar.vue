<template>
  <page-template title="学校日历" :tab-show="false">
    <router-link to="/index/mine" slot="left">
      <yd-navbar-back-icon></yd-navbar-back-icon>
    </router-link>
    <div id="calendar-page" style="height: 100%" slot="body">
      <el-calendar style="text-align: center;">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <a class="date">{{ date.getDate() }}</a>
          <a v-if="isDay(date)" :class="isDay(date).isRest === true ? 'rest' : 'study'" >{{isDay(date).isRest === true ? '休' : '班'}}</a>
          <a v-else=""></a>
          <div class="name" v-if="isDay(date)">{{isDay(date).name}}</div>
        </template>
      </el-calendar>
    </div>

  </page-template>
</template>
<script>
import pageTemplate from '../../common/page-temlate'

export default {
  name: 'calendar',
  components: {
    pageTemplate
  },
  data () {
    return {
      holidayData: {},
      holidayConfig: [
        {
          dateRange: '2019.09.13-2019.09.15',
          isRest: true,
          showDate: '2019.09.13',
          showText: '中秋'
        }, {
          dateRange: '2019.09.30-2019.10.07',
          isRest: true,
          showDate: '2019.10.01',
          showText: '国庆'
        }, {
          dateRange: '2019.09.28-2019.09.29',
          isRest: false,
          showDate: '2019.09.28',
          showText: '调休'
        }, {
          dateRange: '2020.01.01',
          isRest: true,
          showText: '元旦'
        }, {
          dateRange: '2020.01.13-2020.02.23',
          isRest: true,
          showDate: '2020.01.13',
          showText: '寒假'
        }, {
          dateRange: '2020.04.04-2020.04.05',
          isRest: true,
          showDate: '2020.04.04',
          showText: '清明节'
        }, {
          dateRange: '2020.05.01-2020.05.03',
          isRest: true,
          showDate: '2020.05.01',
          showText: '劳动节'
        }, {
          dateRange: '2020.07.13-2020.08.23',
          isRest: true,
          showDate: '2020.07.13',
          showText: '暑假'
        }
      ],
      isShowRest: ''
    }
  },
  methods: {
    isDay: function (nowDate) {
      let date = nowDate.getDate()
      let month = nowDate.getMonth()
      let year = nowDate.getFullYear().toString()
      month = (month + 1).toString()
      date = this.addZero(date)
      month = this.addZero(month)
      if (this.holidayData[year]) {
        if (this.holidayData[year][month]) {
          if (this.holidayData[year][month][date]) {
            return this.holidayData[year][month][date]
          }
        }
      }
      return false
    },
    configToData: function () {
      let holidayTmp = {}
      this.holidayConfig.forEach((item) => {
        if (item.dateRange.indexOf('-') !== -1) {
          let [showYear, showMonth, showDate] = item.showDate.split('.')
          let [startDate, endDate] = item.dateRange.split('-')
          startDate = startDate.replace(/\./g, '-')
          endDate = endDate.replace(/\./g, '-')
          startDate = new Date(startDate)
          endDate = new Date(endDate)
          for (startDate; startDate <= endDate;) {
            let year = startDate.getFullYear().toString()
            let month = startDate.getMonth() + 1
            let date = startDate.getDate()
            date = this.addZero(date)
            month = this.addZero(month)
            if (!holidayTmp[year]) {
              holidayTmp[year] = {}
            }
            if (!holidayTmp[year][month]) {
              holidayTmp[year][month] = {}
            }
            let tmp = {
              isRest: item.isRest,
              name: parseInt(year) === parseInt(showYear) && parseInt(month) === parseInt(showMonth) && parseInt(date) === parseInt(showDate) ? item.showText : ''
            }
            holidayTmp[year][month][date] = tmp
            startDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
            console.log(startDate)
          }
        } else {
          let [year, month, date] = item.dateRange.split('.')
          if (!holidayTmp[year]) {
            holidayTmp[year] = {}
          }
          if (!holidayTmp[year][month]) {
            holidayTmp[year][month] = {}
          }
          let tmp = {
            isRest: item.isRest,
            name: item.showText
          }
          holidayTmp[year][month][date] = tmp
        }
      })
      this.holidayData = holidayTmp
    },
    addZero: function (val) {
      if (val > 9) {
        return val.toString()
      } else {
        return `0${val}`
      }
    }
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '2019-2020学年日历', leftShow: true, rightShow: false, leftLink: './mine'})
    this.configToData()
  }
}
</script>

<style scoped>
  .date{
    font-size: 15px;
  }
  .name{
    margin-top: 65%;
    color: #aaa;
    font-size: 9px;
  }
  .rest{
    position: absolute;
    color: #04be02 ;
    top: 3px;
    right: 3px;
    font-size: 10px;
  }
  .study{
    position: absolute;
    top: 3px;
    right: 3px;
    color: #EF4F4F ;
    font-size:10px;
  }
  .holiday{
    display: block;
    margin-top: 5px;
    color: #C0C4CC;
    font-size: 10px;
  }
  #calendar-page{
    background: #fff;
  }
</style>
<style>
  .el-calendar-table .el-calendar-day{
    height: 70px;
    position: relative;
  }
</style>
