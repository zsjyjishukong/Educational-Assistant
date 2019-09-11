<template>
  <div id="calendar-page">
    print your code here
  </div>
</template>
<script>
export default {
  name: 'calendar',
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    this.$emit('changeNavAndTab', {tabShow: false, showId: 2, title: '日历', leftShow: true, rightShow: false, leftLink: './mine'})
  }
}
</script>

<style scoped>
</style>
