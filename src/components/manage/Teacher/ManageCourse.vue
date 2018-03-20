<template>
  <div class="manageStduent">
    <el-button type="text" @click="dialogFormVisibleSave = true">添加课程信息</el-button>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="description"
        label="课程描述">
      </el-table-column>
      <el-table-column
        prop="price"
        label="课程价格">
      </el-table-column>
      <el-table-column
        prop="period"
        label="课程时长">
      </el-table-column>
      <!-- <el-table-column
        prop="phonenum"
        label="联系电话">
      </el-table-column> -->
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
    <el-dialog title="修改课程信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程时长" :label-width="formLabelWidth">
          <el-input v-model="form.period" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit();dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加课程信息" :visible.sync="dialogFormVisibleSave">
      <el-form :model="formSave">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="formSave.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程描述" :label-width="formLabelWidth">
          <el-input v-model="formSave.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程价格" :label-width="formLabelWidth">
          <el-input v-model="formSave.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程时长" :label-width="formLabelWidth">
          <el-input v-model="formSave.period" auto-complete="off"></el-input>
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
    }
  },
  created () {
    var url ='http://127.0.0.1:3000/course/findAll';
    var vm = this;
    $.getJSON(url,function(data){
      vm.tableData = data.rows;
      vm.total = data.rows.length;
    });
  },
  methods: {
    current_change:function(currentPage){
      this.currentPage = currentPage;
    },
    handleDeleteShow(row){
      var vm = this;
      vm.id = row.id;
    },
    handleDelete() {
      var url = 'http://127.0.0.1:3000/course/delete';
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
        var url ='http://127.0.0.1:3000/course/findAll';
        $.getJSON(url,function(data){
          vm.tableData = data.rows;
          vm.total = data.rows.length;
        });
      })
    },
    handleChange(row){
      var vm = this;
      vm.form = JSON.parse(JSON.stringify(row));//深复制
    },
    handleSubmit() {
      var url = 'http://127.0.0.1:3000/course/update';
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
        var url ='http://127.0.0.1:3000/course/findAll';
        $.getJSON(url,function(data){
          vm.tableData = data.rows;
          vm.total = data.rows.length;
        });
      })
    },
    handleSubmitSave(){
      var url = 'http://127.0.0.1:3000/course/save';
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
        var url ='http://127.0.0.1:3000/course/findAll';
        $.getJSON(url,function(data){
          vm.tableData = data.rows;
          vm.total = data.rows.length;
        });
      })
    }
  },
}
</script>
