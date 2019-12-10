$(function() {
    //中间地图
    setCenterMap();

    function setCenterMap() {
        var myChart = echarts.init(document.getElementById('centerMap'));
        var mapName = 'china'
        var mapData = [
            { name: "北京", value: 199 },
            { name: "天津", value: 42 },
            { name: "河北", value: 102 },
            { name: "山西", value: 81 },
            { name: "内蒙古", value: 47 },
            { name: "辽宁", value: 67 },
            { name: "吉林", value: 82 },
            { name: "黑龙江", value: 123 },
            { name: "上海", value: 24 },
            { name: "江苏", value: 92 },
            { name: "浙江", value: 114 },
            { name: "安徽", value: 109 },
            { name: "福建", value: 116 },
            { name: "江西", value: 901 },
            { name: "山东", value: 4582 },
            { name: "河南", value: 137 },
            { name: "湖北", value: 116 },
            { name: "湖南", value: 1104 },
            { name: "重庆", value: 91 },
            { name: "四川", value: 125 },
            { name: "贵州", value: 62 },
            { name: "云南", value: 83 },
            { name: "西藏", value: 9 },
            { name: "陕西", value: 80 },
            { name: "甘肃", value: 56 },
            { name: "青海", value: 10 },
            { name: "宁夏", value: 18 },
            { name: "新疆", value: 2000 },
            { name: "广东", value: 123 },
            { name: "广西", value: 59 },
            { name: "海南", value: 14 },
            { name: "台湾", value: 14 },
        ];

        var geoCoordMap = {};




        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

        });


        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };
        var option = {
            backgroundColor: '#ffffff',
            tooltip: {
                padding: 0,
                enterable: true,
                transitionDuration: 1,
                padding: 10,
                textStyle: {
                    color: '#fff',
                    decoration: 'none',
                },
                formatter: function(data) {
                    var name = data.name
                    var _data = mapData.find(function(item) {
                        return item.name === name
                    })
                    return name + "<br/>数量：" + _data.value
                }

            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    { min: 4000 }, // 不指定 max，表示 max 为无限大（Infinity）。
                    { min: 3001, max: 4000 },
                    { min: 2001, max: 3000 },
                    { min: 1001, max: 2000 },
                    { min: 1, max: 1000 },
                    { max: 0 } // 不指定 min，表示 min 为无限大（-Infinity）。
                ],
                show: true,
                min: 0,
                max: 4000,
                left: 'left',
                top: 'bottom',
                minOpen: true,
                maxOpen: true,
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    color: ['#fff', '#5fb2ff'] // 蓝绿
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                zoom: 1,
                itemStyle: {
                    normal: {
                        areaColor: '#023677',
                        borderColor: '#1180c7',
                    },
                    emphasis: {
                        areaColor: '#f7c836',
                        borderColor: '#f7c836',
                    }
                }
            },
            series: [{
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData),
                    symbolSize: function(val) {
                        return val[2] / 1000;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#000'
                        }
                    }
                },
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#5baff',
                        },
                        emphasis: {
                            areaColor: 'red',
                            borderWidth: 10
                        }
                    },
                    animation: false,
                    data: mapData
                },
                {
                    name: '',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 10)),
                    symbolSize: function(val) {
                        return val[2] / 200;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'left',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'yellow',
                            shadowColor: 'yellow'
                        }
                    },
                    zlevel: 1
                },

            ]
        };

        myChart.setOption(option);
    }
})