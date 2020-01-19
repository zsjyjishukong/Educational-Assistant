<template>
  <yd-layout>
    <yd-navbar slot="navbar" :title="title" id="navbar">
      <slot name="left" slot="left"></slot>
      <slot name="right" slot="right"></slot>
    </yd-navbar>
    <div id="index-body" :style="{height: tabShow ? 'calc(100% - 1.15rem)' : '100%'}">
      <slot name="body"></slot>
    </div>
    <yd-tabbar v-if="tabShow">
      <yd-tabbar-item title="成绩查询" link="/index/score" :active="actived === 0 ? true : false">
        <yd-icon name="feedback" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="课表查询" link="/index/schedule" :active="actived === 1 ? true : false">
        <yd-icon name="location" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="/index/mine" :active="actived === 2 ? true : false">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
export default {
  name: 'page-temlate',
  props: {
    title: {
      type: String,
      default: 'JY教务助手'
    },
    tabShow: {
      type: Boolean,
      default: true
    },
    actived: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
#index-body{
  overflow-y: auto;
}
</style>
