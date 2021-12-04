//入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import {Button} from 'mint-ui'
import './Mock/Mock' //加载mockjs
import Vuelazyload from 'vue-lazyload'
import loading from '../public/images//loading.gif'
import './Fiters/filter'//加载过滤器
//注册全局组件标签
Vue.component(Button.name,Button)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelazyload,{//内部自定义了一个指令lazy
  loading
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
