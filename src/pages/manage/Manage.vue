<template>
  <div id="manage">
    <Header />
    <User />
    <Nav />
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
import Header from '../../components/index/Header'

export default {
  name:'Manage',
  components: {
    User,Header
  },
  created(){
    var vm = this;
    var usertype = sessionStorage.getItem('usertype');
    if(usertype == '管理员'){
      vm.$router.push({path:'/admin'});
    }else if(usertype == '家长'){
      vm.$router.push({path:'/student'});
    }else if(usertype == '教师'){
      vm.$router.push({path:'/teacher'});
    }else if(usertype == null){
      vm.$message({
        type:'error',
        message:'请登录！'
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
$bgColor:#eff3f4;
$bgColor_header:#005BAC;

#manage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-image: url('../../assets/img/bg.png');

  ul {
    margin:0;padding:0;
    list-style:none;
  }
  // 底部样式开始
  .footer {
    position: fixed;
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
