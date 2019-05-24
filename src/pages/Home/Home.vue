<template>
  <div>
    <ly-tab v-model="selectedId"
            :items='items'
            :options='options'></ly-tab>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      selectedId: 0,
      items: [{
        'label': '热门'
      }, {
        'label': '服饰'
      }, {
        'label': '鞋包'
      }, {
        'label': '母婴'
      }, {
        'label': '百货'
      }, {
        'label': '食品'
      }, {
        'label': '内衣'
      }, {
        'label': '热门'
      }, {
        'label': '热门'
      }],
      options: {
        activeColor: '#e9232c'
      }
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.home
  background #f5f5f5
  width 100%
  height 100%
  .fix
    position fixed
    left 0
    top 0
    z-index 998
</style>
