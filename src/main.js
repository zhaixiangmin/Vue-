import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routerConfig from './router.config'

Vue.config.productionTip = false;

Vue.use(VueRouter);
var router = new VueRouter(routerConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
