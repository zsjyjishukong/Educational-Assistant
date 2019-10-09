<template>
  <div id="calendar-page" style="height: 100%">
      <el-calendar style="text-align: center;">
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
      holidayData: {},
      holidayConfig: [
        {
          dateRange: '2019.9.13-2019.9.15',
          isRest: true,
          showDate: '2019.9.13',
          showText: '中秋'
        }, {
          dateRange: '2019.9.30-2019.10.7',
          isRest: true,
          showDate: '2019.10.1',
          showText: '国庆'
        }, {
          dateRange: '2019.9.28-2019.9.29',
          isRest: false,
          showDate: '2019.9.28',
          showText: '补课'
        }, {
          dateRange: '2020.1.1',
          isRest: true,
          showText: '元旦'
        }, {
          dateRange: '2020.1.13-2020.2.23',
          isRest: true,
          showDate: '2020.1.13',
          showText: '寒假'
        }, {
          dateRange: '2020.4.4-2020.4.5',
          isRest: true,
          showDate: '2020.4.4',
          showText: '清明节'
        }, {
          dateRange: '2020.5.1-2020.5.3',
          isRest: true,
          showDate: '2020.5.1',
          showText: '劳动节'
        }, {
          dateRange: '2020.7.13-2020.8.23',
          isRest: true,
          showDate: '2020.7.13',
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
    },
    configToData: function () {
      let holidayTmp = {}
      this.holidayConfig.forEach((item) => {
        if (item.dateRange.indexOf('-') !== -1) {
          let [showYear, showMonth, showDate] = item.showDate.split('.')
          let [startDate, endDate] = item.dateRange.split('-')
          startDate = new Date(startDate)
          endDate = new Date(endDate)
          for (startDate; startDate <= endDate;) {
            let year = startDate.getFullYear()
            let month = startDate.getMonth() + 1
            let date = startDate.getDate()
            if (!holidayTmp[year]) {
              holidayTmp[year] = {}
            }
            if (!holidayTmp[year][month]) {
              holidayTmp[year][month] = {}
            }
            let tmp = {
              isRest: item.isRest,
              name: year === parseInt(showYear) && month === parseInt(showMonth) && date === parseInt(showDate) ? item.showText : ''
            }
            holidayTmp[year][month][date] = tmp
            startDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
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
    }
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '2019-2020学年校历', leftShow: true, rightShow: false, leftLink: './mine'})
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
    font-size: 10px;
  }
  .rest{
    float: right;
    color: #04be02 ;
    margin-top: -5px;
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
    font-size: 10px;
  }
  #calendar-page{
    background: #fff;
  }
</style>
<style>
  .el-calendar-table .el-calendar-day{
    height: 70px;
  }
</style>
