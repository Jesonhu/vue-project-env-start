// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';

// 全局变量设置 start
import global_data from './util/global_data';
Vue.prototype.GLABAL_DATA = global_data;
// 全局变量设置 end

Vue.config.productionTip = false;

/**
 * 前端`路由验证`.
 * 
 * @see [全局导航守卫中检查元字段](https://router.vuejs.org/zh/guide/advanced/meta.html#路由元信息)
 */
router.beforeEach((to, from, next) => {
  // `meta.requireUserInfo` 路由定义的时候设置的自定义字段
  // 需要验证的路由
  if (to.matched.some(record => record.meta.requireUserInfo)) {
    // 用户没有登录过
		if (!store.state.user.isLogin) {
      // 定向到 `/user-complete`
      next({
				path: '/user-complete',
				query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
	} else {
		next();
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  // @see ./store/index.js
  // @see ./store/modules/user.js
  store,
  
  components: { App },
  template: '<App/>',
});
