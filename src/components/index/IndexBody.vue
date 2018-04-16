<template>
  <div class="indexBody">
      <!-- main start -->
    <div class="main-bg w100">
        <div class="part1 w1000">
            <!-- ifocus start-->
            <div id="ifocus">
                <div id="ifocus_pic">
                    <div id="ifocus_piclist">
                        <ul>
                          <router-link :to="{path:'/annouce',query:{id:1}}">
                            <li><img src="../../assets/img/CC518ACD2A50E7379C95D564B1C_7F63D3E5_252DA.jpg"></li>
                          </router-link>
                          <router-link :to="{path:'/annouce',query:{id:2}}">
                            <li><img src="../../assets/img/99B897D9C4DF5409C0C48CC9E2E_D8AA93FD_E6BA.jpg"></li>
                          </router-link>
                          <router-link :to="{path:'/annouce',query:{id:3}}">
                            <li><img src="../../assets/img/59CE3F4B930435EE7F0B88540FA_22633A9D_D80C.jpg"></li>
                          </router-link>
                        </ul>
                    </div>
                    <div id="ifocus_opdiv"></div>
                    <div id="ifocus_tx">
                        <ul><!--#begineditable viewid="194655" name="焦点新闻标题"-->
                          <li>
                            <router-link :to="{path:'/annouce',query:{id:1}}">{{notice1.header}}...</router-link>
                          </li>
                          <li>
                            <router-link :to="{path:'/annouce',query:{id:2}}">{{notice2.header}}...</router-link>
                          </li>
                          <li>
                              <router-link :to="{path:'/annouce',query:{id:3}}">{{notice3.header}}...</router-link>
                          </li>
                        </ul>
                    </div>
                </div>
                <div id="ifocus_btn">
                    <ul><!--#begineditable viewid="194656" name="焦点新闻小图片"-->
                        <li><img src="../../assets/img/CC518ACD2A50E7379C95D564B1C_7F63D3E5_252DA.jpg"> </li>
                        <li><img src="../../assets/img/99B897D9C4DF5409C0C48CC9E2E_D8AA93FD_E6BA.jpg"> </li>
                        <li><img src="../../assets/img/59CE3F4B930435EE7F0B88540FA_22633A9D_D80C.jpg"> </li>
                    </ul>
                </div>
            </div>
            <!-- ifocus end -->
            <div class="p1-r fr">
                <div class="part1-top">
                    <div class="part1-h">
                        <router-link to="/jdxw"><a>焦点新闻</a></router-link>
                    </div>
                    <div class="more">
                        <router-link to="/jdxw"><a href="">更多&gt;&gt;</a></router-link>
                    </div>
                </div>
                <ul>
                  <li v-for="(item,id) in Jdxwdata.slice(0,8)" :key="id">
                      <router-link :to="{path:'/annouce',query:{id:item.id}}">
                        <div class="li-str">{{item.header}}...</div>
                        <div class="date">{{item.createdAt.slice(5,10)}}</div>
                      </router-link>
                  </li>
                </ul>
            </div>
        </div>
        <div class="part2 w1000">
            <div class="part2-h">
                <img src="../../assets/img/h1.png">
            </div>
            <ul class="tabsList" style="margin: 0px auto">
                <!--#begineditable viewid="194657" name="基本概况"-->
                <li class="tit">
                    <div class="tabBody">
                        <div class="sm-l">
                            <img src="../../assets/img/85410782590C5791CF32E126CFB_CF80816F_211A6.jpg">
                        </div>
                        <div class="sm-r">（一）基本概况幼儿园创建于1954年，距今已有60余年历史。2010大学投入3000万重新翻建园所，硬件环境得到有效改善。现占地面积10986平方米，建筑面积7000余平方米，绿化...</div>
                    </div>
                    <div class="tit-h tb1" style="font-size: 14px">
                        <a>
                            <img src="../../assets/img/t1.png">
                            <span>基本情况</span>
                        </a>
                    </div>
                </li>
                <li class="tit">
                    <div class="tabBody">
                        <div class="sm-l">
                            <img src="../../assets/img/E182F5A6A75F98775C66CEF974A_1CF52AF0_1CB41.jpg">
                        </div>
                        <div class="sm-r">◾全园共有106名教工。◾教师92%为大专以上学历◾有市区级优秀及骨干教师7名◾100%保育员通过等级考试◾三位园长均为本科以上学历，并具有园长...</div>
                    </div>
                    <div class="tit-h tb1" style="font-size: 14px">
                        <a>
                            <img src="../../assets/img/t2.png">
                            <span>师资力量</span>
                        </a>
                    </div>
                </li>
                <li class="tit">
                    <div class="tabBody">
                        <div class="sm-l">
                            <img src="../../assets/img/D2F004672815075F9D25529CB6D_05461200_1FDB0.jpg">
                        </div>
                        <div class="sm-r">教育理念“慢教育、细照料，静待孩子成为最好的自己”慢教育：“让孩子赢在起跑线上”似乎像一道紧箍咒，让家长对孩子的未来充满担心。种子发芽需要等待，孩子的成长，...</div>
                    </div>
                    <div class="tit-h tb1" style="font-size: 14px">
                        <a>
                            <img src="../../assets/img/t5.png">
                            <span>教育理念</span>
                        </a>
                    </div>
                </li>
                <li class="tit">
                    <div class="tabBody">
                        <div class="sm-l">
                            <img src="../../assets/img/313C8ECC3B647F44E45DDDA633A_9C70CC14_215E3.jpg">
                        </div>
                        <div class="sm-r"></div>
                    </div>
                    <div class="tit-h tb1" style="font-size: 14px">
                        <a>
                            <img src="../../assets/img/t6.png">
                            <span>机构设置</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="part3 w1000">
            <div class="p3-Slide">
                <div class="bd">
                    <ul>
                      <router-link :to="{path:'/annouce',query:{id:4}}">
                        <li>
                            <a>
                                <img src="../../assets/img/38CA80D8290897B9781EBFA35DA_63E31AAA_9527.png">
                                <div class="tt">{{notice4.header}}</div>
                            </a>
                        </li>
                      </router-link>
                    </ul>
                </div>
            </div>
            <div class="p3-r">
                <div class="news ns-top">
                    <div class="news-h fl">
                        <span>幼儿园公告</span>
                    </div>
                    <div class="news-ul fr">
                        <ul><!--#begineditable viewid="194950" name="幼儿园公告"-->
                            <li v-for="(item,id) in Yeyggdata.slice(0,2)" :key="id">
                              <router-link :to="{path:'/annouce',query:{id:item.id}}">
                                    {{item.header}}
                                    <span class="date1">{{item.createdAt.slice(0,9)}}</span>
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="news ns-bot">
                    <div class="news-ul fl">
                        <ul>
                          <li v-for="(item,id) in Wsbjdata" :key="id">
                            <router-link :to="{path:'/annouce',query:{id:item.id}}">
                                  {{item.header}}
                                  <span class="date1">{{item.createdAt.slice(0,9)}}</span>
                            </router-link>
                          </li>
                        </ul>
                    </div>
                    <div class="news-h fr">
                        <span>卫生保健</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="part4 w1000">
            <div class="part4-h">
                <img src="../../assets/img/h2.png">
            </div>
            <div class="slideTxtBox">
                <div class="hd">
                    <ul>
                      <router-link to="">
                        <li style="border-right: #fff 1px solid">
                            <span class="hd-h"><img src="../../assets/img/b1.png">班级动态</span>
                        </li>
                      </router-link>
                      <router-link to="">
                        <li style="border-right: #fff 1px solid;width: 332px">
                            <span class="hd-h"><img src="../../assets/img/b2.png">园所文化</span>
                        </li>
                      </router-link>
                      <router-link to="">
                        <li>
                            <span class="hd-h"><img src="../../assets/img/b3.png">早教基地</span>
                        </li>
                      </router-link>
                    </ul>
                </div>
                <div class="bd">
                    <ul>
                        <li v-for="(item,id) in Bjdtdata.slice(0,6)" :key="id"><router-link :to="{path:'/annouce',query:{id:item.id}}">{{item.header}}</router-link></li>
                    </ul>
                    <ul>
                        <li v-for="(item,id) in Yswhdata.slice(0,6)" :key="id"><router-link :to="{path:'/annouce',query:{id:item.id}}">{{item.header}}</router-link></li>
                    </ul>
                    <ul>
                       <li v-for="(item,id) in Zjjddata.slice(0,6)" :key="id"><router-link :to="{path:'/annouce',query:{id:item.id}}">{{item.header}}</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="scrollBox">
                <div class="clear"></div>
                <div class="bd">
                    <ul class="piclist">
                        <li><a title="阳光体育活动"><img src="../../assets/img/462EAA0579BC035B04E3EC70569_90A0A1A3_1F1CC4.jpg"></a></li>
                        <li><a title="精彩瞬间"><img src="../../assets/img/6E643852D0394EF085F724DE0DB_AF617FA4_D9B6.jpg"></a></li>
                        <li><a title="绿园感受春天，大胆写生"><img src="../../assets/img/F48D17D73D945041E39900CB9E1_D4C9741B_27D0B.jpg"></a></li>
                        <li><a title="新媒体课"><img src="../../assets/img/E464D2CCDF0087DE4DE97064B77_9882F568_1AB6B.jpg"></a></li>
                        <li><a title="新年开放活动"><img src="../../assets/img/F9BCB50A4FA7D529C9290AF576D_14D7CFF5_1CD4A.jpg"></a></li>
                        <li><a title="童话剧"><img src="../../assets/img/456C7FF50C988881A148F335F74_14C5CA15_18353.jpg"></a></li>
                        <li><a title="科学实验走进兰州理工大学幼儿园"><img src="../../assets/img/21B8620775A51A155A99F7D07C2_21E56ECE_2F018.jpg"></a></li>
                        <li><a title="快乐天使"><img src="../../assets/img/4ECE69BC0AC510806D71474677C_958CD6BE_3FEC5.jpg"></a></li>
                    </ul>
                </div>
                <a class="next" href="javascript:void(0)"></a>
                <a class="prev" href="javascript:void(0)"></a>
            </div>
        </div>
    </div>
    <!-- main end -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'IndexBody',
  data () {
    return {
      data:[],
      Jdxwdata:[],
      Bjdtdata:[],
      Yswhdata:[],
      Zjjddata:[],
      Yeyggdata:[],
      Wsbjdata:[],
      notice:[],
      notice1:{},
      notice2:{},
      notice3:{},
      notice4:{}
    }
  },
  created () {
    var vm = this;
    var url = 'http://localhost:3000/notice/findAll';
    $.getJSON(url,function(data){
      vm.notice = data.rows;
      vm.notice1 = data.rows[0];
      vm.notice2 = data.rows[1];
      vm.notice3 = data.rows[2];
      vm.notice4 = data.rows[3];
    });
    var urlNew = "http://localhost:3000/notice/findByType";
    $.getJSON(urlNew,{selectType:'焦点新闻'},function(data){
      vm.Jdxwdata = data.reverse();
      vm.data = data;
    });
    $.getJSON(urlNew,{selectType:'班级动态'},function(data){
      vm.Bjdtdata = data.reverse();
    });
    $.getJSON(urlNew,{selectType:'园所文化'},function(data){
      vm.Yswhdata = data.reverse();
    });
    $.getJSON(urlNew,{selectType:'早教基地'},function(data){
      vm.Zjjddata = data.reverse();
    });
    $.getJSON(urlNew,{selectType:'幼儿园公告'},function(data){
      vm.Yeyggdata = data.reverse();
    });
    $.getJSON(urlNew,{selectType:'卫生保健'},function(data){
      vm.Wsbjdata = data.reverse();
    })
  }
}
</script>
