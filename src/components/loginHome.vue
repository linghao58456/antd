* @Author: hao.ling
* @Date: 2020/7/25 9:27 上午
* @Explanation: 登录首页
<template>
    <div id="login-home">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "loginHome"
    }
</script>

<style scoped>
    #login-home {
        width: 100%;
        height: 100%;
        background-size: auto;
        background: url('../assets/loading_bg.jpg');
        position: fixed;
    }
</style>