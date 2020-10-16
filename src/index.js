import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) 
import router from './js/router'

let vm = new Vue({
    el: '#app',
    render: createElement => createElement(app),
    router
})