<template>
  <div>
    <div :class="isactive ? 'green' : 'red'">{{ count }}</div>
    <button @click="handlePlusClick">click</button>
    <button @click="handleActiveClick">Active</button>
     <test></test>
  </div>

</template>

<script>
import test from '../components/Test.vue'
export default {
  data () {
    return {
      count: 1,
      isactive: true
    }
  },
  methods: {
    handlePlusClick () {
      this.count += 1
      console.log(this.$el.outerHTML)
      this.$nextTick(() => {
        console.log('nextTick') //  等待dom節點上的數據更新完畢，執行callback
        console.log(this.$el.outerHTML)
        console.log(this.count)
      })
    },
    handleActiveClick () {
      this.isactive = !this.isactive
    }
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  components: {
    test
  }
}
</script>

<style>
.red {
  background: red;
}
.green {
  background: green;
}
</style>
