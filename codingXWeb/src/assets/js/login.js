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
        chioces(){
            if(this.chioce){
                 this.chioce = false
            }else{
                 this.chioce = true
            }
        },
        login() {
            const username = this.ruleForm.userName;
            const password = this.ruleForm.password;
            if (username == ""){
                 this.usererror = "帐号不能为空！";
                 return
            }
            if (password == ""){
                 this.passerror = "密码不能为空！";
                 return
            }
            this.axios.post('http://127.0.0.1:5000/login',{
                username: username,
                password: password,
            }).then((response) => {
                if(parseInt(response.data.code) === 200){
                    this.$message({
                        message: response.data.msg,
                        type: 'success'
                    });
                    window.localStorage.setItem("user", this.ruleForm.userName)
                    window.localStorage.setItem("token", response.data.token)
                    window.localStorage.setItem("is_login", "1")
                    this.$router.push({path: '/'})
                    // window.location.href = '/'
                }else if(parseInt(response.data.code) === 302){
                    this.$message({
                        message: response.data.msg,
                        type: 'warning'
                    });
                    this.$router.push({path: '/login'})
                }
            }).catch((error) => {
                console.log(error.response)
            });
        },
        register(){
             checkemail(this.ruleForm.email)
             if (email == ""){
                 this.emailerorr = "邮箱不能为空！";
                 return
             }
             this.axios.post('http://127.0.0.1:5000/register',{
                username: this.ruleForm.userName,
                password: this.ruleForm.password,
                email: this.ruleForm.email,
            }).then((response) => {
                if(parseInt(response.data.status) === 1){
                    this.$message({
                        message: response.data.msg,
                        type: 'success'
                    });
                    this.chioce = true
                }else if(parseInt(response.data.status) === 0){
                    this.$message({
                        message: response.data.msg,
                        type: 'warning'
                    });
                }
            }).catch((error) => {
                console.log(error.response)
            });
        },
        checkuser(flag){
            const username = this.ruleForm.userName;
            if (username == ""){
                this.usererror = "账号不能为空 ！"
            }else if(username.length > 20 ){
                this.usererror = "账号长度不能超过20！"
            }else{
                if (flag){
                      this.axios.post('http://127.0.0.1:5000/checkuser',{
                          username: username,
                      }).then((response) => {
                          if(parseInt(response.data.status) === 1){
                              this.$message({
                                  message: response.data.msg,
                                  type: 'success'
                              });
                              this.usererror = ""
                          }else if(parseInt(response.data.status) === 0){
                              this.usererror = response.data.msg
                          }
                      }).catch((error) => {
                          console.log(error.response)
                      });
                }else{
                      this.usererror = ""
                }

            }
        },
        checkpassword(){
            const password = this.ruleForm.password;
            const regex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
            if (!regex.test(password)){
                this.passerror = "密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符。"
            }else{
                this.passerror = ""
            }
        },

        checkemail(email){
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email == "") {
                this.emailerorr = "邮箱不能为空！"
            }else if(!regex.test(email)){
                this.emailerorr = "请输入正确的邮箱格式！"
            }else{
                this.emailerorr = ""
            }
        },

    },
}
