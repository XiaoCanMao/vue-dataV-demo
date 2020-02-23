<template>
  <div class="container">
    <div class="bmap-wrap-box">
      <slot name="bmap-com"></slot>
    </div>
    <div class="con-main">
      <div class="m-wrap-box">
        <dv-border-box-13>
          <div class="digital-flag">显示屏设备</div>
          <dv-digital-flop :config="{number: [100],content: '{nt}台', style:{fontSize: 24, textAlign:'right'}}"/>
        </dv-border-box-13>
        <dv-border-box-13>
          <div class="digital-flag">其他设备</div>
          <dv-digital-flop :config="{number: [100],content: '{nt}台', style:{fontSize: 24, textAlign:'right'}}"/>
        </dv-border-box-13>
        <dv-border-box-13>
          <div class="digital-flag">覆盖人群</div>
          <dv-digital-flop :config="{number: [100],content: '{nt}人', style:{fontSize: 24, textAlign:'right'}}"/>
        </dv-border-box-13>
      </div>
    </div>
    <div class="con-left" style="display: flex;">
      <div class="le-top">
        <dv-border-box-11 title="今日报警">
          <div class="border-box-container">
            <slot name="early-warn-board"></slot>
          </div>
        </dv-border-box-11>
      </div>
      <div class="le-bottom">
        <dv-border-box-11 title="今日监播任务">
          <div class="border-box-container">
            <slot name="monit-trend-chart"></slot>
          </div>
        </dv-border-box-11>
      </div>
    </div>
    <div class="con-right">
      <div class="ri-top">
        <dv-border-box-11 title="今日媒体">
          <div class="border-box-container">
            <slot name="media-district-pie"></slot>
          </div>
        </dv-border-box-11>
      </div>
      <div class="ri-middle">
        <dv-border-box-11 title="今日流量">
          <div class="border-box-container">
            <slot name="traffic-static"></slot>
          </div>
        </dv-border-box-11>
      </div>
      <div class="ri-bottom">
        <dv-border-box-7></dv-border-box-7>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
// https://blog.csdn.net/weixin_39168678/article/details/97247507
</script>
<style lang="less" scoped>
@layoutWd: 26%;
.container {
  display: flex;
}
.con-main {
  flex-grow: 1;
  height: 100%;
  // border: 1px solid red;
  box-sizing: border-box;
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
  }

  .border-box-content .dv-digital-flop {
    width: 85%;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 5px;
  }
}
.con-left {
  order: -1;
  flex: 0 1 @layoutWd;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border:1px solid blue;
  // box-sizing: border-box;
  .le-top {
    order: -1;
    flex: 0 1 60%;
    margin-bottom: 10px;
  }
  .le-middle {
    flex-grow: 1;
    border: 1px solid red;
  }
  .le-bottom {
    margin-top: 20px;
    flex: 1 1;
  }
}
.con-right {
  flex: 0 1 @layoutWd;
  margin-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border: 1px solid green;
  .ri-top {
    order: -1;
    flex: 0 1 30%;
    margin-bottom: 10px;
  }
  .ri-middle {
    flex-grow: 1;
  }
  .ri-bottom {
    flex: 0 1 40%;
    margin-top: 20px;
  }
}
.bmap-wrap-box {
  width:100%;
  height: 100%;
  position: absolute;
}
.border-box-container {
  height: calc(100% - 63px);
  width: auto;
  position: relative;
  top: 55px;
  margin: 0 2%;
  // border: 1px solid red;
}
</style>
