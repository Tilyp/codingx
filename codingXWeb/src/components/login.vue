<template>
  <el-container>
    <el-header direction="vertical">
        <img src="../assets/img/logo.jpg" class="logo" >
       <div class="head_msg" >
         <b>{{ msg }}</b>
      </div>
      <div class= "login_ico" v-if="chioce==true">
        <el-button class="logout" size="small" type="danger" @click="chioces()">用户注册</el-button>
      </div>
      <div class= "login_ico" v-if="chioce==false">
        <el-button class="logout" size="small" type="danger" @click="chioces()">用户登录</el-button>
      </div>
    </el-header>
    <el-container>

      <el-main>
        <div class="ms-login" v-if="chioce==true">
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm loginFrom">
             <h1 style="font-size: 1.2rem; color: #fff;font-weight: bold;padding: 1rem 0;">用户登陆</h1>
             <el-form-item prop="userName">
                <el-input placeholder="账号"  v-model="userName"></el-input>
             </el-form-item>
             <el-form-item prop="password">
                <el-input  type="password"  v-model="password" placeholder="密码"></el-input>
              </el-form-item>
             <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
             </div>
          </el-form>
       </div>
        <div class="ms-login" v-if="chioce==false">
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm loginFrom">
             <h1 style="font-size: 1.2rem; color: #fff;font-weight: bold;padding: 1rem 0;">用户登陆</h1>
             <el-form-item prop="userName">
                <el-input placeholder="账号"  v-model="userName"></el-input>
             </el-form-item>
             <el-form-item prop="password">
                <el-input  type="password"  v-model="password" placeholder="密码"></el-input>
              </el-form-item>

             <el-form-item prop="email">
              <el-input  v-model="email" placeholder="邮箱"></el-input>
           </el-form-item>
           <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
             </div>
          </el-form>
          </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script src="../assets/js/login.js"></script>
<style scoped> @import "../assets/css/login.css" </style>

