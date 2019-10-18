import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'  //cnpm install axios -S 安装 (-S运行依赖  -D编译依赖)
import ElementUI from 'element-ui'; //npm install element-ui -S 安装 (-S运行依赖  -D编译依赖)
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//自定义全局属性
axios.defaults.withCredentials=true //跨域访问session
Vue.prototype.$axios=axios  //全局属性

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
