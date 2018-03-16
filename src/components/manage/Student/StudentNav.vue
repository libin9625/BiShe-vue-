<template>
    <div class="studentNav">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background-color:#eff3f4"></el-tree>
    </div>
</template>

<script>
export default {
  name:'StudentNav',
   data() {
      return {
        data: [{
          label: '学生管理',
          children: [{
            label: '查看个人信息',
          },
          {
            label: '修改个人信息'
          }]
        }, {
          label: '教师信息',
          children: [{
            label: '查询教师信息',
          }]
        }, {
          label: '课程信息',
          children: [{
            label: '查询课程信息',
          }]
        },{
          label: '班级信息',
          children: [{
            label: '查看班级信息',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
}
</script>

