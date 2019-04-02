<template>
  <div id="news">
    <h3>我是新闻</h3>
    <ul>
      <li v-for="val in news" :key="val">{{ val }}</li>
    </ul>
    {{ username }}
    <div @click="$emit('enlarge-text')">doneTodoCount: {{doneTodoCount}}</div>
    <input type="button" value="触发mutation" @click="mutate" />
    <input type="button" value="触发action" @click="action" />
    <!--<input type="button" value="触发action2" @click="action2" />-->
    <!--<input type="button" value="触发action3" @click="action3" />-->
    <input type="button" value="触发action2" @click="action2" />
    <input type="button" value="触发add" @click="add" />
    <input type="button" value="触发actionA" @click="actionA" />
    <input type="button" value="触发actionB" @click="actionB" />
    <input type="button" value="触发actionC" @click="actionC" />
    <input type="button" value="触发actionD" @click="actionD" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
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
    },
    methods: {
      mutate: function (event) {
        console.log('mutate', event);
        this.$store.commit('increment')
      },
      action: function (event) {
        console.log('action', event);
        this.$store.dispatch('increment')
      },
      // action2: function (event) {
      //   console.log('action', event);
      //   this.$store.dispatch('action2')
      // },
      // action3: function (event) {
      //   console.log('action', event);
      //   this.$store.dispatch('action3')
      // },
      // 将`this.action2()` 映射为 `this.$store.dispatch('action2')`
      ...mapActions(['action2']),
      // 将`this.add()` 映射为 `this.$store.dispatch('action3')`
      ...mapActions({
        add: 'action3'
      }),
      actionA: function () {
        this.$store.dispatch('actionA').then(() => {
          console.log('actionA');
        })
      },
      actionB: function () {
        this.$store.dispatch('actionB');
      },
      actionC: function () {
        this.$store.dispatch('actionC');
      },
      actionD: function () {
        this.$store.dispatch('actionD');
      }
    }
  }
</script>

<style scoped>

</style>