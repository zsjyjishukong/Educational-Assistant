<template>
  <div id="schedule-body">
    <div class="blur" style="height: 100%">
      <div class="schedule">
        <yd-flexbox class="title">
          <yd-flexbox-item>
            12周<br>
            12月
          </yd-flexbox-item>
          <yd-flexbox-item>
            周一<br>
            1日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周二<br>
            2日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周三<br>
            3日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周四<br>
            4日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周五<br>
            5日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周六<br>
            6日
          </yd-flexbox-item>
          <yd-flexbox-item>
            周日<br>
            7日
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body" v-for="i in 4" :key="i">
          <yd-flexbox-item>
            {{(2*i-1)}}-{{2*i}}
          </yd-flexbox-item>
          <yd-flexbox-item v-for="j in 6" :key="j" :style="{background: classes[j-1][i-1].bgcolor ? classes[j-1][i-1].bgcolor : ''}">
            <div class="class-detail" >
              <div class="class-name">
                {{classes[j-1][i-1].name}}
              </div>
              <div class="class-teacher">
                {{classes[j-1][i-1].teacher}}
              </div>
              <div class="class-place">
                {{classes[j-1][i-1].place}}
              </div>
            </div>
          </yd-flexbox-item>
        </yd-flexbox>
      </div>
    </div>
  </div>
</template>

<script>
import {getSchedule} from '../../../api/index'

export default {
  name: 'schedule-body',
  data () {
    return {
      classes: [
        // 周一 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周二 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周三 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周四 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周五 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周六 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ],
        // 周日 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'},
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,0,0,0)'}
        ]
      ],
      year: '2019-2020',
      term: '1'
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
      let res = await getSchedule('20173400117', '130132wzf', this.year, this.term)
      while ('error' in res) {
        res = await getSchedule('20173400117', '130132wzf', this.year, this.term)
      }
      this.handleClasses(res.schedule)
    },
    fatherQuerySchedule: function (year, term) {
      this.year = year
      this.term = term
      console.log('daozhelile')
      this.querySchedule()
    },
    handleClasses: function (obj) {
      let classArray = []
      for (let i of obj) {
        let tmpArray = []
        for (let j of i) {
          let tmp = {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,255,255,0)'}
          if (j.length > 0) {
            let data = j[0]
            tmp.name = this.limitTextLength(data.name, 12)
            tmp.teacher = data.teacher
            tmp.place = data.place
            tmp.bgcolor = data.color
          }
          tmpArray.push(tmp)
        }
        classArray.push(tmpArray)
      }
      this.classes = classArray
      this.$dialog.loading.close()
    }
  },
  mounted () {
    this.querySchedule()
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
}
.body .yd-flexbox-item:nth-child(1){
  height: 2.66rem;
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
    line-height: 15px;
  }
</style>
