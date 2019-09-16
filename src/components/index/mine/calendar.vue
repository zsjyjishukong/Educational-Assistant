<template>
  <div id="calendar-page" style="height: 100%">
      <el-calendar style="text-align: center">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          {{isRest(date)}}
          <a class="date">{{ date.getDate()}}</a>
          <a v-if="isShowRest" class="rest" >休</a>
          <a v-else=""></a>
          <br>
          <a class="holiday">{{isHoliday(date)}}</a>
        </template>
      </el-calendar>
  </div>
</template>
<script>
// import CalendarData from '../../../api/CalendarData'
export default {
  name: 'calendar',
  props: {
    msg: String
  },
  data () {
    return {
      isShowRest: ''
    }
  },
  methods: {
    isHoliday: function (date) {
      let dada = date.getDate()
      let month = date.getMonth()
      let year = date.getYear()
      if (month === 9 && dada === 1) {
        return '国庆节'
      }
      if (month === 4 && dada === 1) {
        return '劳动节'
      }
      if (year === 119) {
        if (month === 8 && dada === 13) {
          return '中秋'
        } else {
          return ''
        }
      } else if (year === 120) {
        if (month === 0 && dada === 1) {
          return '元旦'
        } else if (month === 3 && dada === 4) {
          return '清明节'
        } else if (month === 5 && dada === 25) {
          return '端午节'
        } else {
          return ''
        }
      }
    },
    isRest: function (date) {
      let day = date.getDay()
      let dada = date.getDate()
      let month = date.getMonth()
      let year = date.getYear()
      if (year === 119 && month >= 7) {
        if (day === 0 || day === 6) {
          this.isShowRest = true
          this.isShowStudy = false
        } else if (month === 8 && dada === 13) {
          this.isShowRest = true
          this.isShowStudy = false
        } else if (month === 9 && (dada >= 1 && dada <= 6)) {
          this.isShowRest = true
          this.isShowStudy = false
        } else {
          this.isShowRest = false
        }
        if (month === 8 && (dada >= 28 && dada <= 29)) {
          this.isShowRest = false
          this.isShowStudy = false
        }
      } else if (year === 120 && month <= 7) {
        if (day === 0 || day === 6) {
          this.isShowRest = true
          this.isShowStudy = false
        } else if (month === 0 && dada === 1) {
          this.isShowRest = true
        } else if (month === 4 && dada === 1) {
          this.isShowRest = true
        } else if (month === 5 && dada === 25) {
          this.isShowRest = true
        } else if (month === 0 && dada >= 13) {
          this.isShowRest = true
        } else if (month === 1 && dada <= 23) {
          this.isShowRest = true
        } else if (month === 6 && dada >= 13) {
          this.isShowRest = true
        } else if (month === 7 && dada <= 23) {
          this.isShowRest = true
        } else {
          this.isShowRest = false
          this.isShowStudy = false
        }
      } else {
        this.isShowRest = false
        this.isShowStudy = false
      }
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
