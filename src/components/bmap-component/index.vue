<template>
  <div class="bmap-com" ref="mapBox"></div>
</template>
<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'

echarts.registerMap('china', china)

export default {
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  methods: {
    initMap () {
      let mapBox = this.$refs.mapBox
      let myEchart = echarts.init(mapBox)

      myEchart.setOption(this.getMapOpt())
    },
    getMapOpt (place) {
      let option = ({
        backgroundColor: '#404a5900',
        // title: {
        //   text: 'mapDemo',
        //   subtext: 'data from map',
        //   left: 'center'
        // },
        geo: {
          map: place || 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        }
      })

      return option
    }
  }
}
</script>
<style lang="less" scoped>
  .bmap-com {
    width: 100%;
    height: 100%;
  }
</style>
