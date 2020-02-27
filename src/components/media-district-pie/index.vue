<template>
  <div class="media-district-box">
    <!-- <div ref="chart"></div> -->
    <dv-charts class="lc2-chart" :option="option1" />
    <dv-charts class="lc2-chart" :option="option2" />
    <!-- <dv-charts class="lc2-chart" :option="option2" /> -->
  </div>
</template>
<script>
import { getOption1, getOption2 } from './options'

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
    const option1 = getOption1()
    const option2 = getOption2()

    return {
      option1,
      option2
    }
  },
  methods: {
    setOption (config) {
      const data = config.data
      this.setOption1(data[0], getOption1())
      this.setOption2(data[1], getOption2())
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
