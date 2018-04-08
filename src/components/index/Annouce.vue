<template>
  <div class="annouce">
    <div class="cen-bg w100">
      <div style="padding:2rem">
        <div class="annouceContent">
          <h2>{{header}}</h2>
          <h5 style="margin-top:1rem">{{createdTime}}</h5>
          <div class="annouceInner" v-html="content" style="margin-top:1rem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.annouceContent{
  width: 48rem;
  background-color: #EDFAFF;
  margin: 0 auto;
  padding: 3rem;
}
</style>

<script>
export default {
  name:'Annouce',
  data(){
    return {
      header:'',
      createdTime:'',
      content:''
    }
  },
  created () {
    this.getDetail();
  },
  watch: {
    '$route':['getDetail']
  },
  methods: {
    getDetail(){
      var vm = this;
      var url = 'http://localhost:3000/notice/findById';
      var id = this.$route.query.id;
      $.getJSON(url,{id,id},function(data){
        vm.content = data.content;
        vm.header = data.header;
        vm.createdTime = data.createdAt.slice(0,10);
      })
    }
  }
}
</script>
