<template>
  <div class="user">
    <el-dropdown class="user">
      <span class="el-dropdown-link">
        <!-- <img src="@/assets/user_2.jpg"> -->
        i35153<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="fa fa-exclamation-circle fa-fw"></i>待办事宜</el-dropdown-item>
        <el-dropdown-item><i class="fa fa-commenting-o fa-fw"></i>通知</el-dropdown-item>
        <el-dropdown-item divided>
          <i class="fa fa-power-off fa-fw"></i>退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import '../../assets/css/bootstrap.min.css'
export default {
  name:'User'
}
</script>

