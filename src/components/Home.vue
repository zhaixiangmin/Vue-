<template>
  <div id="home">
    <h3>我是主页</h3>
    <h4>store: {{ count }}</h4>
    <ul>
      <li v-for="doneTodo in doneTodos" :key="doneTodo.id">{{ doneTodo }}</li>
    </ul>
    <div>getTodoById(2): {{getTodoById}}</div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    computed: {
      count () {
        return this.$store.state.count;
      },
      doneTodos () {
        return this.$store.getters.doneTodos;
      },
      getTodoById () {
        return this.$store.getters.getTodoById(2);
      }
    },
    // 在渲染该组件的对应路由被 confirm 前调用
    // 组件实例还没被创建，不能用组件实例 this
    beforeRouteEnter (to, from, next) {
      console.log('component beforeRouteEnter to', to);
      console.log('component beforeRouteEnter from', from);
      next(vm => {
        console.log('beforeRouteEnter vm', vm)
      });
    },
    beforeRouteUpdate (to, from, next) {
      console.log('component beforeRouteUpdate to', to);
      console.log('component beforeRouteUpdate from', from);
      next();
    },
    beforeRouteLeave (to, from, next) {
      console.log('component beforeRouteLeave to', to);
      console.log('component beforeRouteLeave from', from);
      next();
    }
  }
</script>