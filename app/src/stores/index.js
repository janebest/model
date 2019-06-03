//引入
import Vuex from 'vuex'
import Vue from 'vue';
//加载
Vue.use(Vuex);
//创建一个储存状态的实例
const store = new Vuex.Store({
    state: { //储存共用全局的变量
        token: localStorage.getItem('token')||"",
        city:"北京"
    },
    mutations: { //提交修改数据的事件
        saveToken(state, token) {
            state.token = token;
            //持久性的保存数据 localstorge
            localStorage.setItem("token",token)
        },
        changeCity(state,city){
            state.city=city;
        }
    }
})
//暴露实例
export default store;