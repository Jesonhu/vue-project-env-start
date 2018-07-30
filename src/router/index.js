import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/pages/home/home';
import User_complete from '@/pages/user_complete/user_complete';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // @see [路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html#路由元信息)
      meta: {
        requireUserInfo: true
      }
    },
    {
      path: '/user-complete',
      name: 'User_complete',
      component: User_complete
    },
    {
      path: '/',
      redirect: '/home'
    },
  ],
});
