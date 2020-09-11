* @Author: hao.ling
* @Date: 2020/8/2 11:05 上午
* @Explanation: 菜单首页
<template>
    <div id="index-home">
        <a-layout>
            <a-layout-header id="header">
                <header-top/>
            </a-layout-header>
            <a-layout>
                <a-layout-sider id="side">
                    <index-menu/>
                </a-layout-sider>
                <a-layout-content id="content">
                    <index-content/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    import HeaderTop from "../views/indexHome/headerTop";
    import IndexContent from "../views/indexHome/indexContent";
    import IndexMenu from "../views/indexHome/indexMenu";

    export default {
        name: "indexHome",
        components: {IndexMenu, IndexContent, HeaderTop}
    }
</script>

<style scoped>
    #header {
        background-color: pink;
    }

    #side {
        background-color: white;
        height: 91%;
        position: absolute;
    }

    #content {
        background-color: white;
        height: 91%;
        width: 86.1%;
        left: 13.9%;
        position: absolute;
    }
</style>