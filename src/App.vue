<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
