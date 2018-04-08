<template>
  <div class="notice">
    <div class="cen-bg w100">
      <div id="noticeInner">
        <el-table id="noticeTable"
          :data="tableData">
          <el-table-column
            prop="header"
            label="标题">
          </el-table-column>
          <el-table-column
            prop="time"
            label="创建时间"
            width="200">
          </el-table-column>
          <el-table-column
          width="200"
          label="操作">
        <template slot-scope="scope">
          <el-button @click="handle(scope.row);dialogFormVisible = true" type="text">查看</el-button>
        </template>
      </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style>
#noticeInner{
  padding-top: 20px;
  padding-bottom: 20px;
}

#noticeTable{
  padding: 20px;width:1000px;margin:0 auto;background-color: #EDFAFF;border-radius: 3px;
}
</style>


<script>
import $ from 'jquery'
export default {
  name:'NoticeAll',
  data () {
    return {
      tableData:[]
    }
  },
  created () {
    var url = 'http://127.0.0.1:3000/notice/findAll';
    var vm = this;
    $.getJSON(url,function(data){
      vm.tableData = data.rows;
      vm.tableData.forEach(function(item){
        item.time = item.createdAt.slice(0,10)
      })
    })
  },
  methods: {
    handle(row){
      this.$router.push({path:'/annouce',query:{id:row.id}});
    }
  }
}
</script>

