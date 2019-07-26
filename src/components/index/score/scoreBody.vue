<template>
  <div id="score-body">
    <div class="jd">
      <span class="name">
        姓名：齐昊宇
      </span>
      <yd-countup
        endnum="3.4556"
        duration="3"
        decimals="2"
        separator=","
        prefix="总绩点："
      ></yd-countup>
      <span class="name">
        学院：信息管理系
      </span>
    </div>
    <yd-accordion>
      <yd-accordion-item title="2018-2019学年">
        <div style="text-align: center;">第一学期</div>
        <table class="score-table" cellspacing="0">
          <tr class="first-tr">
            <td>课程</td>
            <td>学分</td>
            <td>平时成绩</td>
            <td>期末成绩</td>
            <td>总成绩</td>
          </tr>
          <tr>
            <td>大学体育D</td>
            <td>2.0</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>思想道德修养与法律基础</td>
            <td>2.0</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </table>
      </yd-accordion-item>
      <yd-accordion-item title="2017-2018学年">
        <div style="padding: .24rem;">
          <p>岱宗夫如何，齐鲁青未了。</p>
          <p>造化钟神秀，阴阳割昏晓。</p>
          <p>荡胸生层云，决眦入归鸟。</p>
          <p>会当凌绝顶，一览众山小。</p>
        </div>
      </yd-accordion-item>
      <yd-accordion-item title="2016-2017学年">
        <div style="padding: .24rem;">
          <p>言入黄花川，每逐青溪水。</p>
          <p>随山将万转，趣途无百里。</p>
          <p>声喧乱石中，色静深松里。</p>
          <p>漾漾泛菱荇，澄澄映葭苇。</p>
          <p>我心素已闲，清川澹如此。</p>
          <p>请留盘石上，垂钓将已矣。</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
  </div>
</template>

<script>
export default {
  name: 'scoreBody',
  methods: {
  }
}
</script>

<style scoped>
  #score-body{
    padding-top: 0.3rem;
  }
  .jd{
    text-align: center;
    margin-bottom: 0.3rem;
    color: #04be02;
  }
  .name{
    margin: .2rem;
  }
  .score-table{
    margin: auto;
    width: 100%;
    border-top: 1px solid #0bb20c;
    border-bottom: 1px solid #0bb20c;
  }
  .score-table th, .score-table td{
    text-align: center;
  }
  .first-tr td{
    border-bottom: 1px solid #0bb20c;
    mso-cellspacing: 0;
  }
</style>
