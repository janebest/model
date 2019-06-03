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
      <br>图片：
      <input type="file" ref="image">
      <br>
      <button @click.prevent="send()">注册</button>
    </form>
  </div>
</template>
<script>
//querystring 先安装
//import qs from 'qs'
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
    send() {
      var data = new FormData(); //模仿图片提交的形式
      data.append("username", this.formData.username);
      data.append("password", this.formData.password);
      data.append("email", this.formData.email);
      //图片的数据怎么拿
      // console.log(this.$refs.image)
      // console.dir(this.$refs.image)
      data.append("pic", this.$refs.image.files[0]);

        this.$axios.post('/api/test/img',data)
        .then(res=>{
            console.log(res.data);
        })

      // this.$axios.post('地址',"数据，json")
      //    name=123&age=20
      // this.$axios.post('/api/register',qs.stringify(this.formData))
      // .then(res=>{
      //     console.log(res.data);
      // })
      // .catch(err=>{

      // })
    }
  }
};
</script>
<style scoped>
</style>