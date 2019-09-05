<template>
  <div class="privacy-us-page">
      <div class="describe">
        暂未开放，敬请期待
      </div>
  </div>
</template>

<script>
export default {
  name: 'privacy',
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
