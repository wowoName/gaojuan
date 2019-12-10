$(function() {
    setleftBar()
        //顶部左侧 柱状图
    function setleftBar() {
        var option = {
            tooltip: {
                trigger: 'axis',
                formatter: '{b}号：{c}',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: 25,
                right: '10%',
                left: '10%',
                bottom: '20%'
            },
            xAxis: [{
                type: 'category',
                data: ['1/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12'],
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [5, 6],
                    symbolOffset: 5,
                    lineStyle: {
                        color: '#908a8a',

                    }
                },
                axisLabel: {
                    color: '#908a8a',
                    textStyle: {
                        fontSize: 12
                    },
                },
                axisTick: {
                    show: false
                }
            }],
            yAxis: [{
                axisLabel: {
                    formatter: '{value}',
                    color: '#908a8a',
                    textStyle: {
                        fontSize: 12
                    },
                },
                splitNumber: 3,
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [5, 6],
                    symbolOffset: 10,
                    lineStyle: {
                        color: '#908a8a'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.12)'
                    }
                },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                type: 'bar',
                data: [300, 450, 707, 203, 255, 188, 156],
                barWidth: '20%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5bafff' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0,77,167,1)' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [30, 30, 30, 30],
                    }
                },
                label: {
                    normal: {
                        show: true,
                        lineHeight: 18,
                        width: 60,
                        height: 18,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: 5,
                        position: ['-14', '-30'],
                        distance: 1,
                        formatter: [
                            '    {d|●}',
                            ' {a|{c}}     \n',
                            '    {b|}'
                        ].join(','),
                        rich: {
                            d: {
                                color: '#3CDDCF',
                            },
                            a: {
                                color: '#fff',
                                align: 'center',
                            },
                            b: {
                                width: 1,
                                height: 5,
                                borderWidth: 1,
                                borderColor: '#908a8a',
                                align: 'left'
                            },
                        }
                    }
                }
            }]
        };
        var myChart = echarts.init(document.getElementById('leftBar'));
        myChart.setOption(option);
    };


})