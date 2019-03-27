<template>
  <div id="app">
    {{ msg }}
    <ul>
      <li><router-link to="/home">主页</router-link></li>
      <li><router-link to="/news">新闻</router-link></li>
      <!--this.$router.push 规则也适用于 router-link 组件的 to 属性-->
      <li><router-link :to="{ name: 'user', params: { id: 'private' } }">to测试</router-link></li>
      <li><router-link to="/user/123?name=456">用户</router-link></li>
      <li><router-link to="/settings">settings</router-link></li>
      <li><router-link to="/settings/emails">/settings/emails</router-link></li>
      <li><router-link to="/settings/profile">/settings/profile</router-link></li>
    </ul>

    <div style="cursor: pointer;" @click="navigate">编程式的导航</div>
    <div>
      <button @click="$router.go(-1)" type="button">向后</button>
      <button @click="$router.go(1)" type="button">向前</button>
    </div>

    <hr/>

    <!--<div>-->
      <!--<router-view></router-view>-->
    <!--</div>-->
    <div>
      <router-view></router-view>
      <router-view name="a"></router-view>
      <router-view name="b"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      msg: '这是公共头部',
    }
  },
  methods: {
    navigate: function () {
      // 字符串
      // this.$router.push('/home');

      // 对象
      // this.$router.push({ path: '/home' });

      // // 命名的路由
      // this.$router.push({
      //   name: 'user',
      //   params: {
      //     userId: 'profile'
      //   }
      // });
      //
      // // 带查询参数，变成 /user?plan=private
      // this.$router.push({
      //   name: 'user',
      //   query: {
      //     plan: 'private'
      //   }
      // });

      // const id = '963';
      // this.$router.push({ name: 'user', params: { id } }); // /user/897
      // this.$router.push({ path: `/user/${id}` }); // /user/897
      // this.$router.push({ path: '/user', params: { id } }); // /user


      // 不会向 history 添加新记录，替换掉当前的 history 记录
      this.$router.replace({
        name: 'user',
        params: {
          id: 'private'
        }
      });

    }
  }
}
</script>
