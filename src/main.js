// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.css"
import store from './store'
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

// 移动端高清屏适配方案
import './rem.js'


Vue.use(VueResource)
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
