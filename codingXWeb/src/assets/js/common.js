export default {
    install(Vue, options) {
        function isSuccess(res) {
            if (res.status.toString().charAt(0) === "2" && res.data.code == "0") {
                return true;
            }
            return false;
        }

        function addCommonParam(config){
            var token = sessionStorage.getItem("token");
            if(token){
                if(!config || !config.method
                    || config.method == "get"
                    || config.method == "put"
                    || config.method == "delete"){
                    if(!config.params){
                        config.params = new URLSearchParams();
                    }
                    config.params.append("token",token);
                    return config;
                }
                if(config.method == "post"){
                    config.data.append("token",token);
                    return config;
                }
            }
            return config;
        }

        Vue.prototype.UIAxios = function (url, config, callback, error) {
            var loading = {};
            if (!config.hideLoading) {
                loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            }
            config = addCommonParam(config);
            this.$axios(url, config).then(function (res) {
                if (!config.hideLoading) {
                    loading.close();
                }
                if (isSuccess(res)) {
                    callback(res.data.data);
                } else {
                    error(res.data.data)
                }
            }).catch(function (res) {
                if (!config.hideLoading) {
                    loading.close();
                }
                if (error) error(res.response);
            })
        }

        Vue.prototype.UIFormData = function (params) {
            var formData = new FormData();
            console.log(formData);
            for (var key in params) {
                formData.append(key, params[key] == null ? "" : params[key]);
            }
            return formData;
        }

        Vue.prototype.UISearchParam = function(params){
            var args = new URLSearchParams();
            for (var key in params) {
                args.append(key, params[key] == null ? "" : params[key]);
            }
            return args;
        }

        Vue.prototype.UIGetData = function (params) {
            var args = {};
            for (var key in params) {
                args[key] = params[key] == null ? "" : params[key];
            }
            return args;
        }

        Vue.prototype.formatterDate = function (timestamp) {
            var date = new Date(timestamp);
            var m = date.getMonth() + 1;
            m = m > 9 ? m : "0" + m;
            var d = date.getDate();
            d = d > 9 ? d : "0" + d;
            var h = date.getHours();
            h = h > 9 ? h : "0" + h;
            var M = date.getMinutes();
            M = M > 9 ? M : "0" + M;
            var s = date.getSeconds();
            s = s > 9 ? s : "0" + s;
            return date.getFullYear() + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;
        };

        Vue.prototype.copyObject = function (obj) {
            return JSON.parse(JSON.stringify(obj));
        }

        Vue.prototype.arrayRemove = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == val) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }

        Vue.prototype.notifyMessage = function (title, message, type, duration) {
            this.$notify({
                title: title,
                message: message,
                type: type,
                duration: duration,
            });
        }

        /**
         * 枚举类选项值获取
         * name：枚举类名
         * full：是否需要显示全部
         */
        Vue.prototype.getEnumOption = function(name,full){
            var options = sessionStorage.getItem("opt_"+name);
            if(!options){
                this.$enumOption({name:name}, function (res) {
                    res.unshift({val:null,title:'全部'});
                    sessionStorage.setItem("opt_"+name,JSON.stringify(res));
                    if(!full){
                        res.splice(0,1);
                    }
                    return res;
                }, function (res) {
                    this.$notify({
                        title: '失败',
                        message: '选项获取失败',
                        type: 'error'
                    });
                });
            }else{
                var arr = JSON.parse(options);
                if(!full){
                    arr.splice(0,1);
                }
                return arr;
            }
        }

        /**
         * 获取选项title
         * @param enumName 枚举类名
         * @param val   val值
         */
        Vue.prototype.getTitleByVal = function(enumName,val){
            var options =this.getEnumOption(enumName);
            for(var i =0 ;i<options.length;i++){
                if(val == options[i].val){
                    return options[i].title;
                }
            }

        }

        //-----------------------------权限start------------------------------------------
        /**权限指令**/
        Vue.directive('has', {
            bind: function (el, binding) {
                if (!Vue.prototype.$_has(binding.value)) {
                    el.parentNode.removeChild(el);
                }
            }
        });
        //权限检查方法
        Vue.prototype.$_has = function (value) {
            let isExist = false;
            let buttonpermsStr = sessionStorage.getItem("permissions");
            if (buttonpermsStr == undefined || buttonpermsStr == null) {
                return false;
            }
            let buttonperms = JSON.parse(buttonpermsStr);
            for (let i = 0; i < buttonperms.length; i++) {
                if (buttonperms[i].permission==value) {
                    isExist = true;
                    break;
                }
            }
            return isExist;
        };
        //-------------------------------权限end----------------------------------------
    }

}

