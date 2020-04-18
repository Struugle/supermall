import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'


Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
