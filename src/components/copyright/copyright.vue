<template>
  <div class="c_copyright">
    <!-- {{copyright}} -->
    {{GLABAL_DATA.copyright}}
  </div>
</template>

<script>
  export default {
    /* 版权组件 */
    name: 'copyright',
    data() {
      return {
        // copyright: this.GLABAL_DATA.copyright
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c_copyright {
    position: absolute;
    bottom: 20px;
    left:0;
    width:100%;
    font-size: 12px;
    width:100%;
  }
</style>

