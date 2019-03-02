export default {
    data() {
        return {
            msg: '蔻丁侠后台管理系统',
            ruleForm: {
                userName: '', //用户名
                password: '',  //密码
                email: '',
            },
            rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' }
                    ]
            },
            chioce: true,

        };
    },

    methods: {
        submitForm(formName) {
                let _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.$login(
                            _this.UIFormData(this.ruleForm),
                            function (data) {
                                sessionStorage.setItem("user",JSON.stringify(data));
                                sessionStorage.setItem("token",data.token);
                                sessionStorage.setItem("permissions",JSON.stringify(data.permissions));
                                _this.$router.push('/');
                            }, function (response) {
                                _this.notifyMessage('登录失败', response.data.message, 'error', '3000');
                            });
                    } else {
                        return false;
                    }
                })
        },
        register_admin(formName){
            let _this = this;
                const flag = this.checkemail(this.ruleForm);
                if (!flag){
                    return
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.$registerAdmin(
                            _this.UIFormData(this.ruleForm),
                            function (data) {
                                this.$message({
                                    message: "注册成功！",
                                    type: 'warning',

                                });
                                this.chioce = true;
                            }, function (response) {
                                _this.notifyMessage('用户名验证失败', response.data.message, 'error', '3000');
                            });
                    } else {
                        return false;
                    }
                })
        },
        chioces(){
            if(this.chioce){
                 this.chioce = false
            }else{
                 this.chioce = true
            }
        },
        checkuser(username){
            if(username.length > 20 ){
                this.$message({
                    message: "账号长度不能超过20！",
                    type: 'error'
                });
                return false
            }else{
                let _this = this;
                const fromdata = {
                    username: username,
                };
                _this.$checkAdmin(fromdata,
                    function (data) {
                        if(!data.data){
                            _this.$message({
                                message: data.msg,
                                type: 'warning',
                            });
                            return false
                        }
                        return true
                    }, function (response) {
                        _this.$message({
                            message: response.msg,
                            type: 'warning',
                        });
                        return false
                });
            }
        },
        checkpassword(password){
            const regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
            if (!regex.test(password)){
                this.$message({
                    message: '密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符。',
                    type: 'error'
                });
                return false
            }else{
                return true
            }
        },

        checkemail(ruleForm){
            const userFlag= this.checkuser(ruleForm.userName);
            if (!userFlag){
                return false
            }
            const pwFlag = this.checkpassword(ruleForm.password);
            if(!pwFlag){
                return false
            }
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regex.test(ruleForm.email)){
                this.$message({
                    message: '请输入合法的邮箱格式！',
                    type: 'error'
                });
                return false
            }else{
                return true
            }
        },

    },
}
