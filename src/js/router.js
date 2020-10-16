import VueRouter from 'vue-router'
import account from '../main/Account.vue'
import goodslist from '../main/GoodsList.vue'
import login from '../childrouter/Login.vue'
import register from '../childrouter/Register.vue'

// 创建路由对象
let router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register },
            ]
        },
        { path: '/goodslist', component: goodslist },
    ]
})

export default router;