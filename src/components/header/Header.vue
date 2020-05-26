<template>
  <div class="header">
    <span class="left"> <em>注册</em>&nbsp;|&nbsp;<em>登录</em> </span>
    <btn class="right">APP下载</btn>
  </div>
</template>

<script>
import btn from "@c/core/btn.vue";
export default {
  components: {
    btn,
  },
};
</script>

<style lang="scss" scope>
.header {
  color: #666;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
    center no-repeat;
  background-size: auto 50%;
  z-index: 99;
  .left {
    font-size: 14px;
    height: 15px;
    line-height: 15px;
    margin: 8.5px 0 0 9px;
  }
  .right {
    float: right;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    min-width: 60px;
    padding: 0;
    border-radius: 2px;
    margin: 14px 12px 0 0;
  }
}
</style>
