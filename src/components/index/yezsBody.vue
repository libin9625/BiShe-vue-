<style>
#submitContent{padding-top: 20px;padding-bottom: 20px;}
#submitForm{padding: 20px;width:500px;margin: 0 auto;background-color: #EDFAFF;border-radius: 3px;}
.avatar-uploader .el-upload{margin-left:40px;border: 1px dashed #d9d9d9;border-radius: 6px;cursor: pointer;position: relative;overflow: hidden;}
.avatar-uploader .el-upload:hover {border-color: #409EFF;}
.avatar-uploader-icon {font-size: 28px;color: #8c939d;width: 178px;height: 178px;line-height: 178px;text-align: center;}
.avatar {width: 178px;height: 178px;display: block;}
.attention{color: red;font-size: 15px;text-align: center;margin: 25px;}
</style>

<template>
    <div id="submit">
        <div class="cen-bg w100">
            <div id="submitContent">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm" id="submitForm">
                    <el-form-item label="幼儿姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="幼儿性别" prop="gender">
                        <el-radio-group v-model="ruleForm.gender">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生年月" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="上传幼儿证件照片" required style="float:left"></el-form-item>
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-form-item label="家长姓名" prop="parentName">
                        <el-input v-model="ruleForm.parentName"></el-input>
                    </el-form-item>
                    <el-form-item label="家长联系电话" prop="phone">
                        <el-input v-model.number="ruleForm.phone" ></el-input>
                    </el-form-item>
                    <el-form-item label="家长备注" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                    <div class="attention">注意：如果信息审核成功，教师会与你进行联系并确定身份信息，请耐心等候！</div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import {isvalidPhone} from '../../assets/js/validate'

var validPhone=(rule, value,callback)=>{
    if (!value){
        callback(new Error('请输入电话号码'))
    }else  if (!isvalidPhone(value)){
    callback(new Error('请输入正确的11位手机号码'))
    }else {
        callback()
    }
}

export default {
    name: 'yezsBody',
    data() {
        return {
            imageUrl: '',
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                gender: '',
                desc: '',
                phone: '',
                parentName: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入幼儿姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                parentName: [
                    { required: true, message: '请输入家长姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择幼儿性别', trigger: 'change' }
                ],
                phone: [
                    { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
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
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

