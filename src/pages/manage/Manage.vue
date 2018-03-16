<template>
  <div id="manage">
    <header class="header container-fluid">
      <div class="row">
        <div class="logo col-sm-6 ">
          <i class="fa fa-book fa-2x"></i>
          <a href="#">兰州理工大学幼儿园管理系统</a>
        </div>
        <div class="info col-sm-6 hidden-xs">
          <User/>
        </div>
      </div>
    </header>
    <!-- 头部布局结束 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部布局开始-->
    <footer class="footer">
      <div>版权所有：李水灵团队制作</div>
    </footer>
    <!-- 底部布局结束-->
  </div>
</template>

<script>
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import User from '../../components/manage/User'

export default {
  name:'Manage',
  components: {
    User
  }
}
</script>

<style scoped="scoped" lang="scss">
$bgColor:#eff3f4;
$bgColor_header:#448db8;

#manage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: $bgColor;

  ul {
    margin:0;padding:0;
    list-style:none;
  }
  // 头部样式开始
  .header {
    position:absolute;
    left:0;right:0;
    background-color:$bgColor_header;
    padding:0 2em;
    color:#FFFFFF;
    * {
      line-height:56px;
      height:56px;
    }
    .logo{
      text-align:left;
      font-size:1.5em;
      a {
        text-decoration: none;
        color:#FFFFFF;
      }
    }
    .info {
      text-align:right;
      .user {
        cursor:pointer;
        .el-dropdown-link {
          color:#FFFFFF;
        }
        img{
          height:2.5em;
          width:2.5em;
          border-radius:50%;
          background-color:#FFFFFF;
          margin:0 .5em;
        }
      }
    }
  }
  // 头部样式结束
  // 底部样式开始
  .footer {
    position:absolute;
    background-color:$bgColor_header;
    left:0;right:0;
    bottom:0;
    height:30px;
    line-height:30px;
    text-align:center;
    color:#FFFFFF;
  }
  // 底部样式结束
}
</style>
