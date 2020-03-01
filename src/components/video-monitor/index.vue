<template>
  <div class="video-box">
    <transition name="move-right">
      <dv-border-box-10
        v-show="isShow"
        style="width: 100%;height:100%; box-sizing: border-box;position: absolute; right: 100%;"
      >
        <div style="width: 100%; height: 100%; padding:10px 10px; margin: auto;box-sizing: border-box;">
          <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" @slideChange="slideChange">
            <swiper-slide v-for="(item,key) in dataList" :key="key" :style="{backgroundImage:`url(${item.image})`}">
              <h2>{{item.title}}</h2>
            </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" @slideChange="slideChange">
            <swiper-slide v-for="(item,key) in dataList" :key="key" :style="{backgroundImage:`url(${item.image})`}"></swiper-slide>
          </swiper>
        </div>
      </dv-border-box-10>
    </transition>
    <div @click="isShow = !isShow" id="playWind" ref="playWind" style="width: 100%;height: 220px;"></div>
  </div>
</template>
<script>
// import '../../lib/ezuikit'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getVideoList, getAccesstoken } from '../../server'
import '../animation/index.less'

export default {
  name: 'video-monitor',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      isShow: false,
      accessToken: '',
      dataList: [],
      showSwiper: true,
      swiperOption: {
        // direction: 'vertical',
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        mousewheel: true
        // slidesPerView: 3,
        // spaceBetween: 30,
        // freeMode: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      },
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      curVideoUrl: ''
    }
  },
  methods: {
    init () {
      console.log(this.decoder)
    },
    initVideo () {
      const EZUIKit = global.EZUIKit
      let url = this.curVideoUrl
      let accessToken = this.accessToken
      let div = this.$refs.playWind
      let height = div.clientHeight - 2
      let width = div.clientWidth - 2

      if (this.decoder && this.decoder.stop) this.decoder.stop()

      this.decoder = new EZUIKit.EZUIPlayer({
        id: 'playWind',
        autoplay: true,
        url: url,
        accessToken: accessToken,
        decoderPath: '',
        width,
        height,
        handleError: () => {},
        handleSuccess: () => {}
      })

      console.log(this.decoder)
    },
    selectVideo (index) {
      this.dataList.map((item, idx) => {
        if (index === idx) this.curVideoUrl = item.live
      })

      this.$nextTick(() => this.initVideo())
    },
    setVideoList () {
      return getVideoList().then((res) => {
        this.dataList = res.data || []

        this.dataList.forEach(item => {
          item.sel = false
        })

        return res
      })
    },
    setAccessToken () {
      return getAccesstoken().then(res => {
        this.accessToken = res.data.accesstoken
        return res
      })
    },
    refreshToken (p1, p2) {
      Promise.all([p1, p2]).then(([res1, res2]) => {
        let expiresIn = res2.data.expires_in

        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.setAccessToken()
        }, expiresIn > 7200 ? expiresIn : 7200)

        this.selectVideo(0)
      })
    },
    slideChange (...args) {
      let swiper = this.$refs.swiperTop.swiper
      let realIndex = swiper.realIndex
      this.selectVideo(realIndex)
    }
  },
  mounted () {
    let p1 = this.setVideoList()
    let p2 = this.setAccessToken()
    this.refreshToken(p1, p2)

    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
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
    // /deep/ .swiper-container {
      // width: 100%;
      // height: 100%;
    // }
    /deep/ .swiper-slide {
      background: gray;
      height: auto;
    }
  }
}

.gallery-top {
  height: 80%!important;
  width: 100%;
}

.swiper-slide {
  background-size: cover;
  background-position: center;

  h2 {
    text-align: center;
    font-size: 24px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    font-weight: bold;
  }

  .swiper-container {
    background-color: #000;
  }
}
.gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
