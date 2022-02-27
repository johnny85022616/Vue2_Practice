import Vue from 'vue'
import Vuex from 'vuex'
import { HIDE_TABBAR, SHOW_TAB_BAR, COMMING_LIST_MUTATION } from './type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    commingSoonList: []
  },
  //  getter 功能為state值經過處理後返回得值
  getters: {
    //  需要傳入參數進getter的寫法為回傳一個帶有參數的function
    // commingSoonListGetter: (state) => (id) => {
    //   return state.commingSoonList.filter((ele, index) => {
    //     return index < id
    //   })
    // },
    commingSoonListGetter (state) {
      return state.commingSoonList.filter((ele, index) => {
        return index < 3
      })
    }
  },
  // 唯一能夠更改共用state的地方
  mutations: {
    [HIDE_TABBAR] (state, data) {
      this.state.isTabbarShow = data
    },
    [SHOW_TAB_BAR] (state, data) {
      this.state.isTabbarShow = data
    },
    [COMMING_LIST_MUTATION] (state, data) {
      this.state.commingSoonList = data
    }
  },
  //  需要做非同步更新state則需要經過action階段
  actions: {
    //  異步請求
    getCommingSoonListAction (store) {
      fetch('/fakeData.json')
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data.productInfo)
          store.commit(COMMING_LIST_MUTATION, res.data.productInfo) //  觸發mutation
        })
    }
  },
  modules: {
  }
})
