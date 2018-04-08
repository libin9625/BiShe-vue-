<style>
#loginContent{padding-top: 20px;padding-bottom: 20px;}
#loginForm{padding: 20px;width:500px;margin:0 auto;background-color: #EDFAFF;border-radius: 3px;}
</style>

<template>
    <div id="login">
        <div class="cen-bg w100">
            <div id="loginContent">
                <el-form id="loginForm" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="number">
                        <el-input v-model.number="ruleForm.number"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="选择登陆身份" prop="identity">
                        <el-radio-group v-model="ruleForm.identity">
                            <el-radio label="家长"></el-radio>
                            <el-radio label="教师"></el-radio>
                            <el-radio label="管理员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item style="margin-left:50px;">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

export default {
    name: 'Login',
    data() {
        return {
            ruleForm: {
                pass: '',
                number: '',
                identity: ''
            },
            rules: {
                pass: [
                    { required:true, message: '请输入密码！', trigger: 'blur'}
                ],
                number: [
                    { required:true, message: '请输入账号！', trigger: 'blur'}
                ],
                identity:[
                    { required: true, message: '请选择登录身份！', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            var vm = this;
            var url = 'http://localhost:3000/user/findById';
            $.getJSON(url,{id:vm.ruleForm.number},function(data){
              document.cookie = data.id;
              sessionStorage.setItem('username', data.username);
              sessionStorage.setItem('usertype',data.usertype);
              sessionStorage.setItem('userId',data.id);
              // console.log(sessionStorage.getItem('name'));
              if(vm.ruleForm.identity == data.usertype){
                if(vm.ruleForm.pass== data.password){
                  vm.$message({
                    type:'success',
                    message:'登陆成功'
                  })
                  window.location.href="http://localhost:8080/manage.html";
                }else{
                  vm.$message({
                    type:'warning',
                    message:'密码错误'
                  })
                }
              }else{
                vm.$message({
                  type:'warning',
                  message:'身份验证错误'
                })
              }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

