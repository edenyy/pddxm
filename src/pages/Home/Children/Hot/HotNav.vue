<template>
  <div class="hot-nav">
    <!--滚动区域-->
    <div class="hot-nav-content"
         v-if="homenav.length > 0">
      <div class="nav-content-inner">
        <a class="inner-item"
           v-for="(nav, index) in homenav"
           :key="index">
          <img :src="nav.iconurl"
               alt="">
          <span>{{nav.icontitle}}</span>
        </a>
      </div>
    </div>
    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner"
           :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HotNav',
  data () {
    return {
      // 1. 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 2. 滚动内容的宽度
      scrollContentW: 720,
      // 3. 滚动条背景的长度
      bgBarW: 100,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0
    }
  },
  computed: {
    ...mapState(['homenav']),

    innerBarStyle () {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  },
  mounted () {
    this.getBottomBarWidth()
    this.bindEvent()
  },
  methods: {
    // 获取滚动条的长度
    getBottomBarWidth () {
      const { bgBarW, screenW, scrollContentW } = this
      this.barXWidth = bgBarW * (screenW / scrollContentW)
    },
    // 移动端事件监听
    bindEvent () {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false)
      this.$el.addEventListener('touchmove', this.handleTouchMove, false)
      this.$el.addEventListener('touchend', this.handleTouchEnd, false)
    },
    // 开始触摸
    handleTouchStart (event) {
      console.log(event.touches)
      // 1. 获取第一个触点
      let touch = event.touches[0]
      // 2.求出起始点
      this.startX = Number(touch.pageX)
      // console.log(this.startX);
    },
    // 开始移动
    handleTouchMove () {
      // console.log('开始移动');
      // 1. 获取第一个触点
      let touch = event.touches[0]
      // 2. 求出移动的距离
      let moveWidth = Number(touch.pageX) - this.startX
      // console.log(moveWidth);
      // 3. 求出滚动条走的距离
      this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag)

      // 4. 边界值处理
      if (this.barMoveWidth <= 0) { // 左边
        this.barMoveWidth = 0
      } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) { // 右边
        this.barMoveWidth = this.bgBarW - this.barXWidth
      }
    },
    // 结束触摸
    handleTouchEnd () {
      console.log('结束触摸')
      this.endFlag = this.barMoveWidth
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import 'stylus/hotnav.styl'
</style>
