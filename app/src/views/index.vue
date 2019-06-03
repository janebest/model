<template>
  <div class="wrapper">
    <!-- 首页  电影 我的 -->
    <section>
      <router-view></router-view>
    </section>
    <!-- 底部导航 -->
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/tabbar.vue";
export default {
  name: "index",
  components: {
    tabbar: tabbar
  }
};
</script>
<style>
</style>