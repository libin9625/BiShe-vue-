<template>
    <div class="header">
        <!-- top start -->
        <div class="top-bg w100">
            <div class="top w1000">
                <div class="logo fl">
                <a href="" title="兰州理工大学幼儿园">
                    <img src="../assets/img/logo.png" width="320" height="240" border="0" alt="兰州理工大学幼儿园" title="兰州理工大学幼儿园">
                </a>
                </div>
                <div class="top-r fr">
                    <div class="top-a">
                        <a onclick="javascript:dosuba194642a();" href="#" style="TEXT-DECORATION: none">
                            <span style="TEXT-DECORATION: none;COLOR: #fff;FONT-SIZE: 12px">添加收藏</span>
                        </a>
                        <a href="javascript:setHomepagea194642a()" style="TEXT-DECORATION: none">
                            <span style="COLOR: #fff;FONT-SIZE: 12px">设为主页</span>
                        </a><!--#endeditable-->
                    </div>
                    <div class="form"><!--#begineditable viewid="194643" name="全文检索"-->
                        <form action="zzzsearch.jsp?wbtreeid=1042" method="post" id="au2a" name="au2a" onsubmit="return _nl_ys_check()" style="display: inline">
                            <input type="hidden" id="lucenenewssearchkeyword194643" name="lucenenewssearchkeyword" value="">
                            <input type="hidden" id="_lucenesearchtype194643" name="_lucenesearchtype" value="1">
                            <input type="hidden" id="searchScope194643" name="searchScope" value="0">
                            <div style="margin:0px;display:inline;font-family:宋体;font-size:12px">
                                <input class="search-left fl" name="showkeycode" id="showkeycode194643">
                                <input id="pathInput" class="search-right fr" type="button">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- top end -->

        <!-- nav start -->
        <div id="nav" class="nav-bg w100">
            <div class="nav">
                <ul class="navbar">
                    <li>
                        <div class="nav-hh">
                            <router-link to="/" @click.native="flushCom">
                                <a href="index.html" title="首页">
                                    <div class="nav-img bi1">
                                        <img src="../assets/img/i0.png">
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
                                        <img src="../assets/img/i1.png">
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
                                        <img src="../assets/img/i2.png">
                                    </div>
                                    <div class="nav-h">园所介绍</div>
                                </a>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <a href="bybj.html" title="保育保教">
                                <div class="nav-img bi4">
                                    <img src="../assets/img/i3.png">
                                </div>
                                <div class="nav-h">保育保教</div>
                            </a>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <li><a href="bybj/yeyrshzxap.htm" title="幼儿一日生活作息安排">幼儿一日生活作息安排</a> </li>
                                <li><a href="bybj/ybkcjjky.htm" title="园本课程及教科研">园本课程及教科研</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <a href="wsbj.html" title="卫生保健">
                                <div class="nav-img bi5">
                                    <img src="../assets/img/i4.png">
                                </div>
                                <div class="nav-h">卫生保健</div>
                            </a>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <li><a href="wsbj/bjxc.htm" title="保健宣传">保健宣传</a> </li>
                                <li><a href="wsbj/yeys.htm" title="幼儿饮食">幼儿饮食</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <a href="jygy.html" title="家园共育">
                                <div class="nav-img bi6">
                                    <img src="../assets/img/i5.png">
                                </div>
                                <div class="nav-h">家园共育</div>
                            </a>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <li><a href="jygy/gbmdh.html" title="各部门电话">各部门电话</a> </li>
                                <li><a href="jygy/jzxx.html" title="家长学校">家长学校</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <a href="zjjd.html" title="早教基地">
                                <div class="nav-img bi7">
                                    <img src="../assets/img/i6.png">
                                </div>
                                <div class="nav-h">早教基地</div>
                            </a>
                        </div>
                        <div class="nav-son">
                        <ul>
                            <li><a href="zjjd/jdjs.html" title="基地介绍">基地介绍</a> </li>
                            <li><a href="zjjd/kxye.html" title="科学育儿">科学育儿</a> </li>
                            <li><a href="zjjd/sqhd.html" title="社区活动">社区活动</a> </li>
                        </ul></div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <router-link to="yezs">
                                <a href="" title="幼儿招生">
                                    <div class="nav-img bi8">
                                        <img src="../assets/img/i7.png">
                                    </div>
                                    <div class="nav-h">幼儿招生</div>
                                </a>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-hh">
                            <a href="jzxz.html" title="家长须知">
                                <div class="nav-img bi9">
                                    <img src="../assets/img/i8.png">
                                </div>
                                <div class="nav-h">家长须知</div>
                            </a>
                        </div>
                        <div class="nav-son">
                            <ul>
                                <li><a href="jzxz/xsryjzxz1.html" title="新生入园家长须知">新生入园家长须知</a> </li>
                                <li><a href="jzxz/jfxz.html" title="缴费须知">缴费须知</a> </li>
                            </ul>
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
  name: 'Header',
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
