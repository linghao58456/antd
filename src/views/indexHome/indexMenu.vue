* @Author: hao.ling
* @Date: 2020/8/2 3:45 下午
* @Explanation: 菜单栏
<template>
    <div id="index-menu">
        <a-menu mode="inline" :open-keys="openKeys" @openChange="openChange">
            <a-sub-menu v-for="li in menu_list" :key="li.key">
                <span slot="title"><my-icon :type="li.icon"/><span>{{li.name}}</span></span>
                <a-menu-item v-for="li_menu in li.menu_item" :key="li_menu.key">
                    <my-icon :type="li_menu.icon"/>
                    <span @click="goto(li_menu.path)">{{li_menu.name}}</span>
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-for="li in subMenu_list" :key="li.key">
                <my-icon :type="li.icon"/>
                <span @click="goto(li.path)">{{li.name}}</span>
            </a-menu-item>
            <a-sub-menu v-for="conf in config_list" :key="conf.key">
                <span slot="title"><my-icon :type="conf.icon"/><span>{{conf.name}}</span></span>
                <a-menu-item v-for=" item in conf.menu_item " :key="item.key">
                    <my-icon :type="item.icon"/>
                    <span @click="goto(item.path)">{{item.name}}</span>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
    export default {
        name: "indexMenu",
        data() {
            return {
                openKeys: [],
                rootSubmenuKeys: [],
                menu_list: [
                    {
                        key: "sub1", name: "测试用例", icon: "icon-test-case-group", menu_item: [{
                            key: "/functionalCase/list", icon: "icon-mokuai", name: "功能测试用例",
                            path: {name: "functionalCaseList"}
                        }, {
                            key: "/interfaceCase/list", icon: "icon-jiekou1", name: "接口测试用例",
                            path: {name: "interfaceCaseList"}
                        }, {
                            key: "/automatedCase/list", icon: "icon-xiaoshouzidonghua",
                            name: "自动化测试用例", path: {name: "automatedCaseList"}
                        }]
                    },
                    {
                        key: "sub2", name: "自动化测试", icon: "icon-xinicon_huabanfuben", menu_item: [{
                            key: "/UIAutomation/list", icon: "icon-uicn", name: "UI自动化测试",
                            path: {name: "uiAutomationList"}
                        }, {
                            key: "/interfaceAutomation/list", icon: "icon-jiekou", name: "接口自动化测试",
                            path: {name: "interfaceAutomationList"}
                        }]
                    },
                    {
                        key: "sub3", name: "覆盖率", icon: "icon-tongji", menu_item: [{
                            key: "/functionalCoverage/list", icon: "icon-tongji1", name: "UI自动化覆盖率",
                            path: {name: "functionalCoverageList"}
                        }, {
                            key: "/interfaceCoverage/list", icon: "icon-tongji2", name: "接口自动化覆盖率",
                            path: {name: "interfaceCoverageList"}
                        }]
                    },
                    {
                        key: "sub4", name: "测试报告", icon: "icon-REPORT", menu_item: [{
                            key: "/functionalReport/list", icon: "icon-report", name: "UI测试报告",
                            path: {name: "functionalReportList"}
                        }, {
                            key: "/interfaceReport/list", icon: "icon-Report", name: "接口测试报告",
                            path: {name: "interfaceReportList"}
                        }]
                    },
                ],
                subMenu_list: [{
                    key: "/mobile/platform", icon: "icon-mobile", name: "手机测试平台", path: {name: "mobilePlatform"}
                }, {
                    key: "/mockData/platform", icon: "icon-data", name: "mock数据平台", path: {name: "mockPlatform"}
                }],
                config_list: [{
                    key: "sub5", icon: "icon-peizhi", name: "配置中心", menu_item: [{
                        key: "/systemConfig/list", icon: "icon-xitongpeizhi", name: "系统配置",
                        path: {name: "systemConfigList"}
                    }, {
                        key: "/databaseConfig/list", icon: "icon-data", name: "数据库配置",
                        path: {name: "databaseConfigList"}
                    }, {
                        key: "/environmentConfig/list", icon: "icon-shujutansuohuanjingpeizhi", name: "环境配置",
                        path: {name: "environmentConfigList"}
                    }]
                }]
            }
        },
        created() {
            this.getMenuList()
        },
        methods: {
            // 展开当前菜单
            openChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                this.rootSubmenuKeys.indexOf(latestOpenKey) === -1 ? this.openKeys = openKeys : this.openKeys = latestOpenKey ? [latestOpenKey] : []
            },
            // 获取subKey
            getMenuList() {
                this.rootSubmenuKeys = []
                this.menu_list.map((item) => {
                    this.rootSubmenuKeys.push(item['key'])
                })
            },
            // 菜单跳转
            goto(value) {
                this.$router.push(value)
            }
        }
    }
</script>

<style scoped>

</style>