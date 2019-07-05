<template>
  <div id="app" style="height: 100%">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
}
.yd-scrollview:after{
  height: 0;
}
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
