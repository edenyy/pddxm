<template>
  <div class="tab">
    <router-link tag="div"
                 to='/home'
                 :class="{active:$route.path==='/home'}"
                 class="item"><img src="../../static/img/icon_home.png"
           alt=""><span>首页</span></router-link>
    <div class="item"><img src="../../static/img/icon_intro.png"
           alt="">推荐</div>
    <div class="item"><img src="../../static/img/icon_search.png"
           alt="">搜索</div>
    <router-link tag="div"
                 to='/chat'
                 :class="{active:$route.path==='/chat'}"
                 class="item"><img src="../../static/img/icon_chat.png"
           alt="">聊天</router-link>
    <router-link tag="div"
                 to='/me'
                 :class="{active:$route.path==='/me'}"
                 class="item"><img src="../../static/img/icon_mine.png"
           alt="">我的</router-link>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.tab
  position fixed
  background #ffffff
  bottom 0
  left 0
  right 0
  display flex
  justify-content space-evenly
  font-size 12px
  .active
    color red
  .item
    display flex
    flex-direction column
    align-items center
    img
      width 30px
</style>
