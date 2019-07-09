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
        <yd-flexbox class="body">
          <yd-flexbox-item>
            1-2
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[0][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[0][0].name}}
              </div>
              <div class="class-teacher">
                {{classes[0][0].teacher}}
              </div>
              <div class="class-weeks">
                {{classes[0][0].weeks}}
              </div>
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[1][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[1][0].name}}
              </div>
              <div class="class-teacher">
                {{classes[1][0].teacher}}
              </div>
              <div class="class-weeks">
                {{classes[1][0].weeks}}
              </div>
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[2][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[2][0].name}}
              </div>
              {{classes[2][0].teacher}}<br>
              {{classes[2][0].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[3][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[3][0].name}}
              </div>
              {{classes[3][0].teacher}}<br>
              {{classes[3][0].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[4][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[4][0].name}}
              </div>
              {{classes[4][0].teacher}}<br>
              {{classes[4][0].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[5][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[5][0].name}}
              </div>
              {{classes[5][0].teacher}}<br>
              {{classes[5][0].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[6][0].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[6][0].name}}
              </div>
              {{classes[6][0].teacher}}<br>
              {{classes[6][0].weeks}}
            </div>
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            3-4
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[0][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[0][1].name}}
              </div>
              {{classes[0][1].teacher}}<br>
              {{classes[0][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[1][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[1][1].name}}
              </div>
              {{classes[1][1].teacher}}<br>
              {{classes[1][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[2][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[2][1].name}}
              </div>
              {{classes[2][1].teacher}}<br>
              {{classes[2][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[3][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[3][1].name}}
              </div>
              {{classes[3][1].teacher}}<br>
              {{classes[3][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[4][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[4][1].name}}
              </div>
              {{classes[4][1].teacher}}<br>
              {{classes[4][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[5][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[5][1].name}}
              </div>
              {{classes[5][1].teacher}}<br>
              {{classes[5][1].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[6][1].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[6][1].name}}
              </div>
              {{classes[6][1].teacher}}<br>
              {{classes[6][1].weeks}}
            </div>
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            5-6
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[0][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[0][2].name}}
              </div>
              {{classes[0][2].teacher}}<br>
              {{classes[0][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[1][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[1][2].name}}
              </div>
              {{classes[1][2].teacher}}<br>
              {{classes[1][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[2][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[2][2].name}}
              </div>
              {{classes[2][2].teacher}}<br>
              {{classes[2][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[3][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[3][2].name}}
              </div>
              {{classes[3][2].teacher}}<br>
              {{classes[3][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[4][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[4][2].name}}
              </div>
              {{classes[4][2].teacher}}<br>
              {{classes[4][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[5][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[5][2].name}}
              </div>
              {{classes[5][2].teacher}}<br>
              {{classes[5][2].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[6][2].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[6][2].name}}
              </div>
              {{classes[6][2].teacher}}<br>
              {{classes[6][2].weeks}}
            </div>
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            7-8
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[0][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[0][3].name}}
              </div>
              {{classes[0][3].teacher}}<br>
              {{classes[0][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[1][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[1][3].name}}
              </div>
              {{classes[1][3].teacher}}<br>
              {{classes[1][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[2][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[2][3].name}}
              </div>
              {{classes[2][3].teacher}}<br>
              {{classes[2][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[3][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[3][3].name}}
              </div>
              {{classes[3][3].teacher}}<br>
              {{classes[3][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[4][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[4][3].name}}
              </div>
              {{classes[4][3].teacher}}<br>
              {{classes[4][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[5][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[5][3].name}}
              </div>
              {{classes[5][3].teacher}}<br>
              {{classes[5][3].weeks}}
            </div>
          </yd-flexbox-item>
          <yd-flexbox-item :style="{background: classes[6][3].bgcolor}">
            <div class="class-detail">
              <div class="class-name">
                {{classes[6][3].name}}
              </div>
              {{classes[6][3].teacher}}<br>
              {{classes[6][3].weeks}}
            </div>
          </yd-flexbox-item>
        </yd-flexbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'schedule-body',
  data () {
    return {
      classes: [
        // 周一 1-4 节
        [
          {name: '数据库原理与应用', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周二 1-4 节
        [
          {name: '', teacher: '', weeks: '', bgcolor: 'rgba(255,255,255,0)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周三 1-4 节
        [
          {name: 'shujuku', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周四 1-4 节
        [
          {name: 'shujuku', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周五 1-4 节
        [
          {name: 'shujuku', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周六 1-4 节
        [
          {name: 'shujuku', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ],
        // 周日 1-4 节
        [
          {name: 'shujuku', teacher: '李艳艳', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啦啦啦', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '顶顶顶', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'},
          {name: 'shujuku', teacher: '啊啊啊', weeks: '1-6', bgcolor: 'rgba(255,0,0,0.5)'}
        ]
      ]
    }
  }
}
</script>

<style scoped>
#schedule-body{
  height: 100%;
  background-image: url("/static/images/scorebg.jpg");
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
  background: #ccc;
  height: 2.66rem;
  vertical-align: center;
  line-height: 2.61rem;
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
  /*line-height: 2.7rem;*/
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
</style>
