<template>
  <div>
    <!-- <test></test> -->
    Hello Vue
    <!-- 路由容器 -->
    <!-- 一般直接使用vuex state用法 -->
    <!-- <tabbar v-show="$store.state.isTabbarShow"></tabbar> -->
    <!-- computed + mapState 寫法 -->
    <tabbar v-show="isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tabbar from './components/Tabbar.vue'
// import test from './components/Test.vue'
// 大括弧等價於之前定義組件中Vue.component('',{})的第二個參數
export default {
  data () {
    return {}
  },
  methods: {},
  //  區域組件建構方式
  components: {
    // test: test
    tabbar
  },
  computed: {
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  width:100%;
}
html{
  height:100%;
}
li{
  list-style: none;
}
</style>
