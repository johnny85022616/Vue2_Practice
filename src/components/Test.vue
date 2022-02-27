<template>
  <div class="div1">
    <button @click="handleClick(0)" :class="activeNumber ===0?'active':''">HTML5</button>
    <button @click="handleClick(1)" :class="activeNumber ===1?'active':''">Javascript</button>
    <button @click="handleClick(2)" :class="activeNumber ===2?'active':''">JQuery</button>
    <div :class="activeNumber ===0?'show':''">
      HTML5是HTML最新的修訂版本，由全球資訊網協會（W3C）於2014年10月完成標準制定
    </div>
    <div :class="activeNumber ===1?'show':''">
      JavaScript是一門基於原型、頭等函式的語言，是一門多範式的語言，它支援物件導向程式設計，指令式編程，以及函式語言程式設計。
    </div>
    <div :class="activeNumber ===2?'show':''">
      jQuery是開源軟體，使用MIT授權條款授權。 ...
      jQuery的語法設計使得許多操作變得容易，如操作文件（document）、選擇文件物件模型（DOM）元素、建立動畫效果、處理事件
    </div>
  </div>
</template>

<script>

// 大括弧等價於之前定義組件中Vue.component('',{})的第二個參數
export default {
  data () {
    return {
      activeNumber: 0
    }
  },
  methods: {
    handleClick (i) {
      this.activeNumber = i
    }
  },

  mounted () {

  }
}
</script>

// 支持scss語法
<style lang="scss">
.div1 {
  button {
    width: 100px;
    height: 30px;
    background-color: gray;
    font-size: 16px;
    color: white;
  }
  div {
    width: 350px;
    height: 350px;
    background-color: gray;
    font-size: 16px;
    border: 1px solid black;
    display: none;
  }
  .active {
    background-color: orange;
    color: blue;
  }
  .show{
    display: block;
  }
}
</style>
