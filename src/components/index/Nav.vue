<template>
    <div class="navOuter">
        <!-- nav start -->
        <div id="nav" class="nav-bg w100">
            <div class="nav">
                <ul class="navbar">
                    <li>
                        <div class="nav-hh">
                            <router-link to="/" @click.native="flushCom">
                                <a href="index.html" title="首页">
                                    <div class="nav-img bi1">
                                        <img src="../../assets/img/i0.png">
                                    </div>
                                    <div class="nav-h">首页</div>
                                </a>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <router-link to="jdxw">
                                <a href="javascript:void(0)" title="焦点新闻">
                                    <div class="nav-img bi2">
                                        <img src="../../assets/img/i1.png">
                                    </div>
                                    <div class="nav-h">焦点新闻</div>
                                </a>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <router-link to="ysjs">
                                <a href="javascript:void(0)" title="园所介绍">
                                    <div class="nav-img bi2">
                                        <img src="../../assets/img/i2.png">
                                    </div>
                                    <div class="nav-h">园所介绍</div>
                                </a>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                          <router-link to="">
                            <a title="幼儿园公告">
                                <div class="nav-img bi4">
                                    <img src="../../assets/img/i3.png">
                                </div>
                                <div class="nav-h">幼儿园公告</div>
                            </a>
                          </router-link>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <router-link :to="{path:'/annouce',query:{id:28}}"><li><a>幼儿一日生活作息安排</a> </li></router-link>
                                <router-link :to="{path:'/annouce',query:{id:29}}"><li><a>园本课程</a></li></router-link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                          <router-link to="">
                            <a href="wsbj.html" title="卫生保健">
                                <div class="nav-img bi5">
                                    <img src="../../assets/img/i4.png">
                                </div>
                                <div class="nav-h">卫生保健</div>
                            </a>
                          </router-link>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <router-link :to="{path:'/annouce',query:{id:19}}"><li><a>保健宣传</a></li></router-link>
                                <router-link :to="{path:'/annouce',query:{id:4}}"><li><a>幼儿饮食</a></li></router-link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                          <router-link to="">
                            <a href="jygy.html" title="家园共育">
                                <div class="nav-img bi6">
                                    <img src="../../assets/img/i5.png">
                                </div>
                                <div class="nav-h">家园共育</div>
                            </a>
                          </router-link>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <router-link :to="{path:'/annouce',query:{id:24}}"><li><a>各部门电话</a></li></router-link>
                                <router-link :to="{path:'/annouce',query:{id:29}}"><li><a>家长学校</a></li></router-link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                          <router-link to="/noticeAll">
                            <a href="zjjd.html" title="早教基地">
                                <div class="nav-img bi7">
                                    <img src="../../assets/img/i6.png">
                                </div>
                                <div class="nav-h">所有公告</div>
                            </a>
                          </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- nav end -->
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'Nav',
    methods:{
　　　　flushCom:function(){
　　　　　　this.$router.go(0);  //强制进行刷新加载js代码
　　　　}
　　}
}
$(document).ready(function () {
    $(window).scroll(function () {
        var top=$(window).scrollTop();
		//alert(top);
		if(top>50){
			$("#nav").addClass("nav-dw");
		}
		if(top<=50){
			$("#nav").removeClass("nav-dw");
		}
	})
})
</script>

