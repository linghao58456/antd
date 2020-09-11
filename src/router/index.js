import Vue from 'vue'
import VueRouter from 'vue-router'
import loginHome from "../components/loginHome";
import login from "../views/loginHome/login";
import register from "../views/loginHome/register";
import checkUser from "../views/loginHome/checkUser";
import forgetPwd from "../views/loginHome/forgetPwd";
import indexHome from "../components/indexHome";
import editChangePwd from "../views/indexHome/editChangePwd";
import systemList from "../views/configurationCenter/system/systemList";

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "loginHome",
    component: loginHome,
    children: [{
        path: "/",
        name: "login",
        component: login
    }, {
        path: "/register",
        name: "register",
        component: register
    }, {
        path: "/check",
        name: "checkUser",
        component: checkUser
    }, {
        path: "/forgetPwd",
        name: "forgetPwd",
        component: forgetPwd
    }]
}, {
    path: "/index",
    name: "index",
    component: indexHome,
    children: [{
        path: "/changePwd",
        name: "editChangePwd",
        component: editChangePwd
    }, {
        path: "/systemConfig/list",
        name: "systemConfigList",
        component: systemList
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
