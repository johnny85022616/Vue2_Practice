<template>
    <div v-if="data">   <!-- 解決 data 一開始為null , 但使用data的屬性的屬性出現Cannot read properties of null的錯誤，所以利用v-if設定當data有東西時才渲染此區域
     -->
       <h1>{{data.name}}</h1>
       <img :src="data.poster"/>
    </div>
</template>

<script>
import { HIDE_TABBAR, SHOW_TAB_BAR } from '../store/type'
export default {
  data () {
    return {
      data: null
    }
  },
  beforeMount () {
    //  進入頁面時將vuex中控制tabbar的state改成true
    this.$store.commit(HIDE_TABBAR, false)
  },
  mounted () {
    console.log('要id 獲取詳情訊息' + this.$route.params.myid)
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((res) => {
        this.data = res.data.productInfo.filter(ele => ele.id === Number(this.$route.params.myid))[0]
      })
  },
  beforeDestroy () {
    //  離開頁面時將vuex中控制tabbar的state改成false
    this.$store.commit(SHOW_TAB_BAR, true)
  }
}
</script>
<style lang="scss" scoped>
img{
  width:100%
}
</style>
