<template>
  <div id="app">
    {{ msg }}
    <ul>
      <li><router-link to="/home" tag="span">主页</router-link></li>
      <router-link to="/news" tag="li"><a>新闻</a></router-link>
      <!--this.$router.push 规则也适用于 router-link 组件的 to 属性-->
      <li><router-link :to="{ name: 'user', params: { id: 'private' } }">to测试</router-link></li>
      <li><router-link active-class="test2-active" to="/user/123?name=456">用户</router-link></li>
      <li><router-link router-link-exact-active="test2-exact-active" to="/settings" replace>settings</router-link></li>
      <li><router-link to="/settings/emails" exact>/settings/emails</router-link></li>
      <li><router-link to="/settings/profile">/settings/profile</router-link></li>
      <li><router-link to="/a">/a</router-link></li>
      <li><router-link to="b" append>/b</router-link></li>
      <li><router-link to="/param/654">/param/654</router-link></li>
      <li><router-link to="/func?q=951">/func?q=951</router-link></li>
      <!--event 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。-->
      <li><router-link to="/lazy" event="mouseover">/lazy</router-link></li>
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
      <router-view name="param1"></router-view>
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
