<template>
    <div class="level-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in realList" :key="item.name" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
      name: "BreadCrumb",
      created(){
        this.getRoutePath();
      },
      data() {
        return {
          realList: []
        }
      },
      methods:{
        getRoutePath() {
          this.realList = this.$route.meta.routeList;
        }
      },
      beforeRouteEnter(to,from, next) {
        next((vm) => {
          vm.realList = to.meta.routeList;
        });
      },
      // watch:{
      //   $route:function(newV,oldV) {
      //     this.realList =newV.meta.routeList;
      //   }
      // }
    }
</script>
