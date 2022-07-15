// 该文件是整个项目的入口文件
// 引入vue 脚手架已经把这些第三方库下载了 就在node的依赖包里面
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建vue实例对象 ---vm
new Vue({
  // 将App组件放入容器中
  // render: h => h(App),
  // 以防引用了残缺版的vue 解析不了模板
  // 精简代码 因为没有用到this 就可以写箭头 用引号表示创建了h1元素
  render(createElement) {
    return createElement('h1','nihao')
  },
  render:createElement=>createElement('h1','nihao')
})
// }).$mount('#app')
// $mount的函数在Vue的原型链上，Vue的任何实例都可以直接调用这个方法
// Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。new Vue时，el和$mount并没有本质上的不同。
// 使用原生的querySelector（查找第一个匹配的DOM元素)来查找dom，如果没有找到则新建一个div返回；若el自身就是一个dom元素，直接返回。
// 但是，el不能是body或者html，原因是vue在挂载是会将对应的dom对象替换成新的div，但body和html是不适合替换的。
// return mount.call(this, el, hydrating)