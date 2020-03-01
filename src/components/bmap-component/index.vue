<template>
  <div id="bmap-com" ref="mapBox" style="width: 100%;height: 100%;"></div>
</template>
<script>

// import echarts from 'echarts'
// import china from 'echarts/map/json/china.json'
// echarts.registerMap('china', china)
import { getplayer } from '../../server'

export default {
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  methods: {
    initMap () {
      let inmap = new global.inMap.Map({
        id: 'bmap-com',
        skin: 'Blueness',
        center: [120.775208, 30.772706],
        zoom: {
          value: 13,
          show: true,
          max: 18,
          min: 5
        }
      })

      let map = inmap._map

      // 先创建初始marker点
      getplayer().then(result => {
        let datas = result['data']
        let markers = datas.map(data => {
          var m = new global.BMap.Marker(new global.BMap.Point(data['detail']['map_lng'], data['detail']['map_lat']))
          m.data = data
          return m
        })

        // eslint-disable-next-line no-unused-vars
        const markerClusterer = new global.BMapLib.MarkerClusterer(map, { markers: markers })
      })
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
