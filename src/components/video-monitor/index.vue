<template>
  <div class="video-box">
    <div>
      <video
        id="video-monitor-component"
        width="100%"
        ref="video"
        :src="curVideoUrl"
        autoplay
        controls
        playsInline
        webkit-playsinline>
      </video>
    </div>
    <div>
      <div>
        <swiper :options="swiperOption">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
     </div>
    </div>
  </div>
</template>
<script>
import '../../lib/ezuikit'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'video-monitor',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      showSwiper: true,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      curVideoUrl: 'http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8'
    }
  },
  methods: {
    initVideo () {
      const EZUIKit = global.EZUIKit
      const player = new EZUIKit.EZUIPlayer('video-monitor-component')
      player.on('log', (str) => console.log(str))
    }
  },
  mounted () {
    this.$nextTick(() => this.initVideo())
  }
}
</script>
<style lang="less" scoped>
.video-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &>div:nth-child(2) {
    flex-grow: 1;
    position: relative;
    &>div {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    /deep/ .swiper-container {
      width: 100%;
      height: 100%;
    }
    /deep/ .swiper-slide {
      background: gray;
    }
  }
}
</style>
