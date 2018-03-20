<template>
    <div class="teacherNav">
      <!-- 体部布局开始-->
    <article class="manage_content container-fluid">
      <!-- 内容区左侧 -->
      <!-- 当屏幕大小小于768的时候，隐藏 -->
      <div class="manage_left hidden-xs" :class="collapseLeft">
        <div class="manage_left_top">
          <ul>
            <li @click="collapse"><i class="fa fa-align-justify"></i></li>
          </ul>
        </div>
        <div class="manage_left_bottom">
          <ul v-show="Visible">
            <router-link to="/teacher/manageTeacher"><li>教师管理</li></router-link>
            <router-link to="/teacher/manageStudent"><li>学生管理</li></router-link>
            <router-link to="/teacher/manageCourse"><li>课程管理</li></router-link>
            <router-link to="/teacher/manageClass"><li>班级管理</li></router-link>
          </ul>
        </div>
      </div>
      <!-- 内容区右侧 -->
      <div class="manage_right" :class="collapseRight">
        <div class="app_right_top">
          <BreadCrumb/>
        </div>
        <div class="manage_right_bottom">
          <router-view></router-view>
        </div>
      </div>
    </article>
    <!-- 体部布局结束-->
    </div>
</template>

<style scoped="scoped" lang="scss">
$bgColor:#eff3f4;
$bgColor_header:#448db8;
  // 体部样式开始
  .manage_content {
    position:absolute;
    left:0;right:0;
    top:56px;
    bottom:30px;

    .manage_left {
      position:absolute;
      top:0; bottom:0;
      left:0;
      width:230px;
      border-right:1px solid #ccc;

      .manage_left_top {
        position:absolute;
        top:0;
        left:0;right:0;
        height:3em;
        line-height:3em;
        //padding:0 1em;
        border-bottom:1px solid #ccc;

        ul {
          padding:0.25em;
          li {
            float:left;
            width:2.5em;
            height:2.5em;
            line-height:2.5em;
            text-align:center;
            color:#FFFFFF;
            border-radius:.25em;
            cursor:pointer;
            margin-right:.25em;
          }
          li:nth-child(1){
            background-color:$bgColor_header;
          }
          li:nth-child(2){
            background-color:#ffb35f;
          }
          li:nth-child(3){
            background-color:#f78989;
          }
        }
      }

      .manage_left_bottom {
        position:absolute;
        top:3em;
        bottom:0;
        left:0;right:0;
        padding:.1em 0;
        //padding:0 1em;
        ul{
          list-style: none;
          li{
            margin-top: 20px;
            font-size: 18px;
          }
        }
        .el-menu {
          border-right:none;
        }
        .el-menu--collapse {
          width:63px;
        }
      }
    }

    // 左侧动态折叠样式
    .manage_left_collapse {
      width:64px;
    }

    .manage_right {
      position:absolute;
      top:0; bottom:0;
      left:230px;
      right:0;
      // 如果屏幕大小小于768，则铺满整个屏幕
      @media screen and (max-width: 767px) {
        left:0;
      }

      .manage_right_top {
        position:absolute;
        top:0;
        left:0;right:0;
        height:3em;
        line-height:3em;
        padding:0 1em;
        border-bottom:1px solid #ccc;
      }

      .manage_right_bottom {
        background:#FFFFFF;
        position:absolute;
        top:3em;
        bottom:0;
        left:0;right:0;
        padding:1em;
      }
    }
    // 右侧动态折叠样式
    .manage_right_collapse {
      left:64px;
    }
  }
  // 体部样式结束
</style>

<script>
import BreadCrumb from '../BreadCrumb'
import Welcome from './Welcome.vue'
export default {
    name:'Teacher',
    components: {
      BreadCrumb
    },
    data() {
      return {
        isCollapse: false,
        timeout:"10",
        Visible:true
      }
    },
    computed:{
      collapseLeft (){
        return this.isCollapse?"manage_left_collapse":""
      },
      collapseRight(){
        return this.isCollapse?"manage_right_collapse":"";
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(this.isCollapse);
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(this.isCollapse);
        console.log(key, keyPath);
      },
      collapse(){
        this.isCollapse = !this.isCollapse;
        this.Visible = !this.Visible;
        //62
        if(this.isCollapse){

        }
      }
    }
}
</script>
