var option1 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '30',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var option2 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '30',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '服务业',
            value: 80,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 20,
            name: '服务业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 80,
            name: '服务业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var option3 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '30',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '农业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '农业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '农业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var option4 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '30',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '合作社',
            value: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 90,
            name: '合作社',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 10,
            name: '合作社',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var option5 = {
    color: ["#04feba", "#f8a100", "#fee11b", "#ff6666", "#9f21ef"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable: true,

    series: [{
        name: '面积模式',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['50%', '45%'],
        roseType: 'area',
        itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        fontFamily: 'BigNoodleTitling',
                        fontSize: '14',
                        color: '#fff'
                    },
                    formatter: "{b} {d}%"
                }
            }
        },
        data: [
            { value: 10, name: '食品创造业' },
            { value: 5, name: '纺织业' },
            { value: 15, name: '零售业' },
            { value: 25, name: '服装业' },
            { value: 20, name: '鞋业' }
        ]
    }]
};
var option6 = {
    legend: {
        orient: 'vertical',
        x: 'center',
        y: 'bottom',
        data: ['国有土地', '集体土地', '建筑面积'],
        textStyle: {
            color: "#fff"
        }
    },
    color: ["#04feba", "#f8a100", "#fee11b"],
    tooltip: {
        trigger: 'axis'
    },
    // calculable : true,
    series: [{
        type: 'pie',
        center: ['50%', '30%'],
        radius: ["50%", "70%"],
        x: '50%', // for funnel
        itemStyle: {
            normal: {
                label: {
                    position: 'center',
                    formatter: function(params) {
                        if (params.dataIndex == 1) {
                            return "占比率";
                        } else {
                            return ""
                        }
                    },
                    textStyle: {
                        fontFamily: 'BigNoodleTitling',
                        fontSize: '14',
                        color: '#fff'
                    }
                }
            }
        },
        data: [{
            name: '国有土地',
            value: 46
        }, {
            name: '集体土地',
            value: 54
        }, {
            name: '建筑面积',
            value: 54
        }]
    }]
};
var jjfbOption1 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption1_1 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption1_2 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption2 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption2_1 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption2_2 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption3 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption3_1 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption3_2 = {
    series: [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: '{c}%',
                textStyle: {
                    fontSize: '24',
                    color: "#fff",
                    fontFamily: 'reducto_condensed_ssiCn'
                }
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['68%', '73%'],
        avoidLabelOverlap: true,
        clockwise: true,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 25,
            name: '工业',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            }
        }, {
            value: 75,
            name: '工业',
            itemStyle: {
                normal: {
                    color: '#4bcbda'
                }
            }
        }]
    }]
};
var jjfbOption4 = {
    color:["#9f21ef","#ff6666","#fee11b","#04feba"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    label:{
        normal:{
            formatter: '{b} : {c} 亿',
            textStyle:{
                fontSize:'14',
                color:'#fff'
            }
        },
        emphasis: {
            show: true,
            formatter: '{d}%',
        }

    },
    series : [{
        name: '',
        type: 'pie',
        radius: ['70%', '71%'],
        avoidLabelOverlap: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            name: '工业',
            value: 75,
            itemStyle: {
                normal: {
                    color: 'rgba(75, 203, 218, 0.7)'
                }
            }
        }]
    },{
            name: '行业',
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:[
                {value:5, name:'鞋业'},
                {value:35, name:'零售业'},
                {value:15, name:'有色金属'},
                {value:20, name:'服装业'}
            ]
        }
    ]
};
var jjfbOption5 = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right:'5%',
                itemGap: 30,
                textStyle: {
                    color: "#fff"
                },
                itemGap: 10,
                data: ['固定资产', '固定资产折旧']
            },
            calculable: true,
            grid: {
                x: '15%',
                y: "13%",
                x2: "8%",
                y2: "20%",
                borderWidth: 0
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    onZero: true,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontFamily: "微软雅黑",
                        fontSize: 13
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#e4e4e4',
                        width: 1,
                        type: 'solid'
                    }
                },
                data: ['雄县', '容城县', '新安县']
            }],
            yAxis: [{
                type: 'value',
                nameTextStyle: {
                    color: "#fff",
                    fontFamily: "微软雅黑",
                    fontSize: 14
                },
                min: 0,
                max: 900,
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontFamily: "微软雅黑",
                        fontSize: 13
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#e0f4ff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['transparent', 'rgba(173, 236, 241, 0.2)']
                    }
                }
            }],
            series: [{
                name: '固定资产',
                type: 'bar',
                symbol: 'circle',
                symbolSize: 4,
                smooth: true,
                barMaxWidth: '20%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(254, 225, 27, 1)' // 0% 处的颜色
                            }, {
                                offset: 0.8,
                                color: 'rgba(254, 225, 27, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(254, 225, 27, 0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                data: [780, 744, 672]
            }, {
                name: '固定资产折旧',
                type: 'bar',
                symbol: 'circle',
                barMaxWidth: '20%',
                symbolSize: 4,
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(28, 244, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 0.8,
                                color: 'rgba(28, 244, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(28, 244, 255, 0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                data: [420, 376, 372]
            }]
};
var jjfbOption6 = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right:'5%',
                itemGap: 30,
                textStyle: {
                    color: "#fff"
                },
                itemGap: 10,
                data: ['银行贷款', '其他金融机构贷款']
            },
            calculable: true,
            grid: {
                x: '15%',
                y: "13%",
                x2: "8%",
                y2: "20%",
                borderWidth: 0
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    onZero: true,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontFamily: "微软雅黑",
                        fontSize: 13
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#e4e4e4',
                        width: 1,
                        type: 'solid'
                    }
                },
                data: ['雄县', '容城县', '新安县']
            }],
            yAxis: [{
                type: 'value',
                nameTextStyle: {
                    color: "#fff",
                    fontFamily: "微软雅黑",
                    fontSize: 14
                },
                min: 0,
                max: 900,
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#bbb',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontFamily: "微软雅黑",
                        fontSize: 13
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#e0f4ff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['transparent', 'rgba(173, 236, 241, 0.2)']
                    }
                }
            }],
            series: [{
                name: '银行贷款',
                type: 'bar',
                symbol: 'circle',
                symbolSize: 4,
                smooth: true,
                barMaxWidth: '20%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(254, 225, 27, 1)' // 0% 处的颜色
                            }, {
                                offset: 0.8,
                                color: 'rgba(254, 225, 27, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(254, 225, 27, 0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                data: [780, 744, 672]
            }, {
                name: '其他金融机构贷款',
                type: 'bar',
                symbol: 'circle',
                barMaxWidth: '20%',
                symbolSize: 4,
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(28, 244, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 0.8,
                                color: 'rgba(28, 244, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(28, 244, 255, 0)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                data: [420, 376, 372]
            }]
};

function setEchart(echartsId, option) {
    if (document.getElementById(echartsId)) {
        echarts.init(document.getElementById(echartsId)).setOption(option);
    }
}
$(document).ready(function() {
    setEchart('chart1', option1);
    setEchart('chart2', option2);
    setEchart('chart3', option3);
    setEchart('chart4', option4);
    setEchart('chart5', option5);
    setEchart('chart6', option6);
    setEchart('jjfbChart1', jjfbOption1);
    setEchart('jjfbChart1_1', jjfbOption1_1);
    setEchart('jjfbChart1_2', jjfbOption1_2);
    setEchart('jjfbChart2', jjfbOption2);
    setEchart('jjfbChart2_1', jjfbOption2_1);
    setEchart('jjfbChart2_2', jjfbOption2_2);
    setEchart('jjfbChart3', jjfbOption3);
    setEchart('jjfbChart3_1', jjfbOption3_1);
    setEchart('jjfbChart3_2', jjfbOption3_2);
    setEchart('jjfbChart4', jjfbOption4);
    setEchart('jjfbChart5', jjfbOption5);
    setEchart('jjfbChart6', jjfbOption6);

});
