// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
//重置样式
import './assets/style/reset.css'
//设置边框为1
import './assets/style/border.css'
//iconfont图标
import './assets/style/iconfont.css'

Vue.config.productionTip = false;
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
