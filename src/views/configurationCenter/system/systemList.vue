* @Author: hao.ling
* @Date: 2020/8/15 11:07 上午
* @Explanation: 系统配置列表
<template>
    <div id="system-list">
        <a-layout>
            <a-layout-header id="header">
                <a-form :form="searchForm" :label-col="{span:7}">
                    <a-form-item label="系统名称">
                        <a-input/>
                    </a-form-item>
                </a-form>
            </a-layout-header>
            <a-layout-content>Content</a-layout-content>
        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "systemList",
        data() {
            return {
                searchForm: this.$form.createForm(this, {name: "searchForm"})
            }
        }
    }
</script>

<style scoped>
    #header {
        background-color: #fff;
    }
</style>