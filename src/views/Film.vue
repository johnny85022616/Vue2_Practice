<template>
    <div>
        <Swiper :swiperData="data" :key="data.length" ref="myswiper"></Swiper>
        <Filmheader :class="isFixed?'fixed':''"></Filmheader>
        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from '../components/swiper.vue'
import Filmheader from '../views/Film/Filmheader.vue'
export default {
  data () {
    return {
      data: [],
      isFixed: false
    }
  },
  components: {
    Swiper,
    Filmheader
  },
  mounted () {
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((res) => {
        this.data = res.data.productInfo
      })
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll () {
    //   console.log(document.documentElement.scrollTop)
    //   console.log(this)
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) { //  滑動高度大於swiper高度
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  beforeDestroy () {
    // window.removeEventListener('scroll', this.handleScroll)
    window.onscroll = null //  組建銷毀前會取消scroll事件追蹤
  }
}
</script>

<style lang="scss" scoped>
    .fixed{
        position:fixed;
        top:0px;
        left:0px;
        background-color: white;
    }
</style>
