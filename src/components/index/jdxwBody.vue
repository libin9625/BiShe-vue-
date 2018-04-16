<template>
    <div class="jdxwBody">
        <div class="cen-bg w100">
            <div class="center w1000">
                <ul class="list-box clearfix">
                    <li id="line_u5_0" v-for="(item,id) in data" :key="id" style="margin-top:10px;">
                      <router-link :to="{path:'/annouce',query:{id:item.id}}">
                            <div class="box-i">
                                <img src="../../assets/img/CC518ACD2A50E7379C95D564B1C_7F63D3E5_252DA.jpg" />
                                <span></span>
                            </div>
                            <div class="box-h">{{item.header}}</div>
                            <div class="box-con" v-html="item.content">...</div>
                            <div class="box-dd">发布时间：{{item.createdAt.slice(0,10)}}</div>
                      </router-link>
                    </li>
                </ul>
                <div align="center">
                    <input type="hidden" name="actiontype" value="">
                    <input type="hidden" name="urltype" value="tree.TreeTempUrl">
                    <input type="hidden" name="_scode_" value="1517195738241">
                    <input type="hidden" name="outFlag" value="false">
                    <input type="hidden" name="wbtreeid" value="1182">
                    <table cellspacing="0" cellpadding="0" border="0">
                        <tr>
                            <td colspan="0">
                                <table cellspacing="0" class="headStyle49g54ebdv1" width="100%" cellpadding="1">
                                    <tr valign="middle">
                                        <td nowrap align="left" width="1%" id="fanye194974">共{{data.length}}条</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'jdxwBody',
    data (){
      return {
        data:[]
      }
    },
    created () {
      var vm = this;
      var url = "http://localhost:3000/notice/findByType";
      $.getJSON(url,{selectType:'焦点新闻'},function(data){
        vm.data = data.reverse();
      })
    }
}
</script>

