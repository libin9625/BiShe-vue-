<template>
  <div class="manageStudent">
    <el-card class="box-card"  v-show="!FormVisible">
      <div slot="header" class="clearfix">
        <span class="header">学生个人信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="FormVisible = !FormVisible">修改个人信息</el-button>
      </div>
      <div class="text item"><span class="name">姓名</span><span class="content">{{studentAnswer.name}}</span></div>
      <div class="text item"><span class="name">性别</span><span class="content">{{studentAnswer.gender}}</span></div>
      <div class="text item"><span class="name">出生日期</span><span class="content">{{studentAnswer.birthday}}</span></div>
      <div class="text item"><span class="name">身份证号</span><span class="content">{{studentAnswer.idcard}}</span></div>
      <div class="text item"><span class="name">地址</span><span class="content">{{studentAnswer.address}}</span></div>
      <div class="text item"><span class="name">家长姓名</span><span class="content">{{studentAnswer.keepername}}</span></div>
      <div class="text item"><span class="name">家长关系</span><span class="content">{{studentAnswer.relation}}</span></div>
      <div class="text item"><span class="name">联系电话</span><span class="content">{{studentAnswer.phonenum}}</span></div>
    </el-card>
    <el-card class="box-card" v-show="FormVisible">
      <div slot="header" class="clearfix">
        <span class="header">学生个人信息修改</span>
        <el-button style="float: right; padding: 3px 0" type="text" disabled>修改个人信息</el-button>
      </div>
      <el-form :model="form">
        <div class="text">
          <el-form-item>
            <span class="content">姓名</span>
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">性别</span>
            <el-input v-model="form.gender" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">出生日期</span>
            <el-date-picker
              v-model="form.birthday"
              align="right"
              type="date"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">身份证号</span>
            <el-input v-model="form.idcard" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">地址</span>
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">家长姓名</span>
            <el-input v-model="form.keepername" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">家长关系</span>
            <el-input v-model="form.relation" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">联系电话</span>
            <el-input v-model="form.phonenum" auto-complete="off"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <el-button @click="FormVisible = false">取 消</el-button>
      <el-button type="primary" @click="FormVisible = false;submit()">确 定</el-button>
    </el-card>
  </div>
</template>

<style>
  .header{
    font-size: 16px;
    font-weight: bold;
  }

  .text {
    font-size: 14px;
  }

  .content{
    color: #448DB8;
  }

  .content{
    display: inline-block;
    margin-left: 20px;
  }

  .el-input{
    width: 400px;
    margin-left: 30px;
  }

  .el-input__inner{
    width: 400px;
    height: 40px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }

  .el-button{
    margin-left: 400px;
    margin-bottom: 0px!important;
  }

  .el-form-item{
    margin-bottom: 10px;
  }

</style>

<script>
import $ from 'jquery'
export default {
  name:'ManageStudent',
  data(){
    return {
      studentAnswer:{},
      FormVisible: false,
      form: {},
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      }
    }
  },
  created () {
    var url ='http://127.0.0.1:3000/student/findById';
    var vm = this;
    $.getJSON(url,{id:1},function(data){
        vm.studentAnswer = data;
        vm.form = JSON.parse(JSON.stringify(data));
    });
  },
  methods: {
    //判断两个对象是否相等
    isObjectValueEqual:function (a, b) {
        if(a.name == b.name){
          if(a.gender == b.gender){
            if(a.birthday == b.birthday){
              if(a.idcard == b.idcard){
                if(a.address == b.address){
                  if(a.keepername == b.keepername){
                    if(a.relation == b.relation){
                      if(a.phonenum == b.phonenum){
                        return true;
                      }else{
                        return false;
                      }
                    }else{
                      return false;
                    }
                  }else{
                    return false;
                  }
                }else{
                  return false;
                }
              }else{
                return false;
              }
            }else{
              return false;
            }
          }else{
            return false;
          }
        }else{
          return false;
        }
    },
    submit:function(){
      var url ='http://127.0.0.1:3000/student/update';
      var vm = this;
      delete vm.form.updatedAt;
      delete vm.studentAnswer.updatedAt;
      console.log(vm.form.gender,vm.studentAnswer.gender);
      if(vm.isObjectValueEqual(vm.form,vm.studentAnswer)){
        vm.$message({
          type: 'info',
          message : '数据未修改'
        })
      }else{
        $.post(url,vm.form,function(data){
          if(data.answer == 'success'){
            vm.$message({
                type: 'success',
                message: '操作成功!'
            });
            var url ='http://127.0.0.1:3000/student/findById';
            $.getJSON(url,{id:1},function(data){
              vm.studentAnswer = data;
              vm.form = JSON.parse(JSON.stringify(data));
            });
          }else{
            vm.$message({
              type: 'error',
              message:'数据库错误，请联系管理员！'
            })
          }
        })
      }
    }
  }
}
</script>

