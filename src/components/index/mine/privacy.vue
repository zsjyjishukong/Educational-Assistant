<template>
  <page-template title="隐私设置" :tab-show="false">
    <router-link to="/index/mine" slot="left">
      <yd-navbar-back-icon></yd-navbar-back-icon>
    </router-link>
    <div class="privacy-us-page" slot="body">
      <div class="describe">
        暂未开放，敬请期待
      </div>
    </div>
  </page-template>
</template>

<script>
import pageTemplate from '../../common/page-temlate'
export default {
  name: 'privacy',
  components: {
    pageTemplate
  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '隐私设置', leftShow: true, rightShow: false, leftLink: './mine'})
  }
}
</script>

<style scoped>
  .describe{
    margin-top: 20%;
    text-align: center;
    color: #ccc;
  }
</style>
