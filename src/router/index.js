import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home/Home'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'

// 3. 二级路由

import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

// 2. 声明使用
Vue.use(Router)

// 3. 输出路由对象
export default new Router({
  // 3.1 配置一级路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        // 热门版块
        // 服饰版块
        { path: 'dress', component: Dress },
        // 鞋包版块
        { path: 'box', component: Box },
        // 母婴版块
        { path: 'mbaby', component: Mbaby },
        // 百货版块
        { path: 'general', component: General },
        // 食品版块
        { path: 'food', component: Food },
        // 内衣版块
        { path: 'shirt', component: Shirt },
        // 男装版块
        { path: 'man', component: Man },
        // 电器版块
        { path: 'ele', component: Ele }
      ]
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
