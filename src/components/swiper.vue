<template>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in swiperData" :key="data.id">
            <img :src="data.poster"/>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['swiperData'],
  mounted () {
    new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
        delay: 5000
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    .mySwiper{
        width:100%;
        height:300px;
        img{
            width:100%;
        }
    }
</style>
