<template>
  <div class="monit-trend-box">
    <dv-charts :option="option" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '收费系统',
              color: '#00baff'
            },
            {
              name: '监控系统',
              color: '#ff5ca9'
            },
            {
              name: '通信系统',
              color: '#3de7c9'
            },
            {
              name: '供配电系统',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06', '10/07'
          ],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 8
        },
        series: [
          {
            name: '收费系统',
            data: [
              2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            }
          },
          {
            name: '监控系统',
            data: [
              2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            name: '通信系统',
            data: [
              1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3
            ],
            type: 'line',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            lineStyle: {
              lineDash: [5, 5]
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            }
          },
          {
            data: [
              0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2
            ],
            type: 'line',
            name: '供配电系统',
            lineArea: {
              show: true,
              gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
            },
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
            }
          }
        ]
      }
    }
  }
  // methods: {
  //   initChart () {
  //   getOptions () {
  //     const option = {
  //       // title: {
  //       //   text: '周销售额趋势'
  //       // },
  //       legend: {
  //         data: [
  //           {
  //             name: '销售额',
  //             color: '#aeeff0'
  //           },
  //           {
  //             name: '人流量',
  //             color: '#f1829f'
  //           }
  //         ]
  //       },
  //       xAxis: {
  //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  //       },
  //       yAxis: [
  //         {
  //           name: '销售额',
  //           data: 'value'
  //         },
  //         {
  //           name: '人流量',
  //           data: 'value',
  //           position: 'right',
  //           max: 2000,
  //           splitLine: {
  //             show: false
  //           }
  //         }
  //       ],
  //       series: [
  //         {
  //           name: '人流量',
  //           data: [1000, 1200, 900, 1500, 900, 1200, 1000],
  //           type: 'line',
  //           smooth: true,
  //           lineArea: {
  //             show: true,
  //             gradient: ['rgba(251, 114, 147, 1)', 'rgba(251, 114, 147, 0)']
  //           },
  //           lineStyle: {
  //             stroke: 'rgba(251, 114, 147, 1)',
  //             lineDash: [3, 3]
  //           },
  //           linePoint: {
  //             style: {
  //               stroke: 'rgba(251, 114, 147, 1)'
  //             }
  //           },
  //           yAxisIndex: 1
  //         },
  //         {
  //           name: '销售额',
  //           data: [1500, 1700, 1400, 2000, 1400, 1700, 1500],
  //           type: 'bar',
  //           gradient: {
  //             color: ['rgba(103, 224, 227, .6)', 'rgba(103, 224, 227, .1)']
  //           },
  //           barStyle: {
  //             stroke: 'rgba(103, 224, 227, 1)'
  //           }
  //         }
  //       ]
  //     }

  //     return option
  //   }
  // },
  // mounted () {
  //   this.$nextTick(() => {
  //     this.initChart()
  //   })
  // }
}
</script>
<style lang="less" scoped>
.monit-trend-box {
  width: 100%;
  height: 100%;
  &>div{
    width: 100%;
    height: 100%;
  }
}
</style>
