<template>
  <div id="app">
    {{ msg }}
    <ul>
      <li><router-link to="/home">主页</router-link></li>
      <li><router-link to="/news">新闻</router-link></li>
    </ul>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      msg: '这是公共头部'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
