import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from "./stores"
import '@/requests/http'

import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import "@/assets/css/common.css"
// import "@/assets/css/iconfont.css"

//移动框架引入加载
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  //注入到根实例中
  store,
  router,
  render: h => h(App)
}).$mount('#app')
