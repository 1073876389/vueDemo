// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件 需要哪个组件 引入哪个组件
import Vue from 'vue'
import test from './test'
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#test',
//   components: { test },
//   template: '<test/>'
// })
