<template>
  <div class="m-wrap-box">
    <dv-border-box-13 v-for="(item, key) in config" :key="key">
      <div class="digital-flag">{{item.title}}</div>
      <dv-digital-flop :config="{number: [item.value],content: `{nt}${item.unit}`, style:{fontSize: 18, textAlign:'right'}}"/>
    </dv-border-box-13>
  </div>
<script>
export default {
  props: {
    config: {
      type: Array,
      default () {
        return [
          { title: '显示屏设', value: 0, unit: '台', desc: '' },
          { title: '覆盖人群', value: 0, unit: '人次', desc: '' },
          { title: '其他设备', value: 0, unit: '台', desc: '' }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.m-wrap-box {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  &>div {
    flex: 0 1 30%;
  }
  .digital-flag {
    position: absolute;
    top: 22px;
    left: 18px;
  }
  .dv-digital-flop {
    width: 85%;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 5px;
  }
}
</style>
