import axios from 'axios'
import Vue from 'vue'
import router from '../router'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //把 token 加到我们的请求头 Authorization
    //登录 注册需要权限吗？
    let whiteList = ['login', 'register'];
    const sign = whiteList.some(item => {
        return config.url.includes(item);
    })
    if (!sign) {
        config.headers['Authorization'] = "Bearer " + localStorage.getItem("token");
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    if(res.data.status==601||res.data.status==401){//重定向到登录
    //这里是哪里？这个页面的地址传递给登录页面
       console.log(router.currentRoute);//page1
       router.push({
           path:'/login',
           query:{
               redirect:router.currentRoute.fullPath
           }
       })
    }
    return res;
  }, function (error) {
    // 对响应错误做点什么
    console.log("响应拦截错误")
    console.log(typeof error)
    console.dir(error)
    return Promise.reject(error);
  });



Vue.prototype.$axios = axios;