$(function() {

    // 初始化左侧顶部柱状图
    setLeftPie();
    //顶部左侧柱状图
    setleftBar();

    let layoutHeight = parseInt(document.documentElement.clientHeight * 0.25 - 18);
    //底部表格
    layui.use('table', function() {
        var table = layui.table;
        //第一个实例
        table.render({
            elem: '#parsingRanking',
            height: layoutHeight,
            url: '../data/table.json', //数据接口
            cols: [
                [
                    { type: 'numbers', title: '排名', width: 80, },
                    { field: 'username', title: '用户名' },
                    { field: 'username', title: '16日解析量' },
                    { field: 'username', title: '15日解析量' },
                    { field: 'username', title: '14日解析量' }

                ]
            ],
            response: {
                statusCode: 200 //重新规定成功的状态码为 200，table 组件默认为 0
            },
            parseData: function(res) { //将原始数据解析成 table 组件所规定的数据
                return {
                    "code": res.code, //解析接口状态
                    "msg": res.message, //解析提示文本
                    "count": res.total, //解析数据长度
                    "data": res.data //解析数据列表
                };
            }
        });

    });



    //顶部 左侧饼状图
    function setLeftPie() {
        var data = {
            dataAge: [{
                name: '中国移动',
                value: '150'
            }, {
                name: '中国联通',
                value: '120'
            }, {
                name: '中国电信',
                value: '122'
            }, {
                name: '其他',
                value: '42'
            }]
        };
        option = {
            title: {
                text: '1258',
                subtext: '总数量',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: 18,
                    lineHeight: 10,
                    fontWeight: '600',
                    color: '#5bafff'
                },
                subtextStyle: {
                    color: '#000000',
                    fontSize: 12,
                    align: 'right'
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c}<br/>{d}%"
            },
            color: ['#5bafff', '#ff9d9f', '#f4da5e', '#8dc873'],
            series: [{
                type: 'pie',
                center: ['center', 'center'],
                radius: ['50%', '65%'],
                labelLine: {
                    normal: {
                        length: 1,
                        length2: 10,
                        lineStyle: {
                            type: 'solid',
                            color: '#908a8a',
                            align: 'center'
                        }
                    }
                },

                label: {
                    normal: {
                        formatter: (params) => {
                            return '{b| ' + params.name + '} ' + '\n{hr|}\n{c|' + params.percent.toFixed(0) + '%}'
                        },
                        fontSize: 13,
                        rich: {
                            b: {
                                lineHeight: 20,
                                fontSize: 12,
                                color: '#000000',
                                align: 'center'

                            },
                            c: {
                                lineHeight: 20,
                                fontSize: 12,
                                color: '#41B3DC',
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#908a8a',
                                width: '100%',
                                borderWidth: 1,
                                height: 0,
                            }

                        }
                    }
                },
                data: data.dataAge,
            }]
        };
        var myChart = echarts.init(document.getElementById('leftPie'));
        myChart.setOption(option);

    }



})