<template>
   <el-container >
    <el-header direction="vertical" style="background-color: coral">
        <img src="../assets/img/logo.jpg" class="logo" >
       <div class="head_msg" >
         <b>{{ msg }}</b>
      </div>
      <div class= "login_ico">
        <b>Hi {{ username }}! </b>
        <el-button class="logout" size="small" type="info" v-on:click="logout()" round>Logout</el-button>
      </div>
    </el-header>
     <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']"
        background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>客户信息管理</template>
        <el-submenu index="1-1">
          <template slot="title">意向客户</template>
          <el-menu-item index="1-1-1">添加客户</el-menu-item>
          <el-menu-item index="1-2-1">处理信息</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right;  font-size: 12px; background-color: #00a854">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
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
