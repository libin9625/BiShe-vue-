<style>
#loginContent{padding-top: 20px;padding-bottom: 20px;}
#loginForm{padding: 20px;width:500px;margin-left:480px;background-color: #EDFAFF;border-radius: 3px;}
</style>

<template>
    <div id="login">
        <div class="cen-bg w100">
            <div id="loginContent">
                <el-form id="loginForm" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="学号" prop="number">
                        <el-input v-model.number="ruleForm2.number"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="选择登陆身份" prop="identity">
                        <el-radio-group v-model="ruleForm2.identity">
                            <el-radio label="家长"></el-radio>
                            <el-radio label="教师"></el-radio>
                            <el-radio label="管理员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item style="margin-left:50px;">
                        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
        var checkName = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请输入学号!'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入正确的学号！'));
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码！'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        return {
            ruleForm2: {
                pass: '',
                number: '',
                identity: ''
            },
            rules2: {
                pass: [
                    { required:true, validator: validatePass,  trigger: 'blur'}
                ],
                number: [
                    { required:true, validator: checkName, trigger: 'blur'}
                ],
                identity:[
                    { required: true, message: '请选择登录身份！', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

    