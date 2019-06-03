<template>
  <div>
    <h2>注册页面</h2>
    <form>
      姓名：
      <input type="text" v-model="formData.username">
      <br>密码：
      <input type="password" v-model="formData.password" autocomplete>
      <br>邮箱：
      <input type="email" v-model="formData.email">
      <br>
      <button @click.prevent="send()">注册</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      formData: {
        username: "",
        password: "",
        email: ""
      }
    };
  },
  methods: {
      send(){
          //http://localhost:端口号/register
          this.$axios.post('/api/register',this.formData).then(res=>{
              console.log(res.data);
              console.log(res.data.status==200)
              if(res.data.status==200){
                this.$router.push("/login");
              }
          })
      }
  }
};
</script>
<style scoped>
</style>