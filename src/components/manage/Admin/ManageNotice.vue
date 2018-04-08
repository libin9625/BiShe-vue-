<template>
  <div class="manageClass">
    <router-link to="/admin/noticeAdd"><el-button type="text">添加公告</el-button></router-link>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%">
      <el-table-column
        prop="header"
        label="公告题目">
      </el-table-column>
      <el-table-column
        prop="type"
        label="公告类别">
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="公告创建时间">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
        <template slot-scope="scope">
          <router-link to="/admin/noticeUpdate"><el-button type="text" @click="handleUpdate(scope.row)">修改</el-button></router-link>
          <el-button type="text" @click="handleDeleteShow(scope.row);dialogVisible = true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
import store from '../../store'
export default {
  name:'ManageClass',
  data() {
    return {
      tableData: [],
      total:0,
      pagesize:6,
      currentPage:1,
      dialogVisible: false,
      id:'',
      createdTime:''
    }
  },
  created () {
    var url ='http://127.0.0.1:3000/notice/findAll';
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
      var url = 'http://127.0.0.1:3000/notice/delete';
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
            message:'操作失败,无法删除'
          })
        }
        var url ='http://127.0.0.1:3000/notice/findAll';
        $.getJSON(url,function(data){
          vm.tableData = data.rows;
          vm.total = data.rows.length;
        });
      })
    },
    handleUpdate(row){
      var vm = this;
      vm.id = row.id;
      this.$store.state.count = row.id;
      // console.log(this.$store.state.count);
    }
  }
}
</script>
