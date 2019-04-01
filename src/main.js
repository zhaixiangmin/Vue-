import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import { mapState } from 'vuex'

import App from './App.vue'
import routerConfig from './router.config'

Vue.config.productionTip = false;

Vue.use(VueRouter);
var router = new VueRouter(routerConfig);

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'text1', done: true },
      { id: 2, text: 'text2', done: false },
    ]
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodoCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id == id);
    }
  }
});

store.commit('increment');
console.log(store.state.count);

new Vue({
  router,
  store,
  data: {
    localCount: 3
  },
  // computed: mapState({
  //   count: state => state.count,
  //   // 等同于 'state => state.count'
  //   countAlias: 'count',
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount;
  //   }
  // }),
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