<template>
  <div id="schedule-body">
    <div class="blur" style="height: 100%">
      <div class="schedule">
        <yd-flexbox class="title">
          <yd-flexbox-item>
            12月<br>
            12周
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
          <yd-flexbox-item>
            1
          </yd-flexbox-item>
          <yd-flexbox-item>
            2
          </yd-flexbox-item>
          <yd-flexbox-item>
            3
          </yd-flexbox-item>
          <yd-flexbox-item>
            4
          </yd-flexbox-item>
          <yd-flexbox-item>
            5
          </yd-flexbox-item>
          <yd-flexbox-item>
            6
          </yd-flexbox-item>
          <yd-flexbox-item>
            7
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            3-4
          </yd-flexbox-item>
          <yd-flexbox-item>
            1
          </yd-flexbox-item>
          <yd-flexbox-item>
            2
          </yd-flexbox-item>
          <yd-flexbox-item>
            3
          </yd-flexbox-item>
          <yd-flexbox-item>
            4
          </yd-flexbox-item>
          <yd-flexbox-item>
            5
          </yd-flexbox-item>
          <yd-flexbox-item>
            6
          </yd-flexbox-item>
          <yd-flexbox-item>
            7
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            5-6
          </yd-flexbox-item>
          <yd-flexbox-item>
            1
          </yd-flexbox-item>
          <yd-flexbox-item>
            2
          </yd-flexbox-item>
          <yd-flexbox-item>
            3
          </yd-flexbox-item>
          <yd-flexbox-item>
            4
          </yd-flexbox-item>
          <yd-flexbox-item>
            5
          </yd-flexbox-item>
          <yd-flexbox-item>
            6
          </yd-flexbox-item>
          <yd-flexbox-item>
            7
          </yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="body">
          <yd-flexbox-item>
            7-8
          </yd-flexbox-item>
          <yd-flexbox-item>
            1
          </yd-flexbox-item>
          <yd-flexbox-item>
            2
          </yd-flexbox-item>
          <yd-flexbox-item>
            3
          </yd-flexbox-item>
          <yd-flexbox-item>
            4
          </yd-flexbox-item>
          <yd-flexbox-item>
            5
          </yd-flexbox-item>
          <yd-flexbox-item>
            6
          </yd-flexbox-item>
          <yd-flexbox-item>
            7
          </yd-flexbox-item>
        </yd-flexbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'schedule-body'
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
}
.schedule{
  color: #eee;
}
.title{
  background: #777;
  padding: 0.1rem 0;
}
.body{

}
.body .yd-flexbox-item:nth-child(1){
  background: #ccc;
  height: 2.615rem;
  vertical-align: center;
  line-height: 2.6rem;
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
  height: 2.4rem;
  line-height: 2.6rem;
  width: 80%;
  margin-left: 0.05rem;
}
</style>
