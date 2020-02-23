<template>
  <div class="ear-warn-box">
    <div>
      <dv-charts :option="option" style="width:100%;height:185px;"></dv-charts>
      <!-- <dv-active-ring-chart :config="config" style="/*width:185px;height:185px;margin: auto;*/"/> -->
      <!-- <dv-active-ring-chart :config="config" style="/*width:185px;height:185px;margin: auto;*/"/> -->
    </div>
    <div>
      <dv-scroll-board :config="config" style="width:100%;height:100%" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      option: {
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 8,
            data: [
              { name: 'itemA', value: 65, gradient: ['#990000', '#990066', '#990099'] }
            ],
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
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 14
              }
            },
            center: ['28%']
          },
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 8,
            data: [
              { name: 'itemA', value: 89, gradient: ['#777777', '#999999', '#BBBBBB'] }
            ],
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
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 14
              }
            },
            center: ['72%']
          }
        ]
      },
      config: {
        data: [
          ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
          ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
          ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
          ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
          ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
          ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
          ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
          ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
          ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
          ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
        ],
        evenRowBGC: '#404a5900',
        oddRowBGC: '#404a5900',
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ear-warn-box {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  &>div:first-child {
    flex: 0 1 25%;
  }
  &>div:nth-child(2) {
    flex-grow: 1;
    padding: 5px 8px;
  }
}
</style>
