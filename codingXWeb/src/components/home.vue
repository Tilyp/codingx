<template>
   <el-container >
    <el-header direction="vertical" height="50px" style="background-color: rgba(5, 140, 52, 0.75)">
        <img src="../assets/img/logo.jpg" class="logo" >
       <div class="head_msg" >
         <b>{{ msg }}</b>
      </div>
      <div class= "login_ico">
        <b>Hi {{ username }}! </b>
        <el-button class="logout" size="small" type="danger" v-on:click="logout()" round>Logout</el-button>
      </div>
    </el-header>
     <el-container  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246); min-height:500px">
    <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>客户信息管理</template>
        <el-submenu index="1-1">
          <template slot="title">意向客户</template>
          <el-menu-item index="1-1-1" @click="chice('addcustomer')" >添加客户</el-menu-item>
          <el-menu-item index="1-2-1" @click="chice('showcustomer')" >处理信息</el-menu-item>
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
    <el-container >
    <el-main style="text-align: right;  font-size: 12px; background-color: rgba(35, 168, 225, 0.49)">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
      <div style="display: flex; margin-top: 5px; min-height: 500px;">
      <transition name="el-fade-in-linear ">
        <div v-if ="show === 'addcustomer'" class="transition-box">
          <el-form :label-position="labelPosition" :inline="true" ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="家长姓名">
              <el-input  v-model="sizeForm.parent_mame" placeholder="家长姓名"></el-input>
            </el-form-item>
            <el-form-item label="关系">
              <el-select v-model="sizeForm.relation" placeholder="请选择">
                <el-option label="父亲" value="父亲"></el-option>
                <el-option label="母亲" value="母亲"></el-option>
                <el-option label="爷爷" value="爷爷"></el-option>
                <el-option label="奶奶" value="奶奶"></el-option>
                <el-option label="舅舅" value="舅舅"></el-option>
                <el-option label="叔叔" value="叔叔"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="家长电话">
              <el-input  v-model="sizeForm.parent_phone" placeholder="家长电话"></el-input>
            </el-form-item>
            <el-form-item label="家长职业">
              <el-input  v-model="sizeForm.occupation" placeholder="家长职业"></el-input>
            </el-form-item>
            <el-form-item label="家长微信">
              <el-input  v-model="sizeForm.parent_wechat" placeholder="家长微信"></el-input>
            </el-form-item>
            <el-form-item label="家长QQ">
              <el-input  v-model="sizeForm.parent_qq" placeholder="家长QQ"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址">
              <el-input  v-model="sizeForm.address" placeholder="家庭住址"></el-input>
            </el-form-item>
            <el-form-item label="学生姓名">
              <el-input  v-model="sizeForm.student_name" placeholder="学生姓名"></el-input>
            </el-form-item>
            <el-form-item label="学生性别">
              <el-input  v-model="sizeForm.student_gender" placeholder="学生性别"></el-input>
            </el-form-item>
            <el-form-item label="学生年龄">
              <el-input  v-model="sizeForm.student_age" placeholder="学生年龄"></el-input>
            </el-form-item>
            <el-form-item label="学生生日">
              <el-input  v-model="sizeForm.birthday" placeholder="学生生日"></el-input>
            </el-form-item>
            <el-form-item label="学生班级">
              <el-input  v-model="sizeForm.student_grade" placeholder="学生班级"></el-input>
            </el-form-item>
            <el-form-item label="学生电话">
              <el-input  v-model="sizeForm.student_phone" placeholder="学生电话"></el-input>
            </el-form-item>
            <el-form-item label="所在学校">
              <el-input  v-model="sizeForm.school" placeholder="所在学校" ></el-input>
            </el-form-item>
            <el-form-item label="学生QQ">
              <el-input  v-model="sizeForm.student_qq" placeholder="学生QQ" ></el-input>
            </el-form-item>
            <el-form-item label="学生微信">
              <el-input  v-model="sizeForm.student_wechat" placeholder="学生微信"></el-input>
            </el-form-item>
            <el-form-item label="学生爱好">
              <el-input  v-model="sizeForm.hobby" placeholder="学生爱好" ></el-input>
            </el-form-item>
            <el-form-item label="学生特长">
              <el-input  v-model="sizeForm.speciality" placeholder="学生特长" ></el-input>
            </el-form-item>
            <el-form-item label="竞赛意向">
              <el-input  v-model="sizeForm.competition" placeholder="竞赛意向" ></el-input>
            </el-form-item>
            <el-form-item label="曾经赛事">
              <el-input  v-model="sizeForm.once_competition" placeholder="曾经赛事" ></el-input>
            </el-form-item>
            <el-form-item label="意向课程">
              <el-input  v-model="sizeForm.intention_class" placeholder="意向课程"></el-input>
            </el-form-item>
            <el-form-item label="辅导班">
              <el-input  v-model="sizeForm.coach" placeholder="已报辅导班" ></el-input>
            </el-form-item>
            <el-form-item label="客户状态">
              <el-input  v-model="sizeForm.status" placeholder="客户状态"></el-input>
            </el-form-item>
            <el-form-item label="销售员">
              <el-input  v-model="sizeForm.salesperson" placeholder="销售员"></el-input>
            </el-form-item>
            <el-form-item label="入库员">
              <el-input  v-model="sizeForm.input_person" placeholder="入库员"></el-input>
            </el-form-item>
            <el-form-item label="维护员" >
              <el-input  v-model="sizeForm.maintain" placeholder="维护员" ></el-input>
            </el-form-item>
            <el-form-item label="登记时间" >
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.record_date.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.record_date.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <br>
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit(sizeForm)">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
         <div v-if ="show === 'showcustomer'" class="transition-box">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
          </el-table>
         </div>
      </transition>
    </div>
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
            show: "",
            msg: '蔻丁侠后台管理系统',
            username: window.sessionStorage.getItem("user"),
            labelPosition: 'left',
            sizeForm: {
                parent_mame: '',
                relation: '',
                parent_phone: '',
                occupation: '',
                parent_qq: '',
                parent_wechat: '',
                address: '',
                school: '',
                student_name: '',
                student_gender: '',
                student_grade: '',
                birthday: '',
                student_age: '',
                student_phone: '',
                student_qq: '',
                student_wechat: '',
                competition: '',
                once_competition: '',
                hobby: '',
                speciality: '',
                coach: '',
                intention_class: '',
                record_date: {"date1": '', "date2": ''},
                status: '',
                salesperson: '',
                input_person: '',
                maintain: '',
            },
            page: 1,
            customer:{},
            pageTotal: ''

        }
    },
    methods: {
        logout(){
             window.sessionStorage.removeItem("token");
             window.sessionStorage.removeItem("permissions");
             window.sessionStorage.removeItem("user");
             this.$router.push({path: '/login'})
        },
        chice(flag){
            if (flag === "showcustomer"){
                this.showCustomer(this.page)
                this.page = this.page + 1
            }
            this.show = flag
        },
        showCustomer(page) {
            let _this = this;
            const fromData = {};
            fromData["page"] = page;
            _this.$showCustomer(
                fromData,
                function (data) {
                    _this.customer = data["customer"];
                    _this.pageTotal = data["totalPage"]
                }, function (){
                    _this.$message({
                        message: "请求失败！",
                        type: 'error',

                    });
                }
            )
        },
        onSubmit(formData) {
            let _this = this;
            const record_date = formData["record_date"];
            const record_time = _this.formatterDateDetail(record_date["date1"], record_date["date2"]);
            formData["record_time"] = record_time;
            delete formData["record_date"];
            _this.$addCustomer(
                _this.UIFormData(formData),
                function (data) {
                    _this.$message({
                        message: "添加成功！",
                        type: 'success',

                    });
                    _this.$router.push('/');
                }, function (response) {
                     _this.$message({
                        message: "添加失败！",
                        type: 'error',

                    });
                });

        }
    }
}
</script>


<style scoped>
    .logo{
        width: 30px;
        height: 30px;
        left: 40px;
        top: 18px;
        position: absolute;
    }
    .head_msg{
        top: 3px;
        position: absolute;
        float:left;
        margin-left:50px;
        font-size: 18px;
        font-family: "Adobe 仿宋 Std R";
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
        top:3px;

        position: absolute;
    }
    .transition-box {
        margin-bottom: 10px;
        width: 800px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 20px 10px;
        box-sizing: border-box;
        margin-right: 20px;
  }
  .el-row {
    // margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
