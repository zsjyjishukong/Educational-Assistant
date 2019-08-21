<template>
  <div class="privacy-us-page">
    <yd-layout>
      <yd-navbar slot="navbar" title="隐私设置">
        <router-link to="index/mine" slot="left" style="cursor: pointer;">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <div class="describe">
        暂未开放，敬请期待
      </div>
    </yd-layout>
  </div>
</template>

<script>
export default {
  name: 'privacy'
}
</script>

<style scoped>
  .describe{
    margin-top: 20%;
    text-align: center;
    color: #ccc;
  }
</style>
