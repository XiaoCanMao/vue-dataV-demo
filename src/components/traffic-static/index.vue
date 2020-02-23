<template>
  <div class="traffic-staic-box">
    <dv-charts :option="option" />
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
              { name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
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
              { name: 'itemA', value: 89, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
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
      }
    }
  }
}
</script>
<style lang="less" scoped>
.traffic-staic-box{
  height: 100%;
  width: 100%;
  &>div {
    width: 100%;
    height: 100%;
  }
}
</style>
