<template>
  <div>
    <div id="studentByGender" style="width:550px;height:400px;float:left"></div>
    <div id="teacherByGender" style="width:550px;height:400px;float:right"></div>
    <div id="noticeByType" style="width:100%;height:350px"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import echarts from 'echarts'
export default {
  name:"DataStatistics",
  data () {
    return {
      myChartOne:null,
      myChartTwo:null,
      myChartThree:null,
      studentMale:{},
      studentFemale:{},
      teacherMale:{},
      teacherFemale:{},
      optionOne:{
          title : {
              text: '幼儿性别比例图',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              x : 'center',
              y : 'bottom',
              data:['男','女']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                      show: true,
                      type: ['pie', 'funnel']
                  },
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          series : [
              {
                  name:'幼儿人数',
                  type:'pie',
                  radius : [20, 110],
                  center : ['50%', 200],
                  roseType : 'radius',
                  width: '40%',       // for funnel
                  max: 40,            // for funnel
                  itemStyle : {
                      normal : {
                          label : {
                              show : false
                          },
                          labelLine : {
                              show : false
                          }
                      },
                      emphasis : {
                          label : {
                              show : true
                          },
                          labelLine : {
                              show : true
                          }
                      }
                  },
                  data:[]
              }
          ]
      },
      optionTwo:{
          title : {
              text: '教师性别比例图',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              x : 'center',
              y : 'bottom',
              data:['男','女']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                      show: true,
                      type: ['pie', 'funnel']
                  },
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          series : [
              {
                  name:'教师人数',
                  type:'pie',
                  radius : [20, 110],
                  center : ['50%', 200],
                  roseType : 'radius',
                  width: '40%',       // for funnel
                  max: 40,            // for funnel
                  itemStyle : {
                      normal : {
                          label : {
                              show : false
                          },
                          labelLine : {
                              show : false
                          }
                      },
                      emphasis : {
                          label : {
                              show : true
                          },
                          labelLine : {
                              show : true
                          }
                      }
                  },
                  data:[]
              }
          ]
      },
      optionThree:{
          title : {
              text: '公告类型及数量'
          },
          tooltip : {
              trigger: 'axis'
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  data : ['焦点新闻','园所介绍','园所文化','幼儿园公告','规章制度','早教基地','班级动态','卫生保健']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'公告数量',
                  type:'bar',
                  data:[]
              }
          ]
      }
    }
  },
  mounted () {
    this.drawlineOne();
    this.drawlineTwo();
    this.drawlineThree();
  },
  methods: {
    drawlineOne(){
      var vm = this;
      var url = 'http://localhost:3000/student/findByGender';
      $.getJSON(url,{gender:'男'},function(data){
        vm.studentMale = {value:data.length,name:'男'};
        $.getJSON(url,{gender:'女'},function(data){
          vm.studentFemale = {value:data.length,name:'女'};
          var myChartOne = vm.$echarts.init(document.getElementById('studentByGender'));
          vm.optionOne.series[0].data.push(vm.studentMale);
          vm.optionOne.series[0].data.push(vm.studentFemale);
          myChartOne.setOption(vm.optionOne);
        })
      });
    },
    drawlineTwo(){
      var vm = this;
      var url = 'http://localhost:3000/teacher/findByGender';
      $.getJSON(url,{gender:'男'},function(data){
        vm.teacherMale = {value:data.length,name:'男'};
        $.getJSON(url,{gender:'女'},function(data){
          vm.teacherFemale = {value:data.length,name:'女'};
          var myChartTwo = vm.$echarts.init(document.getElementById('teacherByGender'));
          vm.optionTwo.series[0].data.push(vm.teacherMale);
          vm.optionTwo.series[0].data.push(vm.teacherFemale);
          myChartTwo.setOption(vm.optionTwo);
        })
      });
    },
    drawlineThree(){
      var vm = this;
      var url = 'http://localhost:3000/notice/findByType';
      $.getJSON(url,{selectType:'焦点新闻'},function(data){
        vm.optionThree.series[0].data.push(data.length);
        $.getJSON(url,{selectType:'园所介绍'},function(data){
          vm.optionThree.series[0].data.push(data.length);
          $.getJSON(url,{selectType:'园所文化'},function(data){
            vm.optionThree.series[0].data.push(data.length);
            $.getJSON(url,{selectType:'幼儿园公告'},function(data){
              vm.optionThree.series[0].data.push(data.length);
              $.getJSON(url,{selectType:'规章制度'},function(data){
                vm.optionThree.series[0].data.push(data.length);
                $.getJSON(url,{selectType:'早教基地'},function(data){
                  vm.optionThree.series[0].data.push(data.length);
                  $.getJSON(url,{selectType:'班级动态'},function(data){
                    vm.optionThree.series[0].data.push(data.length);
                    $.getJSON(url,{selectType:'卫生保健'},function(data){
                      vm.optionThree.series[0].data.push(data.length);
                      var myChartThree = vm.$echarts.init(document.getElementById('noticeByType'));
                      myChartThree.setOption(vm.optionThree);
                    })
                  })
                })
              })
            })
          })
        })
      });
    }
  }
}
</script>

