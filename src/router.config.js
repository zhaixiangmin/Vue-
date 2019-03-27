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
import Error from './components/Error'

export default {
  routes: [
    { path: '/', components: {
        default: Foo,
        a: Bar,
        b: Baz,
      }
    },
    { path: '/home', component: Home },
    { path: '/news', component: News },
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
          component: UserEmailsSubscriptions
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

    // 捕获所有路由或 404 Not found 路由
    { path: '/*', component: Error },
  ]
}