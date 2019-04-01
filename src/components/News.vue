<template>
  <div id="news">
    <h3>我是新闻</h3>
    <ul>
      <li v-for="val in news" :key="val">{{ val }}</li>
    </ul>
    {{ username }}
    <div>doneTodoCount: {{doneTodoCount}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "NewsTest",
    computed: {
        username () {
          return this.$route.params.username;
        },
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters(['doneTodoCount']),
      },

    // computed: mapGetters(['doneTodoCount']),
    data() {
      return {
        news: [
          '111111111',
          '222222222',
          '333333333',
          '444444444',
        ]
      }
    }
  }
</script>

<style scoped>

</style>