<template>
    <div id="welcome">
        <i class="fa fa-user-circle-o fa-3x welcome-font"></i>
        <a class="welcome-font">{{name}}</a>
        <span class="welcome-font">{{usertype}}</span>
        <br>
        <span class="welcome-font">欢迎您的登录！</span>
    </div>
</template>

<style>
  #welcome .welcome-font{
      position: relative;
      top: 20rem;
      left: 48rem;
      font-size: 20px;
  }
  #welcome{
    background-image: url("../../assets/img/9c4c269898d854f7c47c4bc25e0afa02.png");
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position-x: right;
    width: 100%;
    height: 100%;
  }
</style>


<script>
export default {
  name:'Welcome',
  data () {
    return {
      name:'',
      usertype:''
    }
  },
  mounted () {
    this.name = sessionStorage.getItem('username');
    this.usertype = sessionStorage.getItem('usertype');
  }
}
</script>

