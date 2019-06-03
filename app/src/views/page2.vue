<template>
  <div>
    <h2>第二页：需要访问权限</h2>
    <i class="iconfont iconmine_sel"></i>
    <div>
      <span @click="count--">-</span>
      <input type="text" v-model="count">
      <span @click="count++">+</span>
    </div>
    购物车数量为：{{count}}
    <button @click="$router.push('/page3')">跳转到第三页</button>
    <h2 v-if="!movieData.length">loading....</h2>
    <ul v-else>
      <li v-for="item in movieData" :key="item.id">
        名字：{{item.title}}
        <br>
        时间：{{item.durations}}
      </li>
    </ul>
  </div>
</template>
<script>
import { get } from "../requests/apis";
export default {
  name: "page2",
  data() {
    return {
      movieData: []
    };
  },
  beforeRouteEnter: (to, form, next) => {
    console.log("page2");
    get("/mock/comingSoon.json")
      .then(res => {
        console.log(res);
        setTimeout(() => {
          //不能使用this  使用回调函数
          next(vm => {
            vm.movieData = res.subjects;
          });
        }, 5000);
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    //先去获取数据
    // get("/mock/comingSoon.json")
    //   .then(res => {
    //     console.log(res);
    //     setTimeout(() => {
    //       this.movieData = res.subjects;
    //     }, 5000);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  computed: {
    //计算属性
    count() {
      //return this.$store.state.count;
      return this.$store.getters.showCount;
    }
  }
  // beforeRouteEnter(to, from, next) {
  //   console.log("page2组件进入守卫");
  //   next();
  //   // ...
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("page2组件更新守卫");
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   // ...
  //   console.log("page2组件离开守卫");
  //   next();
  // }
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