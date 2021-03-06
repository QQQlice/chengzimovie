<template>
  <header id="header">
    <h1>{{title}}</h1>
    <i class="iconfont icon-chengzi"></i>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "橙子电影"
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 7px;
  top: 50%;
  margin-top: -15px;
  font-size: 28px;
}
</style>