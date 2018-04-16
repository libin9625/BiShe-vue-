<template>
  <div>
    <div class="nav" v-show="NavShow">
      <i class="fa fa-angle-double-left fa-2x" style="margin:8px;float:right;margin-right:2rem" @click="handleHidden()" v-show="NavShow"></i>
      <ul>
        <router-link to="/admin/manageTeacher">
          <li>
            <img src="../../../assets/img/11 (1).png" alt="">
            <span>教师管理</span>
          </li>
        </router-link>
        <router-link to="/admin/manageStudent">
          <li>
            <img src="../../../assets/img/11 (2).png" alt="">
            <span>幼儿管理</span>
          </li>
        </router-link>
        <router-link to="/admin/manageCourse">
          <li>
            <img src="../../../assets/img/11 (3).png" alt="">
            <span>课程管理</span>
          </li>
        </router-link>
        <router-link to="/admin/manageClass">
          <li>
            <img src="../../../assets/img/11 (4).png" alt="">
            <span>班级管理</span>
          </li>
        </router-link>
        <router-link to="/admin/notice">
          <li>
            <img src="../../../assets/img/11 (5).png" alt="">
            <span>公告管理</span>
          </li>
        </router-link>
        <router-link to="/admin/data">
          <li>
            <img src="../../../assets/img/11 (6).png" alt="">
            <span>数据分析</span>
          </li>
        </router-link>
      </ul>
    </div>

    <div class="hiddenNav" v-show="!NavShow">
      <i class="fa fa-angle-double-right fa-2x" style="margin-left:3rem;margin-top:1rem" @click="handleShow()" v-show="!NavShow"></i>
      <ul>
        <router-link to="/admin/manageTeacher">
          <li>
            <img src="../../../assets/img/11 (1).png" alt="">
          </li>
        </router-link>
        <router-link to="/admin/manageStudent">
          <li>
            <img src="../../../assets/img/11 (2).png" alt="">
          </li>
        </router-link>
        <router-link to="/admin/manageCourse">
          <li>
            <img src="../../../assets/img/11 (3).png" alt="">
          </li>
        </router-link>
        <router-link to="/admin/manageClass">
          <li>
            <img src="../../../assets/img/11 (4).png" alt="">
          </li>
        </router-link>
        <router-link to="/admin/notice">
          <li>
            <img src="../../../assets/img/11 (5).png" alt="">
          </li>
        </router-link>
        <router-link to="/admin/data">
          <li>
            <img src="../../../assets/img/11 (6).png" alt="">
          </li>
        </router-link>
      </ul>
    </div>
    <div :class="rightBottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.nav,.hiddenNav{
  background-color: #EDFAFF;
  width: 22rem;
  height: 60rem;
  position: absolute;
  top: 11rem;
  bottom: 0;
  left: 0;
  box-shadow:0px 0px 5px #005BAC;
  /* right: 0; */
}

.nav ul{
  position: relative;
  top: 3.5rem;
}

.nav ul li{
  padding: 1rem;
  padding-left: 3rem;
  list-style: none;
  display: block;
  margin-top: 1rem;
  border-radius: 100px;
}

.nav ul li:hover,.hiddenNav ul li:hover{
  background-color: #70BF44;
}

.nav ul li span{
  /* float: left; */
  font-size: 20px;
  position: relative;
  top: 0.5rem;
  left: 1rem;
}

.hiddenNav{
  width: 8rem;
}

.hiddenNav ul{
  position: relative;
  top: 1rem;
}

.hiddenNav ul li{
  padding: 1rem;
  padding-left: 1.75rem;
  border-radius: 50px;
}

.right-bottom-show{
  position: absolute;
  top:11rem;
  left: 22rem;
  padding: 2rem;
  width: 85%;
  overflow-y: scroll;
  height: 60rem;
}

.right-bottom-hidden{
  position: absolute;
  top:11rem;
  left: 8rem;
  padding: 2rem;
  width: 94.7%;
  overflow-y: scroll;
  height: 60rem;
}
</style>

<script>
import 'font-awesome/css/font-awesome.css'
export default {
  name:'TeacherNav',
  data () {
    return {
      NavShow : true,
      rightBottom:'right-bottom-show',
    }
  },
  methods: {
    handleHidden(){
      this.NavShow = false;
      this.rightBottom = 'right-bottom-hidden'
    },
    handleShow(){
      this.NavShow = true;
      this.rightBottom = 'right-bottom-show'
    }
  }
}
</script>
