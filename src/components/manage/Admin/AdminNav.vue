<template>
    <div class="adminNav">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="background-color:#eff3f4"></el-tree>
    </div>
</template>

<script>
export default {
  name:'AdminNav',
   data() {
      return {
        data: [{
          label: '教师管理',
          children: [{
            label: '查询教师信息',
          },
          {
            label: '增加教师信息'
          },{
            label: '修改教师信息'
          },{
            label: '删除教师信息'
          }]
        }, {
          label: '学生管理',
          children: [{
            label: '查询学生信息',
          }, {
            label: '增加学生信息',
          },{
            label: '修改学生信息',
          },{
            label: '删除学生信息',
          }]
        }, {
          label: '课程管理',
          children: [{
            label: '查询课程信息',
          }, {
            label: '增加课程信息',
          },{
            label: '修改课程信息',
          },{
            label: '删除课程信息',
          }]
        },{
          label: '班级管理',
          children: [{
            label: '查询班级信息',
          }, {
            label: '增加班级信息',
          },{
            label: '修改班级信息',
          },{
            label: '删除班级信息',
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

