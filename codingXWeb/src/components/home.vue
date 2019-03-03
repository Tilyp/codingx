<template>
   <el-container>
    <el-header direction="vertical">
        <img src="../assets/img/logo.jpg" class="logo" >
       <div class="head_msg" >
         <b>{{ msg }}</b>
      </div>
      <div class= "login_ico">
        <b>Hi {{ username }}! </b>
        <el-button class="logout" size="small" type="danger" v-on:click="logout()">logout</el-button>
      </div>
    </el-header>
     <el-container>

     </el-container>
    </el-container>

</template>

<script>
export default {
    name: 'home',
    data () {
        return {
          msg: '蔻丁侠后台管理系统',
          username: window.sessionStorage.getItem("user")
        }
    },
    methods: {
        logout(){
             window.sessionStorage.removeItem("token");
             window.sessionStorage.removeItem("permissions");
             window.sessionStorage.removeItem("user");
             this.$router.push({path: '/login'})
        }
    }
}
</script>


<style scoped>
    .logo{
        width: 30px;
        height: 30px;
        left: 40px;
        top: 22px;
        position: absolute;
    }
    .head_msg{
        float:left;
        margin-left:50px;
        font-size: 18px;
        /*color: #d85030;*/
    }
    .el-header {
        background-color: #409EFF;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .login_ico{
        right: 80px;
        top:8px;
        position: absolute;
    }
</style>
