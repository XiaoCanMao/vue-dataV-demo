<template>
  <div class="ear-warn-box">
    <div>
      <dv-charts :option="option1"></dv-charts>
      <dv-charts :option="option2"></dv-charts>
    </div>
    <div>
      <dv-scroll-board class="dv-scroll-board" ref="board" :config="config1" style="width:100%;height:100%" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    config: {
      type: Object,
      default () {
        return {
          title: '',
          circular: [],
          lists: [],
          total: 0
        }
      }
    }
  },
  data () {
    let series = {
      type: 'gauge',
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 8,
      radius: '70%',
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      dataItemStyle: {
        lineCap: 'round'
      }
    }
    let title = {
      offset: [0, 10],
      style: {
        fill: '#fff'
      }
    }
    let details = {
      show: true,
      // formatter: '{value}',
      formatter: (item) => {
        let count = item.count ? item.count : 0
        return `${count}台`
      },
      offset: [0, 11],
      style: {
        fill: '#1ed3e5',
        fontSize: 18,
        position: 'end'
      }
    }

    return {
      option1: {
        title: {
          ...title,
          text: '异常'
        },
        series: [
          {
            ...series,
            data: [
              { name: '异常', value: 100, gradient: ['#990000', '#990066', '#990099'] }
            ],
            details
          }
        ]
      },
      option2: {
        title: {
          ...title,
          text: '离线'
        },
        series: [
          {
            ...series,
            data: [
              { name: '离线', value: 100, gradient: ['#777777', '#999999', '#BBBBBB'] }
            ],
            details
          }
        ]
      },
      config1: {
        rowNum: 7,
        align: ['center'],
        data: [
        ],
        evenRowBGC: '#404a5900',
        oddRowBGC: '#404a5900'
        // index: true
      }
    }
  },
  watch: {
    config: function (val, old) {
      this.setOption(val)
      this.setConfig(val.lists)
    }
  },
  methods: {
    setOption (config) {
      const total = config.total
      const [cir1, cir2] = config.circular
      const val1 = cir1 ? cir1.value : 0
      const val2 = cir2 ? cir2.value : 0

      this.setOption1(total, val1)
      this.setOption2(total, val2)
    },
    setOption1 (total, value) {
      const option = this.option1
      this.option1 = this.getOptions(total, value, option)
    },
    setOption2 (total, value) {
      const option = this.option2
      this.option2 = this.getOptions(total, value, option)
    },
    getOptions (total, value, options) {
      let val = (value / total).toFixed(2) * 100

      const series = options.series
      options.series = series.map(serItem => {
        let data = serItem.data
        data = data.map(item => {
          return {
            ...item,
            value: val,
            count: value
          }
        })

        return {
          ...serItem,
          data
        }
      })

      return { ...options }
    },
    setConfig (list) {
      const config1 = this.config1
      const data = this.getListStyle(list)
      this.config1 = {
        ...config1,
        data
      }
    },
    getListStyle (list) {
      return list.map(item => [`<span style="color:#37a2da;">${item.title}</span>`])
    }
  },
  computed: {
    rowHeights () {
      let data = this.config.data || []
      return Array(data.length).fill(35)
    }
  },
  mounted () {
    // this.setOption(this.config)
  }
}
</script>
<style lang="less" scoped>
@height:145px;
.ear-warn-box {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  &>div:first-child {
    height: @height;
    display: flex;
    &>div {
      width: 50%;
      height: 100%;
    }
  }
  &>div:nth-child(2) {
    flex: 0 1 calc(100% - @height);
    // flex: 0 1 100%;
    padding: 5px 8px;
  }
}
// .dv-scroll-board /deep/ .row-item{
//   height: 35px !important;
// }
</style>
