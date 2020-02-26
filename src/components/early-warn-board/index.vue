<template>
  <div class="ear-warn-box">
    <div>
      <dv-charts :option="option1"></dv-charts>
      <dv-charts :option="option2"></dv-charts>
    </div>
    <div>
      <dv-scroll-board class="dv-scroll-board" ref="board" :config="config" style="width:100%;height:100%" />
    </div>
  </div>
</template>
<script>
export default {
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
      formatter: '{value}',
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
              { name: '异常', value: 65, gradient: ['#990000', '#990066', '#990099'] }
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
              { name: '离线', value: 89, gradient: ['#777777', '#999999', '#BBBBBB'] }
            ],
            details
          }
        ]
      },
      config: {
        rowNum: 7,
        align: ['center'],
        data: [
          ['<span style="color:#990000;">菜市场LED电子屏xxxxxx</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏xxxxxx</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏xxxxxx</span>'],
          ['<span style="color:#777777;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>'],
          ['<span style="color:#777777;">菜市场LED电子屏</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏</span>'],
          ['<span style="color:#37a2da;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>'],
          ['<span style="color:#990000;">菜市场LED电子屏</span>']
        ],
        evenRowBGC: '#404a5900',
        oddRowBGC: '#404a5900'
        // index: true
      }
    }
  },
  computed: {
    rowHeights () {
      let data = this.config.data || []
      return Array(data.length).fill(35)
    }
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
