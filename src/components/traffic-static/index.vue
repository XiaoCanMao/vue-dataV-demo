<template>
  <div class="traffic-staic-box">
    <dv-charts ref="chart" :option="option1" />
    <dv-charts ref="chart" :option="option2" />
  </div>
</template>
<script>
import { getOption1, getOption2 } from './options'

export default {
  props: {
    config: {
      type: Array,
      default () {
        return []
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
      this.setOption1(config, getOption1())
      this.setOption2(config, getOption2())
    },
    setOption1 (config, option) {
      this.option1 = this.getOptions(config, option)
    },
    setOption2 (config, option) {
      this.option2 = this.getOptions(config, option)
    },
    getOptions (conf, option) {
      let series = option.series
      series = series.map((item, index) => {
        let data = item.data

        data = data.map(item => {
          return {
            ...item,
            name: conf[index].title,
            value: conf[index].value
          }
        })

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
.traffic-staic-box{
  height: 100%;
  width: 100%;
  display: flex;
  &>div {
    width: 50%;
    height: 100%;
  }
}
</style>
