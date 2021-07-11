import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
        render: h => h(App),
    }).$mount('#app')
    //axios基本使用
    // axios({
    //         url: "http://152.136.185.210:7878/api/m5/recommend",
    //         method: "get"
    //     }).then(res => {
    //         console.log(res)
    //     })
    //发送并发请求
    // axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5/recommend"
    // axios.defaults.timeout = 5000
    // axios.all([axios({
    //     // url: "http://152.136.185.210:7878/api/m5/recommend",
    //     method: "get"
    // }), axios({
    //     // url: "http://152.136.185.210:7878/api/m5/recommend",
    //     params: {
    //         type: 'sell',
    //         page: 4
    //     },
    //     method: "get"
    // })]).then(axios.spread((res1, res2) => {
    //     console.log(res1);
    //     console.log(res2);
    // }))
    // const instance = axios.create({
    //     baseURL: "http://152.136.185.210:7878/api/m5/recommend",
    //     timeout: 5000
    // });
    // instance({
    //     // url: "/home/data"
    // }).then(res => {
    //     console.log(res)
    // })
import { request } from './network/request'
request({}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})