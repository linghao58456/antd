* @Author: hao.ling
* @Date: 2020/8/1 2:40 下午
* @Explanation: 检查用户信息
<template>
    <div id="check-user">
        <h1 align="center">重置密码</h1>
        <a-form :form="check_form" :label-col="{span:7}" @submit="check">
            <a-form-item label="用户名" class="check-form-item">
                <a-input placeholder="请输入用户名" size="small" class="input"
                         v-decorator="['username',{rules:[{required:true,message:'请输入用户名'}]}]">
                    <my-icon slot="prefix" type="icon-user" class="icon"/>
                </a-input>
            </a-form-item>
        </a-form>
        <a-button type="primary" class="btn" style="margin-left: 100px">
            <router-link :to="{name:'login'}">取消</router-link>
        </a-button>
        <a-button type="primary" class="btn" @click="check">下一步</a-button>
    </div>
</template>

<script>
    export default {
        name: "checkUser",
        data() {
            return {
                check_form: this.$form.createForm(this, {name: "checkForm"})
            }
        },
        methods: {
            // 检查用户
            check(e) {
                e.preventDefault()
                this.check_form.validateFields((err, value) => {
                    if (!err) {
                        this.Get("/searchUser", {username: value['username']}).then(res => {
                            res['code'] === 1000 ? this.$router.push({
                                name: "forgetPwd",
                                params: {username: value['username']}
                            }) : this.$message.error(res['message'])
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #check-user {
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

    .btn {
        margin-top: 20px;
        margin-right: 50px;
    }
</style>
<style>
    .check-form-item .ant-form-explain {
        margin-left: 120px;
    }
</style>