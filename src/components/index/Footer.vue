<template>
  <div class="footer">
      <!-- footer start -->
    <div class="foot-bg w100">
        <div class="foot">
            <span>地址：甘肃省兰州七里河区兰工坪路287号</span>
            <span>邮编：730050</span>
            <span>电话：0931-1234567</span>
            <span>电子邮箱:lzlgdxyey@edu.com</span>
        </div>
        <div class="f-txt w1000">
            <span>兰ICP备XXXXXXX</span>
            <span>文保网安备案号XXXXXXXXXXX</span>XXXXXXXXXXX
            <span>建设维护：网络信息中心</span>
        </div>
    </div>
    <!-- footer end -->

    <!--漂浮快捷块-->
    <div class="btn">
        <ul>
            <!-- <script language="javascript" src="system/resource/js/openlink.js"></script> -->
            <a href="http://www.gsut.edu.cn/w/" title="">
                <li>
                    <div class="btn-i"><img src="../../assets/img/c1.png"></div>
                    <a href="javascript:void(0)" title="">兰理官网</a>
                </li>
            </a>
            <router-link to="login">
                <li>
                    <div class="btn-i"><img src="../../assets/img/c2.png"></div>
                    <a href="javascript:void(0)" title="">用户登录</a>
                </li>
            </router-link>
        </ul>
        <div class="btn-a">
            <div class="ewm"></div>
            <div class="top-bt">
                <a href="javascript:scroll(0,0)"></a>
            </div>
        </div>
    </div>
    <!--漂浮快捷块-->
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

