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
      <yd-icon name="warn-outline" style="font-size: small" @click.native="showTip()"></yd-icon>
      <span class="name">
        学院：信息管理系
      </span>
    </div>
    <yd-accordion>
      <yd-accordion-item title="2018-2019学年">
        <div style="padding: .24rem;">
          <p>花间一壶酒，独酌无相亲。</p>
          <p>举杯邀明月，对影成三人。</p>
          <p>月既不解饮，影徒随我身。</p>
          <p>暂伴月将影，行乐须及春。</p>
          <p>我歌月徘徊，我舞影零乱。</p>
          <p>醒时同交欢，醉后各分散。</p>
          <p>永结无情游，相期邈云汉。</p>
        </div>
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
    showTip: function () {
      this.$dialog.alert({mes: '绩点是由公式：绩点=∑（学分*绩点）/∑学分<br>计算而得，不含公共任意选修课，仅供参考！'})
    }
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
</style>
