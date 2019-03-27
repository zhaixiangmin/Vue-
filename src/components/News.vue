<template>
  <div id="news">
    <h3>我是新闻</h3>
    <ul>
      <li v-for="val in news" :key="val">{{ val }}</li>
    </ul>
    {{ username }}
  </div>
</template>

<script>
  export default {
    name: "NewsTest",
    computed: {
      username () {
        return this.$route.params.username;
      }
    },
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