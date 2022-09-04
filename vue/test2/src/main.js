import Vue from 'vue'
import App from './App.vue'

// 引入vuex 因为在使用store之前就要有vuex 但是import 不按照顺序 都是先把import汇总在最上方 这是脚手架解析import的顺序
// import Vuex from 'vuex'
// Vue.use(Vuex)
// 引入store 如果有index可以不用写到index那一层
import store from './store/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
