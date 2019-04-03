export default {
  state: {
    count: 5
  },
  mutations: {
    increment (state) {
      // 这里的`state`对象是模块的局部状态
      state.count++;
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2;
    }
  }
}