<template>
  <div class="manageTeacher">
    <el-card class="box-card"  v-show="!FormVisible">
      <div slot="header" class="clearfix">
        <span class="header">教师个人信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="FormVisible = !FormVisible">修改个人信息</el-button>
      </div>
      <div class="text item"><span class="name">姓名</span><span class="content">{{teacherAnswer.name}}</span></div>
      <div class="text item"><span class="name">性别</span><span class="content">{{teacherAnswer.gender}}</span></div>
      <div class="text item"><span class="name">出生日期</span><span class="content">{{teacherAnswer.birthday}}</span></div>
      <div class="text item"><span class="name">身份证号</span><span class="content">{{teacherAnswer.idcard}}</span></div>
      <div class="text item"><span class="name">民族</span><span class="content">{{teacherAnswer.nation}}</span></div>
      <div class="text item"><span class="name">政治面貌</span><span class="content">{{teacherAnswer.political}}</span></div>
      <div class="text item"><span class="name">最高学历</span><span class="content">{{teacherAnswer.credit}}</span></div>
      <div class="text item"><span class="name">毕业院校</span><span class="content">{{teacherAnswer.school}}</span></div>
      <div class="text item"><span class="name">联系电话</span><span class="content">{{teacherAnswer.phonenum}}</span></div>
    </el-card>
    <el-card class="box-card" v-show="FormVisible">
      <div slot="header" class="clearfix">
        <span class="header">教师个人信息修改</span>
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
            <span class="content">民族</span>
            <el-input v-model="form.nation" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">政治面貌</span>
            <el-select v-model="form.political">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">最高学历</span>
            <el-input v-model="form.credit" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="text">
          <el-form-item>
            <span class="content">毕业院校</span>
            <el-input v-model="form.school" auto-complete="off"></el-input>
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
  }

  .el-form-item{
    margin-bottom: 10px;
  }

</style>

<script>
import $ from 'jquery'
export default {
  name:'ManageTeacher',
  data(){
    return {
      teacherAnswer:{},
      FormVisible: false,
      form: {},
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      options:[
        {
          label:'中共党员',
          value:'中共党员'
        },{
          label:'中共预备党员',
          value:'中共预备党员'
        },{
          label:'群众',
          value:'群众'
        }
      ]
    }
  },
  created () {
    var url ='http://127.0.0.1:3000/teacher/findById';
    var vm = this;
    $.getJSON(url,{id:1},function(data){
        vm.teacherAnswer = data;
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
                if(a.nation == b.nation){
                  if(a.political == b.political){
                    if(a.credit == b.credit){
                      if(a.school == b.school){
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
      var url ='http://127.0.0.1:3000/teacher/update';
      var vm = this;
      delete vm.form.updatedAt;
      delete vm.teacherAnswer.updatedAt;
      console.log(vm.form.gender,vm.teacherAnswer.gender);
      if(vm.isObjectValueEqual(vm.form,vm.teacherAnswer)){
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
            var url ='http://127.0.0.1:3000/teacher/findById';
            $.getJSON(url,{id:1},function(data){
              vm.teacherAnswer = data;
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

