<template>
  <div class="frameAddress">
        <!-- banner -->
        <div class="banner w100">
            <img src="../assets/img/xt1.png" width="1920" height="90">    
            <div class="live">
                <div class="live1">
                    <span>当前位置：</span>
                    <router-link to="/"  @click.native="flushCom"><a href="">首页</a></router-link>
                    <span>></span>
                    <slot name="currentPath">
                        <!-- <router-link :to="addressPath"><a href="">{{address}}</a></router-link>
                        <span>></span> -->
                    </slot>
                </div>
            </div>
        </div>
        <!-- banner -->
  </div>
</template>

<script>
export default {
    name: 'frameAddress',
    // props:['address','addressPath'],
    methods:{
　　　　 flushCom:function(){
　　　　　　 this.$router.go(0);  //强制进行刷新加载js代码
　　　　 }
　　}
}
</script>

