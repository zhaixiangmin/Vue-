import Home from './components/Home'
import News from './components/News'
import User from './components/User'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'
import UserHome from './components/UserHome'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Baz from './components/Baz'
import UserSettings from './components/UserSettings'
import UserEmailsSubscriptions from './components/UserEmailsSubscriptions'
import UserProfilePreview from './components/UserProfilePreview'
import A from './components/A'
import B from './components/B'
import Param from './components/Param'
import Param1 from './components/Param1'
import Func from './components/Func'
// import Lazy from './components/Lazy'
import Error from './components/Error'
const Lazy = () => import('./components/Lazy.vue');

export default {
  mode: 'history',
  routes: [
    { path: '/', components: {
        default: Foo,
        a: Bar,
        b: Baz,
      }
    },
    { path: '/home', component: Home },
    { path: '/news',
      component: News,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter to', to);
        console.log('beforeEnter from', from);
        next();
      }
    },
    // 动态路径参数 以冒号开头
    // 命名路由
    { name: 'user', path: '/user/:id', component: User,
      children: [
        {
          // 当/user/:id 匹配成功
          // UserHome 会被渲染在 User 的 <router-view> 中
          path: '',
          component: UserHome
        },
        {
          // 当/user/:id/profile 匹配成功
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当/user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        },
      ]
    },
    {
      path: '/settings',
      component: UserSettings,
      children: [
        {
          path: 'emails',
          component: UserEmailsSubscriptions,
          meta: {
            requiresAuth: true,
            test: 'test',
            test1: 'test1',
          }
        },
        {
          path: 'profile',
          components: {
            default: UserProfile,
            helper: UserProfilePreview,
          }
        },
      ]
    },
    // { path: '/a', redirect: '/b', component: A },
    { path: '/a', component: A, alias: '/b' },
    { path: '/b', component: B },
    // { path: '/param/:id', component: Param, props: true },
    // 路由组件传参
    // 函数模式
    { path: '/param/:id', components: {
        default: Param,
        param1: Param1
      },
      props: {
        default: true,
        sidebar: true
      }
    },
    {
      path: '/func',
      component: Func,
      props: (route) => (
        {
          query: route.query.q
        }
      )
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: Lazy
      // component: resolve => require(['./components/Lazy'], resolve)
    },

    // 捕获所有路由或 404 Not found 路由
    { path: '/*', component: Error },
  ]
}