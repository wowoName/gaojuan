$(function() {
    //顶部左侧折线
    let data1 = [32, 34, 39, 35, 38, 36, 34, 25, 15, 38, 45, 65]
    setDisposalLine('disposalLine', data1);
    //顶部右侧折线
    let data2 = [12, 58, 39, 35, 38, 25, 88, 25, 85, 65, 45, 25]
    setDisposalLine('parsingTrend', data2);
    /** 
     * 顶部左侧处置--折线
     * @param {*} id  
     *  @param {*} data
     */
    function setDisposalLine(id, data) {
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            grid: {
                left: '4%',
                right: '10%',
                bottom: '0',
                top: "30",
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
                type: 'value',
                name: '',
                axisTick: {
                    show: false
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [5, 6],
                    symbolOffset: 10,
                    lineStyle: {
                        color: '#908a8a'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    color: '#908a8a',
                    textStyle: {
                        fontSize: 12
                    },
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                }
            }],
            series: [{
                name: '处置',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 3
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#ffffff'
                        }, {
                            offset: 0.8,
                            color: '#ff9d9f'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#de3c3f'
                    },
                    emphasis: {
                        color: 'rgb(0,196,132)',
                        borderColor: 'rgba(0,196,132,0.2)',
                        extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                        borderWidth: 10,

                    },
                },
                data: data
            }]
        };
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
    }
})