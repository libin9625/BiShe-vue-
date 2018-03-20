<template>
  <div class="manageTeacher">
    <el-card class="box-card"  v-show="!FormVisible">
      <div slot="header" class="clearfix">
        <span class="header">班主任个人信息</span>
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
    }
  },
  created () {
    var url ='http://127.0.0.1:3000/teacher/findById';
    var vm = this;
    $.getJSON(url,{id:1},function(data){
        vm.teacherAnswer = data;
        vm.form = JSON.parse(JSON.stringify(data));
    });
  }
}
</script>

