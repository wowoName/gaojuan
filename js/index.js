$(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    let layoutHeight = parseInt(document.documentElement.clientHeight * 0.35 - 18);
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
})