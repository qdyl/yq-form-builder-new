import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import { Col, Row,Button } from 'element-ui';
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  window.console.log(to.path)
  next()
  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
