<template>
  <div class="user">
    <el-dropdown class="user">
      <span class="el-dropdown-link">
        <!-- <img src="@/assets/user_2.jpg"> -->
        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item divided>
          <div @click="quit()"><i class="fa fa-power-off fa-fw"></i><span>退出</span></div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style>
.user{
  z-index: 100;
  position: relative;
  float: right;
  top: -3rem;
  right: 2rem;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>


<script>
import '../../assets/css/bootstrap.min.css'
export default {
  name:'User',
  data () {
    return {
      name:''
    }
  },
  mounted () {
    this.name = sessionStorage.getItem('username');
  },
  methods: {
    quit(){
      window.location.href="http://localhost:8080/";
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('usertype');
      sessionStorage.removeItem('userId');
    }
  }
}
</script>

