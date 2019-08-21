<template>
  <div class="reward-us-page">
    <yd-layout>
      <yd-navbar slot="navbar" title="捐助我们">
        <router-link to="index/mine" slot="left" style="cursor: pointer;">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <div class="logo">
        <img src="./static/shoukuanma.png" alt="" width="30%">
      </div>
      <div class="describe">
        如果您觉得好用，请长按识别二维码捐助我们
      </div>
    </yd-layout>
  </div>
</template>

<script>
export default {
  name: 'rewardUs'
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
