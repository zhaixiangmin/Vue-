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

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach to', to);
  console.log('router.beforeEach from', from);
  var match = to.matched.some(function (record) {
    // record => record.meta.requiresAuth
    console.log('router.beforeEach record', record);
    return record.meta.requiresAuth;
  });
  console.log('router.beforeEach match', match);
  if(match) {
    console.log('router.beforeEach to.matched.some');
  }
  next();
  // if(to.path == '/a') {
  //   next('/home');
  // }else {
  //   next();
  // }
  // else {
  //   next(new Error('调用错误'));
  // }
});


// 全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('router.beforeResolve to', to);
  console.log('router.beforeResolve from', from);
  next();
});

// 全局后置钩子
router.afterEach((to, from) => {
  console.log('router.afterEach to', to);
  console.log('router.afterEach from', from);
});

router.onError(function (msg) {
  console.log('router.onError msg', msg);
});