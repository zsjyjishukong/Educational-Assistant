<template>
  <div class="about-us-page">
    <yd-layout>
      <yd-navbar slot="navbar" title="关于我们">
        <router-link to="index/#mine" slot="left" style="cursor: pointer;">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <div class="logo">
        <img src="./static/logo.png" alt="" width="30%">
      </div>
      <div class="title">
        JY教务助手
      </div>
      <div class="describe">
        <p>
          我们是<b>掌上JY项目组</b>，来自于<b>原掌上建院网络技术部</b>，是河北建筑工程学院的<b>在校生以及校友</b>。
        </p>
        <p>
          本功能是我们项目组使用<b>开源项目并在其基础上进行开发而得</b>，开发经费来自于<b>广告收入</b>以及<b>各位的捐赠</b>。
        </p>
        <p>
          如果觉得我们的功能好用，对您有一定的帮助，请<b>打赏给我们</b>，方便我们继续提供更好的服务。
        </p>
      </div>
    </yd-layout>
  </div>
</template>

<script>
export default {
  name: 'aboutUs'
}
</script>

<style scoped>
  .about-us-page{
    text-align: center;
  }
  .logo{
    margin-top: 10%;
  }
  .title{
    margin-top: 3%;
    font-size: 0.4rem;
  }
  .describe{
    margin-top: 3%;
    padding: 2% 10%;
    font-size: 0.3rem;
    line-height: 0.5rem;
    text-align: left;
  }
  .describe>p{
    text-indent: 2em;
    margin-top: 2%;
  }
</style>
