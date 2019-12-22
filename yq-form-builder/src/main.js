import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false


import { Button, Select ,Col,Row} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Col)
Vue.use(Row)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
