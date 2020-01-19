<template>
  <page-template title="打赏我们" :tab-show="false">
    <router-link to="/index/mine" slot="left">
      <yd-navbar-back-icon></yd-navbar-back-icon>
    </router-link>
    <div class="reward-us-page" slot="body">
      <div class="logo">
        <img src="./static/shoukuanma.png" alt="" width="30%">
      </div>
      <div class="describe">
        如果您觉得好用，请长按识别二维码捐助我们
      </div>
    </div>
  </page-template>
</template>

<script>
import pageTemplate from '../../common/page-temlate'
export default {
  name: 'rewardUs',
  components: {
    pageTemplate
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '捐助我们', leftShow: true, rightShow: false, leftLink: './mine'})
  }
}
</script>

<style scoped>
  .reward-us-page{
    text-align: center;
  }
  .logo{
    margin-top: 10%;
  }
  .describe{
    margin-top: 3%;
    padding: 2% 10%;
    font-size: 0.4rem;
    line-height: 0.6rem;
    text-align: center;
  }
</style>
