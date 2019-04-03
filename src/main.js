import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import { mapState } from 'vuex'
import { SOME_MUTATION } from './js/mutation-types'

import App from './App.vue'
import routerConfig from './router.config'

import moduleA from './module/moduleA'

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
    },
    increment2 (state, n) {
      state.count += n;
    },
    increment3 (state, payload) {
      console.log('mutations increment3 payload', payload)
      state.count += payload.amount;
    },
    ['SOME_MUTATION'] (state) {
      console.log('mutations SOME_MUTATION', SOME_MUTATION);
      state.count += 50;
    },
    mu1 (state) {
      console.log('mu1')
    },
    mu2 (state) {
      console.log('mu2')
    },
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
  },
  actions: {
    action (context) {
      context.commit('increment');
    },
    action2 ({commit}) {
      commit('increment');
    },
    action3 ({commit}) {
      setTimeout( () => {
        commit('increment');
      }, 1000);
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout( () => {
          commit('mu1');
          resolve();
        }, 1000);
      });
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('mu2')
      });
    },
    getData () {

    },
    async actionC ({ commit }) {
      async function gotData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      }
      commit('mu1', await gotData());
    },
    async actionD ({ dispatch, commit }) {
      dispatch('actionC'); // 等待 actionA 完成
      commit('mu2');
    }
  },
  modules: {
    moduleA: moduleA
  }
});

// store.commit('increment');
// store.commit('increment2', 10);
// store.commit('increment3', {
// store.commit({
//   type: 'increment3',
//   amount: 30
// });
store.commit(SOME_MUTATION);
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