<template>
    <div>
        <ul>
            <li v-for="data in list" :key="data.id" @click="handleItemClick(data.id)">
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
    // axios({
    //   url: '../../fakeApi/fakeData.json',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
    fetch('/fakeData.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.productInfo)
        this.list = res.data.productInfo
      })
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
