$(function() {
    //数据
    var data = [{
            name: 'wwww.baidu.com1',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com2',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com3',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com4',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com5',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com6',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com7',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com8',
            value: (Math.random() * 10).toFixed(0),

        }, {
            name: 'wwww.baidu.com9',
            value: (Math.random() * 10).toFixed(0),

        },
        {
            name: 'wwww.baidu.com10',
            value: (Math.random() * 10).toFixed(0),

        },

    ];
    setPictorialBar(data)
        //顶部右侧象形柱状图
    function setPictorialBar(data) {
        var getArrByKey = (data, k) => {
                let key = k || "value";
                let res = [];
                if (data) {
                    data.forEach(function(t) {
                        res.push(t[key]);
                    });
                }
                return res;
            },
            opt = {
                index: 0
            },
            color = ['#FC619D', '#FF904D', '#48BFE3'],
            data = data.sort((a, b) => {
                return b.value - a.value
            }),
            option = {
                grid: {
                    top: 26,
                    bottom: 10,
                    right: 10,
                    left: 10,
                    containLabel: true
                },
                xAxis: {
                    show: false
                },
                yAxis: [{
                    triggerEvent: true,
                    show: true,
                    inverse: true,
                    data: getArrByKey(data, 'name'),
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#666',
                        fontSize: 13,
                        formatter: function(value, index) {
                            if (opt.index === 0 && index < 3) {
                                return '{idx' + index + '|' + (1 + index) + '} {title|' + value + '}'
                            } else if (opt.index !== 0 && (index + opt.index) < 9) {
                                return '{idx|0' + (1 + index + opt.index) + '} {title|' + value + '}'
                            } else {
                                return '{idx|' + (1 + index + opt.index) + '} {title|' + value + '}'
                            }
                        },
                        rich: {
                            idx0: {
                                color: '#FB375E',
                                backgroundColor: '#FFE8EC',
                                borderRadius: 100,
                                padding: [5, 8]
                            },
                            idx1: {
                                color: '#FF9023',
                                backgroundColor: '#FFEACF',
                                borderRadius: 100,
                                padding: [5, 8]
                            },
                            idx2: {
                                color: '#01B599',
                                backgroundColor: '#E1F7F3',
                                borderRadius: 100,
                                padding: [5, 8]
                            },
                            idx: {
                                color: '#333',
                                borderRadius: 100,
                                padding: [5, 8]
                            },
                            title: {
                                width: 110
                            }
                        }
                    },
                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: data,
                    barWidth: '30%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: 'rgb(0,150,255)'
                                },
                                {
                                    offset: 1,
                                    color: '#177bd9'
                                }
                            ]),
                            // 设置柱状图的圆角  上右下左
                            barBorderRadius: [100, 100, 100, 100]
                        }
                    },
                }]
            };
        var myChart = echarts.init(document.getElementById('resolutionDomain'));
        myChart.setOption(option);
    }
})