* @Author: hao.ling
* @Date: 2020/7/25 9:40 上午
* @Explanation: 登录页面
<template>
    <div id="login">
        <h1 align="center">Welcome</h1>
        <a-form :form="login_form" :label-col="{span:7}" id="login-form" @submit="login">
            <a-form-item label="用户名" class="login-form-item" style="margin-bottom: 5px">
                <a-input class="input" size="small" placeholder="请输入用户名"
                         v-decorator="['username',{rules:[{required:true,message:'请输入用户名'}]}]">
                    <my-icon slot="prefix" type="icon-user" class="icon"/>
                </a-input>
            </a-form-item>
            <a-form-item label="密码" class="login-form-item" style="margin-bottom: -10px">
                <a-input-password class="input" size="small" placeholder="请输入密码" @keyup.native.enter="login"
                                  v-decorator="['password',{rules:[{required:true,message:'请输入密码'}]}]">
                    <my-icon slot="prefix" type="icon-password" class="icon"/>
                </a-input-password>
            </a-form-item>
            <a-button type="link" id="forget">
                <router-link :to="{name:'checkUser'}">忘记密码?</router-link>
            </a-button>
            <br>
            <a-button class="btn" type="primary" style="margin-left: 100px">
                <router-link :to="{name:'register'}">注册</router-link>
            </a-button>
            <a-button class="btn" type="primary" @click="login">登录</a-button>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                login_form: this.$form.createForm(this, {name: "loginForm"})
            }
        },
        methods: {
            // 登录
            login(e) {
                e.preventDefault()
                this.login_form.validateFields((err, value) => {
                    if (!err) {
                        this.Post("/login", {username: value['username'], password: value['password']}).then(res => {
                            if (res['code'] === 1000) {
                                this.setCookie("username", res['data']['username'])
                                this.$router.push({name: "index"})
                                this.$message.success(res['message'], 1)
                            } else {
                                this.$message.error(res['message'])
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #login {
        margin-top: 120px;
        margin-left: 500px;
        padding-top: 20px;
        height: 250px;
        width: 400px;
        background-color: white;
        border-radius: 20px;
    }

    .input {
        width: 200px;
    }

    .icon {
        margin-left: -2px;
        font-size: 16px;
    }

    #forget {
        float: right;
        margin-right: 70px;
        margin-bottom: -20px;
        z-index: 50;
    }

    .btn {
        margin-top: 20px;
        margin-right: 30px;
    }
</style>
<style>
    .login-form-item .ant-form-explain {
        margin-bottom: -20px;
        margin-left: 120px;
    }
</style>