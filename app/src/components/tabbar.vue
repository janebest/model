<template>
  <ul class="footer">
    <li @click="change(0,'home')" :class="{active:currentIndex==0}">
      <i class="iconfont iconhome"></i>
      <p>首页</p>
    </li>
    <li @click="change(1,'movie')" :class="{active:currentIndex==1}">
      <i class="iconfont iconmovie"></i>
      <p>电影</p>
    </li>
    <li @click="change(2,'mine')" :class="{active:currentIndex==2}">
      <i class="iconfont iconmine_sel"></i>
      <p>我的</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "tabbar",
  data(){
      return {
        currentIndex:0
      }
  },
  methods:{
      change(num,name){
          this.currentIndex=num;
          this.$router.push({name})
      }
  }
};
</script>
<style scoped>
.footer {
  height: 40px;
  padding:5px;
  display: flex;
  justify-content: space-around;
}
li{
    text-align: center;
}
p{
    margin-top:5px;
}
li.active{
    color:brown;
}
</style>