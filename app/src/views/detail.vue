<template>
  <div>{{id}}</div>
</template>
<script>
export default {
  name: "detail",
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("detail组件进入守卫");
    next();
    // ...
  },
  beforeRouteUpdate(to, from, next) {
    console.log("detail组件更新守卫");
    console.log("发起请求 去后台拿数据")
    next();
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("detail组件离开守卫");
    next();
  }
};
</script>