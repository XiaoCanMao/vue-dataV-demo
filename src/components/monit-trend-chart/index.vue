<template>
  <div class="monit-trend-box">
    <dv-charts :option="option" />
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    config: {
      type: Object,
      default () {
        return {
          data: [],
          title: ''
        }
      }
    }
  },
  watch: {
    config: function (val, old) {
      this.setConfig(val)
    }
  },
  data () {
    return {
      option: {
        legend: {
          data: [
            {
              name: '监播次数',
              color: '#00baff'
            },
            {
              name: '媒体数',
              color: '#ff5ca9'
            },
            {
              name: '报警媒体数',
              color: '#3de7c9'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        grid: {
          left: '15%'
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
        yAxis: [
          {
            position: 'left',
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
            min: 0
          }
        ],
        series: [
          {
            name: '媒体数',
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
            name: '报警媒体数',
            data: [
              0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2
            ],
            type: 'line',
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
          },
          {
            name: '监播次数',
            data: [
              2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5
            ],
            type: 'bar',
            barStyle: {
              fill: 'rgba(0, 186, 255, 0.4)'
            }
          }
        ]
      }
    }
  },
  methods: {
    setConfig (config) {
      const option = this.option
      // const legend = this.getLegend(config)
      const xAxis = this.getXAxis(config)
      const series = this.getSeries(config)

      this.option = {
        ...option,
        xAxis,
        series
      }
    },
    getXAxis (config, legend) {
      const line1 = config.data.line1
      const xAxis = this.option.xAxis

      const data = line1.data.map(item => {
        return moment(item.datetime).format('MM/DD')
      })

      return {
        ...xAxis,
        data
      }
    },
    getSeries (config) {
      let confData = config.data

      let keys = ['line1', 'line2', 'columnar']
      const series = this.option.series

      return series.map((item, idx) => {
        let key = keys[idx]
        let data = confData[key]
        if (data) {
          data = data.data
          data = data.map(d => d.value)
        } else {
          data = []
        }

        return {
          ...item,
          data
        }
      })
    }
  }
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
