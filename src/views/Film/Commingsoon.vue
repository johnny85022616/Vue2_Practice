<template>
    <div>
        <ul>
            <!--普通取值方式-->
            <!-- <li v-for="data in $store.state.commingSoonList" :key="data.id" @click="handleItemClick(data.id)"> -->
            <!-- 利用getter方式取值 -->
            <li v-for="data in commingSoonListGetter" :key="data.id" @click="handleItemClick(data.id)">
                <div :style="{backgroundImage:`url(${data.poster})`}" class="imgBlock"></div> <!--先寫 style 才寫class 不然會有錯誤-->
                <div>
                  <h3>{{data.name}}</h3>
                  <p>觀眾評分{{data.grade}}</p>
                  <p>主演:{{data.actors | actorFilter}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleItemClick (id) {
    //  編程式導航 - 路徑跳轉
      this.$router.push(`/detail/${id}`)
    //  邊程式導航 - 名字跳轉
    // this.$router.push({ name: 'johnnydetail', params: { myid: id } })
    }
  },
  //  過濾器
  filters: {
    actorFilter: function (data) {
      const newList = data.map(ele => {
        return ele && ele.name
      })
      return newList.join(' ')
    }
  },
  mounted () {
    //  利用vuex進行資料暫存
    if (this.$store.state.commingSoonList.length === 0) {
      this.$store.dispatch('getCommingSoonListAction') //  觸發action
    }
  },
  computed: {
    ...mapGetters(['commingSoonListGetter'])
  }
}
</script>

<style lang="scss" scoped>
  li{
    display: flex;
    .imgBlock{
              width:25vw;
              height:30vw;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
  }
</style>
