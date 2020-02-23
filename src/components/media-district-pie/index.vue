<template>
  <div class="media-district-box">
    <!-- <div ref="chart"></div> -->
    <dv-charts class="lc2-chart" :option="option" />
    <dv-charts class="lc2-chart" :option="option" />
  </div>
</template>
<script>
import echart from 'echarts'
export default {
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
      option: {
        title: {
          ...title,
          text: '在刊媒体分布'
        },
        series: [
          {
            ...series,
            data: [
              { name: '收费系统', value: 93 },
              { name: '通信系统', value: 32 },
              { name: '监控系统', value: 65 },
              { name: '供配电系统', value: 44 },
              { name: '其他', value: 52 }
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
              { name: '收费系统', value: 93 },
              { name: '通信系统', value: 32 },
              { name: '监控系统', value: 65 },
              { name: '供配电系统', value: 44 },
              { name: '其他', value: 52 }
            ]
          }
        ]
      }
    }
  },
  methods: {
    initChart () {
      let myChart = echart.init(this.$refs.chart)
      myChart.setOption(this.getOptions())
    },
    getOptions () {
      const label = {
        position: 'inner'
      }

      let option = {
        title: [{
          text: 'Pie label alignTo',
          bottom: 0,
          left: '16.67%'
        },
        {
          text: 'Pie label alignTo',
          right: '16.67%',
          bottom: 0
        }],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问1' },
              { value: 310, name: '邮件营销1' },
              { value: 234, name: '联盟广告1' },
              { value: 135, name: '视频广告1' },
              { value: 1548, name: '搜索引擎1' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label,
            right: '41.6667%',
            left: 0,
            top: 0,
            bottom: 0
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label,
            left: '41.6667%',
            right: 0,
            top: 0,
            bottom: 0
          }
        ]
      }
      return option
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.initChart()
    })
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
