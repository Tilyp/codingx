<template>
  <el-container>
    <el-header direction="vertical">
       <div class="head_msg" >
         <b>{{ msg }}</b>
      </div>
      <div style="float:right;" v-if="chioce==true">
        <el-button class="logout" size="small" type="danger" @click="chioces()">用户注册</el-button>
      </div>
      <div style="float:right;" v-if="chioce==false">
        <el-button class="logout" size="small" type="danger" @click="chioces()">用户登录</el-button>
      </div>
    </el-header>
    <el-container style="background-color: #9fd2f6; height: 100%">

      <el-main  style="background-color: #9fd2f6; height: 100%">
        <div v-if="chioce==true">
         <el-form :model="ruleForm"  ref="ruleForm" class="demo-ruleForm loginFrom">
             <h1 style="font-size: 1.5rem; color: #fff;font-weight: bold;padding: 1rem 0;">用户登陆</h1>
             <el-form-item >
                <el-input placeholder="账号" style="width: 300px;" @blur="checkuser(false)" v-model="ruleForm.userName"></el-input>
                <br>
                <b v-if = "usererror != ''" style="color:red; font-size: 5px; ">* {{usererror}}</b>
             </el-form-item>
             <el-form-item>
                <el-input  type="password" style="width: 300px;" v-model="ruleForm.password" @blur="checkpassword()" placeholder="密码"></el-input>
                <br>
                <b v-if = "passerror != ''" style="color:red; font-size: 5px;">* {{passerror}}</b>
              </el-form-item>
           <div style="padding: 1rem 0 2rem 0;" class="clear">
             <div class="rt">
             </div>
            </div>
            <el-button type="primary" @click="login()" style="width: 300px;">登陆</el-button>
          </el-form>
       </div>

        <div v-if="chioce==false" >
         <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm loginFrom">
             <h1 style="font-size: 1.5rem; color: #fff;font-weight: bold;padding: 1rem 0;">用户注册</h1>
             <el-form-item >
               <el-input placeholder="账号" style="width: 300px;"  @blur="checkuser(ture)" v-model="ruleForm.userName"></el-input>
               <br>
               <b v-if = "usererror != ''" style="color:red; font-size: 5px;">* {{usererror}}</b>
             </el-form-item>
           <el-form-item>
             <el-input  type="password" style="width: 300px;"   @blur="checkpassword()" v-model="ruleForm.password" placeholder="密码"></el-input>
             <br>
             <b v-if = "passerror != ''" style="color:red; font-size: 5px;">* {{passerror}}</b>
           </el-form-item>
           <el-form-item>
              <el-input   style="width: 300px;" v-model="ruleForm.email" @blur="checkemail" placeholder="邮箱"></el-input>
               <br>
              <b v-if = "emailerorr != ''" style="color:red; font-size: 5px;"> * {{emailerorr}}</b>
           </el-form-item>
           <div style="padding: 1rem 0 2rem 0;" class="clear">
             <div class="rt">
             </div>
            </div>
            <el-button  type="primary" @click="register()" style="width: 300px;">注册</el-button>
          </el-form>
          </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script src="../assets/js/login.js"></script>
<style scoped> @import "../assets/css/login.css" </style>
