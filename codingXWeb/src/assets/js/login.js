export default {
    data() {
        var checkuser = (rules, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }else {
                let _this = this;
                 const fromdata = {
                    username: value,
                 };
                 setTimeout(() => {
                      _this.$checkAdmin(
                            _this.UIFormData(fromdata),
                           function (data) {
                               if(!data.flag){
                                   _this.$refs['ruserNameInput'].focus();
                                   return callback(new Error(data.message));
                               }
                               callback();
                           }, function (response) {
                               _this.$refs['ruserNameInput'].focus()
                               return callback(new Error("未知错误，稍后重试！！！"));
                      });
                 }, 2000)
            }
        };

        return {
            msg: '蔻丁侠后台管理系统',
            ruleForm: {
                userName: '', //用户名
                username: '',
                password: '',  //密码
                email: '',
            },
            loginForm:{
                username: '',
                password: '',  //密码
            },

            rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'},
                        { pattern: /^[A-Za-z0-9]+$/, message: '用户名只能为字母和数字', trigger: 'blur'},
                        {validator: checkuser, trigger: 'blur'},
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur'},
                        { pattern: /^[A-Za-z0-9]+$/, message: '用户名只能为字母和数字', trigger: 'blur'},
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 25,  message: '长度在 6 到 25 个字符', trigger: 'blur'},
                        { pattern: '(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,25}', trigger: 'blur',
                          message: '密码中必须包含字母、数字、特称字符，至少6个字符，最多25个字符。'},
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: '邮箱格式不正确，请重新出入！', trigger: 'blur'},
                    ]
            },
            chioce: true,
            userFlag: false,

        };
    },

    methods: {
        submitForm(formName) {
                let _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.$login(
                            _this.UIFormData(_this.loginForm),
                            function (data) {
                                sessionStorage.setItem("user",data.name);
                                sessionStorage.setItem("token",data.token);
                                sessionStorage.setItem("permissions",JSON.stringify(data.permissions));
                                console.log(data);
                                _this.$router.push('/');
                            }, function (response) {
                                _this.notifyMessage('登录失败', response.message, 'error', '3000');
                            });
                    } else {
                        return false;
                    }
                })
        },

        register_admin(formName){
            let _this = this;
                const flag = this.checkemail(_this.ruleForm);
                if (!flag){
                    return
                }

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        _this.$registerAdmin(
                            _this.UIFormData(_this.ruleForm),
                            function (data) {
                                _this.$message({
                                    message: "注册成功！",
                                    type: 'success',

                                });
                                _this.chioce = true;
                            }, function (response) {
                                _this.notifyMessage('注册失败', response.data.message, 'error', '3000');
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

        checkemail(ruleForm){
            if (ruleForm.userName === ""){
                this.$refs['ruserNameInput'].focus()
                return false
            }
            if (ruleForm.password === "") {
                this.$refs["rpasswordInput"].focus()
                return false
            }
            if(ruleForm.email === ""){
                this.$refs["remailInput"].focus()
                return false
            }else{
                return true
            }
        },

    },
}
