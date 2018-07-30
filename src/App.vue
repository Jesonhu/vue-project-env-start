<template>
  <div id="app">
    <img :src="localImg.logo" alt="">
    <div class="img_wrap"></div>
    <router-view/>

    <!-- 版权组件 start -->
    <v-copyright class="text_center"></v-copyright>
    <!-- 版权组件 end -->
  </div>
</template>

<script>
import copyright from '@/components/copyright/copyright';

export default {
  name: 'App',
  data() {
    return {
      localImg: {
        logo: './static/img/logo.png'
      },
      copyright: this.GLABAL_DATA.copyright
    }
  },
  methods: {
  },
  components: {
    vCopyright: copyright
  }
};
</script>

<style>
/**
 TIPS:
 <style lang="scss" scoped> `scss`类型时需要指定作用域`scope`, 不指定不会生效;
 <style> 不指定作用域也能生效
 */

/* init_mobile style set start */

/* `盒模型` 解析方式设置 @see [Bootstrap](http://getbootstrap.com/docs/4.1/scss/_reboot.scss) */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 最少占`一屏` */
html,
body {
  width:100%;
  height: 100%;
}

/* 文字居中 */
.text_center {
  text-align: center;
}

/* 清除浮动 */


/* init_mobile style set end */

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100%;
}
</style>
