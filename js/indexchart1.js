var dom = document.getElementsByClassName("container");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
    title : {
        text: 'Visit And Sales Statistics',
        subtext: '',
      	textStyle:{fontSize:14},
      	padding:25
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
      	itemWidth:20,
      	itemHeight:15,
      	itemGap:10,
      	padding:[25,25],
      	icon:'circle',
        data:['CHN','USA','UK']
    },
  color:['#9c57ff','#fe9096','#70b7f0'],
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true},
        }
    },
    calculable : true,
    xAxis : [
      
        {
              splitLine:{
                  show:false
                },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
          splitArea:{
            show:false
          },
            type : 'category',
            data : ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG']
        }
    ],
    yAxis : [
        {
            type : 'value',
              splitLine:{
                  show:true
                },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              axisLabel:{
                show:false
              },
          splitArea:{
            show:false
          }
        }
            
    ],
    series : [
        {
            name:'CHN',
            type:'bar',
            data:[ 20,40,15,35,25,50,30,20],
          	barWidth : 10,
         	barCategoryGap: '50%',
            markPoint : {
                data : [
                ]
            },
            markLine : {
                data : [
                ]
            }
        },
       {
            name:'USA',
            type:'bar',
            data:[ 40,30,20,10,50,15,35,40],
         	barWidth : 10,
            markPoint : {
                data : [
                ]
            },
            markLine : {
                data : [
                ]
            }
        },
        {
            name:'UK',
            type:'bar',
            data:[ 70,10,30,40,25,50,15,30],
          	barWidth : 10,
            markPoint : {
                data : [
                ]
            },
            markLine : {
                data : [
                ]
            }
        }
    ]
};
                    