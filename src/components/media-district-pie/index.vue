<template>
  <div class="media-district-box">
    <!-- <div ref="chart"></div> -->
    <dv-charts class="lc2-chart" :option="option1" />
    <dv-charts class="lc2-chart" :option="option2" />
  </div>
</template>
<script>
import echart from 'echarts'
export default {
  props: {
    config: {
      type: Object,
      default () {
        return {
          title: '',
          data: [
            {
              data: [],
              title: '在刊媒体'
            },
            {
              data: [],
              title: '在刊媒体'
            }
          ]
        }
      }
    }
  },
  watch: {
    config (val, old) {
      this.setOption(val)
    }
  },
  data () {
    let color = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
    let title = {
      text: '媒体分布',
      style: {
        fill: '#fff',
        fontSize: 12
      },
      offset: [0, 110]
    }

    let series = {
      type: 'pie',
      data: [],
      radius: ['30%', '40%'],
      center: ['50%', '40%'],
      insideLabel: {
        show: false
      },
      outsideLabel: {
        labelLineEndLength: 5,
        formatter: '{percent}%\n{name}',
        style: {
          fontSize: 8,
          fill: '#fff'
        }
      }
    }

    return {
      option1: {
        title: {
          ...title,
          text: '在刊媒体分布'
        },
        series: [
          {
            ...series,
            data: [
              // { name: '收费系统', value: 93 },
              // { name: '通信系统', value: 32 },
              // { name: '监控系统', value: 65 },
              // { name: '供配电系统', value: 44 },
              // { name: '其他', value: 52 }
            ]
          }
        ],
        color
      },
      option2: {
        title: {
          ...title,
          text: '下刊媒体分布'
        },
        series: [
          {
            ...series,
            data: [
              // { name: '收费系统', value: 93 },
              // { name: '通信系统', value: 32 },
              // { name: '监控系统', value: 65 },
              // { name: '供配电系统', value: 44 },
              // { name: '其他', value: 52 }
            ]
          }
        ]
      }
    }
  },
  methods: {
    setOption (config) {
      const data = config.data
      this.setOption1(data[0], this.option1)
      this.setOption2(data[1], this.option2)
    },
    setOption1 (data, option) {
      this.option1 = this.getOptions(data, option)
    },
    setOption2 (data, option) {
      this.option2 = this.getOptions(data, option)
    },
    getOptions (conf, option) {
      let series = option.series
      let data = conf.data
      let title = option.title
      title.text = conf.title

      series = series.map(item => {
        return {
          ...item,
          data
        }
      })

      return {
        ...option,
        series
      }
    }
  }
}
</script>
<style lang="less" scoped>
.media-district-box {
  width: 100%;
  height: 100%;
  display: flex;
  &>div {
    width: 50%;
    height: 100%;
    // border: 1px solid red;
  }
}
</style>
