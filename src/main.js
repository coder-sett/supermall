import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 懒加载
Vue.use(LazyLoad, {
  // 占位图
  loading: require('assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
