var install = function (Vue) {
    if (install.installed) return // 如果已经注册过了，就跳过
    install.installed = true;
    Object.defineProperties(Vue.prototype, {
        //登录
        $login: {
            value: function (params, success, fail) {
                this.UIAxios("/student/admin_login", {
                    method: "post",
                    data: params
                }, success, fail);
            }
        },
        $registerAdmin: {
            value: function (params, success, fail) {
                this.UIAxios("/student/register_admin", {
                    method: "post",
                    data: params
                }, success, fail);
            }
        },

        $checkAdmin: {
            value: function (params, success, fail) {
                console.log(params);
                this.UIAxios("/student/check_admin_user", {
                    method: "post",
                    data: params
                }, success, fail);
            }
        },

        //枚举选项获取
        $enumOption: {
            value: function(params,success,fail){
                this.UIAxios('/enumOption/getOption', {
                    method: 'get',
                    params: this.UISearchParam(params)
                }, success,fail);
            }
        },
        //服务相关方法
        //获取所有服务
        $allServer: {
            value: function (params, success, fail) {
                this.UIAxios("/server/getAll",
                    {method: 'get'},
                    success, fail);
            }
        },
        //服务保存
        $serverSave: {
            value : function (params,success,fail) {
                this.UIAxios("/server/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //服务删除
        $serverDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/server/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //服务名称校验
        $serverCheckName:{
            value: function (params, success, fail) {
                this.UIAxios("/server/checkName", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //接口相关方法
        //接口保存
        $apiSave: {
            value : function (params,success,fail) {
                this.UIAxios("/api/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //api接口删除
        $apiDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/api/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //api接口uri校验
        $apiCheckUri:{
            value: function (params, success, fail) {
                this.UIAxios("/api/checkUri", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //账号相关方法
        //账号保存
        $accountSave: {
            value : function (params,success,fail) {
                this.UIAxios("/account/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //账号删除
        $accountDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/account/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //修改账号状态
        $accountModifyStatus:{
            value: function (params, success, fail) {
                this.UIAxios("/account/modifyStatus", {
                    method: "put",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //角色相关方法
        //获取所有角色
        $allRole: {
            value: function (params, success, fail) {
                this.UIAxios("/role/getAll",
                    {method: 'get'},
                    success, fail);
            }
        },
        //角色保存
        $sysroleSave: {
            value : function (params,success,fail) {
                this.UIAxios("/role/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //角色删除
        $sysroleDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/role/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //告警规则相关方法
        //告警规则保存
        $alarmRuleSave: {
            value : function (params,success,fail) {
                this.UIAxios("/alarmRule/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //告警规则删除
        $alarmRuleDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/alarmRule/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //系统用户相关方法
        //用户保存
        $sysuserSave: {
            value : function (params,success,fail) {
                this.UIAxios("/user/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //用户修改状态
        $userModifyStatus:{
            value: function (params, success, fail) {
                this.UIAxios("/user/modifyStatus", {
                    method: "put",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //用户删除
        $userDelete: {
            value : function (params,success,fail) {
                this.UIAxios("/user/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },



        //账户和接口绑定保存方法
        $accountapiSave: {
            value : function (params,success,fail) {
                this.UIAxios("/accountapi/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },

        //菜单相关方法
        $menuSave: {
            value: function (params, success, fail) {
                this.UIAxios("/menu/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        $menuDelete: {
            value: function (params, success, fail) {
                this.UIAxios("/menu/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        //实例服务相关方法
        $instanceSave: {
            value: function (params, success, fail) {
                this.UIAxios("/instance/save", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        $instanceDelete: {
            value: function (params, success, fail) {
                this.UIAxios("/instance/delete", {
                    method: "delete",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },


        //校验服务
        $accountCheckName:{
            value: function (params, success, fail) {
                this.UIAxios("/account/checkName", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        $userCheckName:{
            value: function (params, success, fail) {
                this.UIAxios("/user/checkName", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        $roleCheckName:{
            value: function (params, success, fail) {
                this.UIAxios("/role/checkName", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        $getMenuByRole:{
            value: function (params, success, fail) {
                this.UIAxios("/roleMenu/getMenuByRole", {
                    method: "get",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
        $systemManagerUserSave: {
            value : function (params,success,fail) {
                this.UIAxios("/userManager/save", {
                    method: "post",
                    data: params
                }, success, fail);
            }
        },

        $systemUserCheckName:{
            value: function (params, success, fail) {
                this.UIAxios("/userManager/checkName", {
                    method: "post",
                    data: params
                }, success, fail);
            }
        },
        //角色保存
        $systemUserMenuSave: {
            value : function (params,success,fail) {
                this.UIAxios("/userManager/saveUserMenu", {
                    method: "post",
                    data: this.UIFormData(params)
                }, success, fail);
            }
        },
        //查询改用户已经被分配的菜单
        $getSystemUserMenuByUserId: {
            value : function (params,success,fail) {
                this.UIAxios("/userManager/getSystemUserMenuByUserId", {
                    method: "get",
                    params: this.UISearchParam(params)
                }, success, fail);
            }
        },
    })
}

export default install;

