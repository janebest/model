<template>
  <div>
    <h2>第三页：需要访问权限</h2>
    <div>
      <span @click="count--">-</span>
      <input type="text" v-model="count">
      <span @click="count++">+</span>
    </div>
    购物车数量为：{{count}}
    <button @click="$router.push('/page1')">跳转到第一页</button>
  </div>
</template>
<script>
export default {
  name: "page3",
  data() {
    return {};
  },
  computed: {
    //计算属性
    count() {
       //return this.$store.state.count;
      return this.$store.getters.showCount
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log("page3组件进入守卫");
    next()
    // ...
  },
  beforeRouteUpdate(to,from,next){//     /detail/1      /detail/2
    console.log("page3组件更新守卫");
    next()

  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log("page3组件离开守卫");
    next();
  }
};
</script>
<style scoped>
span {
  display: inline-block;
  width: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #eee;
  cursor: pointer;
}
input {
  border: 1px solid #eee;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: top;
}
</style>