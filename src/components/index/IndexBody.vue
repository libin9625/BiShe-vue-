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
                        <!--#begineditable viewid="194654" name="焦点新闻大图片"-->
                          <router-link :to="{path:'/annouce',query:{id:1}}">
                            <li>
                                <a>
                                    <img src="../../assets/img/CC518ACD2A50E7379C95D564B1C_7F63D3E5_252DA.jpg">
                                </a>
                            </li>
                          </router-link>
                          <router-link :to="{path:'/annouce',query:{id:2}}">
                            <li>
                                <a>
                                    <img src="../../assets/img/99B897D9C4DF5409C0C48CC9E2E_D8AA93FD_E6BA.jpg">
                                </a>
                            </li>
                          </router-link>
                          <router-link :to="{path:'/annouce',query:{id:3}}">
                            <li>
                                <a>
                                    <img src="../../assets/img/59CE3F4B930435EE7F0B88540FA_22633A9D_D80C.jpg">
                                </a>
                            </li>
                          </router-link>
                        </ul>
                    </div>
                    <div id="ifocus_opdiv"></div>
                    <div id="ifocus_tx">
                        <ul><!--#begineditable viewid="194655" name="焦点新闻标题"-->
                          <li>
                            <router-link :to="{path:'/annouce',query:{id:1}}">
                                <a :title="notice1.header">{{notice1.header}}...</a>
                            </router-link>
                          </li>
                          <li>
                            <router-link :to="{path:'/annouce',query:{id:2}}">
                              <a :title="notice2.header">{{notice2.header}}</a>
                            </router-link>
                          </li>
                          <li>
                              <router-link :to="{path:'/annouce',query:{id:3}}">
                              <a :title="notice3.header">{{notice3.header}}</a>
                              </router-link>
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
                  <router-link :to="{path:'/annouce',query:{id:1}}">
                    <li>
                        <a>
                            <div class="li-str">{{notice1.header}}...</div>
                            <div class="date">03-14</div>
                        </a>
                    </li>
                  </router-link>
                  <router-link :to="{path:'/annouce',query:{id:2}}">
                    <li>
                        <a>
                            <div class="li-str">{{notice2.header}}...</div>
                            <div class="date">03-14</div>
                        </a>
                    </li>
                  </router-link>
                  <router-link :to="{path:'/annouce',query:{id:3}}">
                    <li>
                        <a>
                            <div class="li-str">{{notice3.header}}...</div>
                            <div class="date">03-11</div>
                        </a>
                    </li>
                  </router-link>
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
                        <a href="info/1184/2853.htm" target="_blank" title="园所介绍">
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
                        <a href="info/1188/2851.htm" target="_blank" title="师资队伍">
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
                        <a href="info/1187/2863.htm" target="_blank" title="教育理念">
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
                        <a href="info/1185/2850.htm" target="_blank" title="组织结构图">
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
                        <router-link :to="{path:'/annouce',query:{id:4}}"><a>更多&gt;&gt;</a></router-link>
                    </div>
                    <div class="news-ul fr">
                        <ul><!--#begineditable viewid="194950" name="幼儿园公告"-->
                          <router-link :to="{path:'/annouce',query:{id:5}}">
                            <li>
                                <a>
                                    {{notice5.header}}
                                    <span class="date1">2017-03-10</span>
                                </a>
                            </li>
                          </router-link>
                        </ul>
                    </div>
                </div>
                <div class="news ns-bot">
                    <div class="news-ul fl">
                        <ul><!--#begineditable viewid="194951" name="园内新闻"-->
                          <router-link :to="{path:'/annouce',query:{id:6}}">
                            <li>
                                <a>
                                    {{notice6.header}}
                                    <span class="date1">2018-01-31</span>
                                </a>
                            </li>
                          </router-link>
                          <router-link :to="{path:'/annouce',query:{id:5}}">
                            <li>
                                <a>
                                    {{notice5.header}}
                                    <span class="date1">2018-01-02</span>
                                </a>
                            </li>
                          </router-link>
                        </ul>
                    </div>
                    <div class="news-h fr">
                        <span>卫生保健</span>
                        <router-link :to="{path:'/annouce',query:{id:8}}"><a>更多&gt;&gt;</a></router-link>
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
                            <a>更多&gt;&gt;</a>
                        </li>
                      </router-link>
                      <router-link to="">
                        <li style="border-right: #fff 1px solid;width: 332px">
                            <span class="hd-h"><img src="../../assets/img/b2.png">园所文化</span>
                            <a>更多&gt;&gt;</a>
                        </li>
                      </router-link>
                      <router-link to="">
                        <li>
                            <span class="hd-h"><img src="../../assets/img/b3.png">早教基地</span>
                            <a>更多&gt;&gt;</a>
                        </li>
                      </router-link>
                    </ul>
                </div>
                <div class="bd">
                    <ul>
                        <router-link :to="{path:'/annouce',query:{id:7}}"><li><a :title="notice7.header">{{notice7.header}}</a></li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:8}}"><li style="padding-right: 25px"><a :title="notice8.header">{{notice8.header}}...</a></li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:9}}"><li><a :title="notice9.header">{{notice9.header}}...</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:10}}"><li><a :title="notice10.header">{{notice10.header}}...</a></li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:11}}"><li style="padding-right: 25px"><a :title="notice11.header">{{notice11.header}}...</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:12}}"><li><a :title="notice12.header">{{notice12.header}}</a></li></router-link>
                    </ul>
                    <ul>
                        <router-link :to="{path:'/annouce',query:{id:13}}"><li><a :title="notice13.header">{{notice13.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:14}}"><li style="padding-right: 25px"><a :title="notice14.header">{{notice14.header}}</a></li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:15}}"><li><a :title="notice15.header">{{notice15.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:16}}"><li><a :title="notice16.header">{{notice16.header}}...</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:17}}"><li style="padding-right: 25px"><a :title="notice17.header">{{notice17.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:18}}"><li><a :title="notice18.header">{{notice18.header}}</a> </li></router-link>
                    </ul>
                    <ul>
                        <router-link :to="{path:'/annouce',query:{id:19}}"><li><a :title="notice19.header">{{notice19.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:20}}"><li style="padding-right: 25px"><a :title="notice20.header">{{notice20.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:21}}"><li><a :title="notice21.header">{{notice21.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:22}}"><li><a :title="notice22.header">{{notice22.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:23}}"><li style="padding-right: 25px"><a :title="notice23.header">{{notice23.header}}</a> </li></router-link>
                        <router-link :to="{path:'/annouce',query:{id:24}}"><li><a :title="notice24.header">{{notice24.header}}</a> </li></router-link>
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
      notice:[],
      notice1:{},
      notice2:{},
      notice3:{},
      notice4:{},
      notice5:{},
      notice6:{},
      notice7:{},
      notice8:{},
      notice9:{},
      notice10:{},
      notice11:{},
      notice12:{},
      notice13:{},
      notice14:{},
      notice15:{},
      notice16:{},
      notice17:{},
      notice18:{},
      notice19:{},
      notice20:{},
      notice21:{},
      notice22:{},
      notice23:{},
      notice24:{},
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
      vm.notice5 = data.rows[4];
      vm.notice6 = data.rows[5];
      vm.notice7 = data.rows[6];
      vm.notice8 = data.rows[7];
      vm.notice9 = data.rows[8];
      vm.notice10 = data.rows[9];
      vm.notice11 = data.rows[10];
      vm.notice12 = data.rows[11];
      vm.notice13 = data.rows[12];
      vm.notice14 = data.rows[13];
      vm.notice15 = data.rows[14];
      vm.notice16 = data.rows[15];
      vm.notice17 = data.rows[16];
      vm.notice18 = data.rows[17];
      vm.notice19 = data.rows[18];
      vm.notice20 = data.rows[19];
      vm.notice21 = data.rows[20];
      vm.notice22 = data.rows[21];
      vm.notice23 = data.rows[22];
      vm.notice24 = data.rows[23];
    })
  }
}
</script>
