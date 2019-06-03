<template>
  <div>
    <h2>第一页：不需要访问权限</h2>
    <i class="iconfont iconmine_sel" style="color:red;font-size:30px;"></i>

    <div>
      <span @click="count--">-</span>
      <input type="text" v-model="count">
      <span @click="add(2)">+</span>
    </div>
    购物车数量为：{{count}}
    <button @click="send()">向后台发起get请求</button>
    <button @click="$router.push('/page2')">跳转到第二页</button>
    <button @click="$router.push('/page1/detail/1')">跳转到详情页第1页</button>
    <button @click="$router.push({name:'detail',params:{id:2}})">跳转到详情页第2页</button>
    <button @click="$router.push({name:'detail',params:{id:3}})">跳转到详情页第3页</button>
    <button @click="$router.push({name:'detail',params:{id:4}})">跳转到详情页第4页</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "page1",
  data() {
    return {
      show:false,
    };
  },
  computed: {
    //计算属性
    count() {
      //return this.$store.state.count;
      return this.$store.getters.showCount;
    }
  },
  methods: {
    add(n) {
      //this.$store.commit('addCount',n);
      this.$store.dispatch("addCountAsync", n);
    },
    send() {
      this.$axios
        .get("/api/test/get")
        //http://localhost:4000/api/test/get
        //http://localhost:4000/test/get
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log("page1组件进入守卫");
    next()
    // ...
  },
  beforeRouteUpdate(to,from,next){
    console.log("page1组件更新守卫");
    next()

  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log("page1组件离开守卫");
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