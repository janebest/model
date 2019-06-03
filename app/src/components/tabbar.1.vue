<template>
  <ul class="footer">
    <li
      v-for="(item,index) in tabbarData"
      :key="index"
      @click="change(index,item.name)"
      :class="{active:currentIndex==index}"
    >
      <i class="iconfont" :class="[item.icon]"></i>
      <p>{{item.title}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      currentIndex: 0,
      tabbarData: [
        {
          title: "首页",
          name:"home",
          icon: "iconhome"
        },
        {
          title: "电影",
          name:"movie",
          icon: "iconmovie"
        },
        {
          title: "我的",
          name:"mine",
          icon: "iconmine_sel"
        }
      ]
    };
  },
  methods: {
    change(num, name) {
      this.currentIndex = num;
      this.$router.push({ name });
    }
  }
};
</script>
<style scoped>
.footer {
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
}
li {
  text-align: center;
}
p {
  margin-top: 5px;
}
li.active {
  color: brown;
}
</style>