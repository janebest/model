<template>
    <div>
        <h2>登陆页面</h2>
        <form>
            姓名：<input type="text" v-model="formData.username"><br>
            密码：<input type="password" v-model="formData.password" autocomplete><br>
            <button @click.prevent="send()">登陆</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            formData:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        send(){
            this.$axios.post('/api/login',this.formData)
            .then(res=>{
                console.log(res.data)
                //保存token
                this.$store.commit("saveToken",res.data.token);
               // console.log(this.$route.query)
                if(this.$route.query.redirect){
                    this.$router.push(this.$route.query.redirect);
                }
            })
        }
    }
}
</script>
<style scoped>
    
</style>