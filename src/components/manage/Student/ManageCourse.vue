<template>
  <div class="manageCourse">
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
    </el-table>
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
      id:''
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
    }
  }
}
</script>
