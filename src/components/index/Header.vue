<template>
    <div class="header">
        <!-- top start -->
        <div class="top-bg w100">
            <div class="top w1000">
                <div class="logo fl">
                <a href="" title="兰州理工大学幼儿园">
                    <img src="../../assets/img/logo.png" width="320" height="240" border="0" alt="兰州理工大学幼儿园" title="兰州理工大学幼儿园">
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
                        <form action="" method="post" id="au2a" name="au2a" onsubmit="return _nl_ys_check()" style="display: inline">
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
        <Nav></Nav>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'Header'
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
