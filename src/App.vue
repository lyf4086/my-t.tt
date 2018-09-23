<template>
  <div id="app">
    <router-view name="top"></router-view>
    <keep-alive>
      <router-view class="center" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view class="center"  v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
import '@/assets/style/total.css';
export default {
  name: 'App'
}
</script>

<style>


</style>
