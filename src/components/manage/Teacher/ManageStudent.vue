<template>
  <div class="manageStduent">
    <el-button type="text" @click="dialogFormVisibleSave = true">添加学生信息</el-button>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期">
      </el-table-column>
      <el-table-column
        prop="idcard"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="keepername"
        label="家长姓名">
      </el-table-column>
      <el-table-column
        prop="relation"
        label="家长关系">
      </el-table-column>
      <el-table-column
        prop="phonenum"
        label="联系电话">
      </el-table-column>
      <el-table-column
      prop="className"
      label="所在班级">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
        <template slot-scope="scope">
          <el-button @click="handleChange(scope.row);dialogFormVisible = true" type="text">修改</el-button>
          <el-button type="text" @click="handleDeleteShow(scope.row);dialogVisible = true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改学生信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.birthday"
              align="right"
              type="date"
              :picker-options="pickerOptions1">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="form.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家长姓名" :label-width="formLabelWidth">
          <el-input v-model="form.keepername" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家长关系" :label-width="formLabelWidth">
          <el-input v-model="form.relation" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.phonenum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在班级" :label-width="formLabelWidth">
          <el-select v-model="form.classId">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit();dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加学生信息" :visible.sync="dialogFormVisibleSave">
      <el-form :model="formSave">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="formSave.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="formSave.gender">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
            <el-date-picker
              v-model="formSave.birthday"
              align="right"
              type="date"
              :picker-options="pickerOptions1">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="formSave.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="formSave.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家长姓名" :label-width="formLabelWidth">
          <el-input v-model="formSave.keepername" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="家长关系" :label-width="formLabelWidth">
          <el-input v-model="formSave.relation" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="formSave.phonenum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在班级" :label-width="formLabelWidth">
          <el-select v-model="form.classId">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSave = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmitSave();dialogFormVisibleSave = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确认删除这条信息？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDelete();dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="total" :page-size="pagesize" @current-change="current_change">
    </el-pagination>
  </div>
</template>

<style>
.el-button{
  margin-left: 0px!important;
}
</style>


<script>
import $ from 'jquery'
export default {
  name:'ManageStudent',
  data() {
    return {
      tableData: [],
      total:0,
      pagesize:6,
      currentPage:1,
      dialogFormVisible:false,
      dialogFormVisibleSave:false,
      dialogVisible: false,
      form: {},
      formSave:{},
      id:'',
      formLabelWidth: '120px',
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      options:[]
    }
  },
  created () {
    this.updated();
  },
  methods: {
    updated(){
      var vm = this;
      vm.tableData.length = 0;
      vm.options.length = 0;
      var urlNew = 'http://127.0.0.1:3000/class/findAll';
      $.getJSON(urlNew,function(data){
        data.rows.forEach(function(item){
          vm.options.push({label:item.name,value:item.id});
        })
      })
      var url ='http://127.0.0.1:3000/student/findAll';
      $.getJSON(url,function(data){
        vm.total = data.rows.length;
        data.rows.forEach(function(item){
          var classId = item.classId;
          vm.options.forEach(function(i){
            if(i.value == item.classId){
              item.className = i.label
            }
          })
          vm.tableData.push(item);
        })
      })
    },
    current_change:function(currentPage){
      this.currentPage = currentPage;
    },
    handleDeleteShow(row){
      var vm = this;
      vm.id = row.id;
    },
    handleDelete() {
      var url = 'http://127.0.0.1:3000/student/delete';
      var vm = this;
      $.getJSON(url,{id:vm.id},function(data){
        if(data.answer == 'success'){
          vm.$message({
            type:'success',
            message:'成功删除一条数据'
          })
        }else{
          vm.$message({
            type:'error',
            message:'操作失败'
          })
        }
        vm.updated();
      })
    },
    handleChange(row){
      var vm = this;
      vm.form = JSON.parse(JSON.stringify(row));//深复制
    },
    handleSubmit() {
      var url = 'http://127.0.0.1:3000/student/update';
      var vm = this;
      delete vm.form.updatedAt;
      $.post(url,vm.form,function(data){
        if(data.answer == 'success'){
          vm.$message({
            type:'success',
            message:'成功修改一条数据'
          })
        }else{
          vm.$message({
            type:'error',
            message:'操作失败'
          })
        }
        vm.updated();
      })
    },
    handleSubmitSave(){
      var url = 'http://127.0.0.1:3000/student/save';
      var vm = this;
      $.post(url,vm.formSave,function(data){
        if(data.answer == 'success'){
          vm.$message({
            type:'success',
            message:'成功添加一条数据'
          })
        }else{
          vm.$message({
            type:'error',
            message:'操作失败'
          })
        }
        vm.updated();
      })
    }
  },
}
</script>
