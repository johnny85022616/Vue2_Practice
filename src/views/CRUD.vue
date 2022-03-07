<template>
  <div class="crud">
    <div class="chose">
      <button
        :class="activeNumber === 0 ? 'buttonActive' : ''"
        @click="handleClick(0)"
      >
        create
      </button>
      <button
        :class="activeNumber === 1 ? 'buttonActive' : ''"
        @click="handleClick(1)"
      >
        delete
      </button>
      <button
        :class="activeNumber === 2 ? 'buttonActive' : ''"
        @click="handleClick(2)"
      >
        update
      </button>
    </div>
    <div class="show">
      <div class="create" v-if="activeNumber === 0">
        <div><span>姓名</span><input v-model.trim="name" /></div>
        <div><span>年齡</span><input v-model="age" type="number" /></div>
        <div>
          <input v-model="sex" type="radio" value="male" /><span>男</span>
          <input v-model="sex" type="radio" value="female" /><span>女</span>
        </div>
        <div><button @click="handleCreateSend">送出</button></div>
      </div>

      <div class="delete" v-if="activeNumber === 1">
        <ul v-if="list">
          <li v-for="(data, index) in list" :key="index">
            <input type="checkbox" :value="index" v-model="checkgroup" />
            <span
              >姓名: {{ data.name }} 年齡: {{ data.age }} 性別:
              {{ data.sex === "male" ? "男" : "女" }}</span
            >
          </li>
        </ul>
        <button @click="handleDeleteSend">送出</button>
      </div>

      <div class="update" v-if="activeNumber === 2">
        <ul v-if="open">
          <li v-for="(data, index) in list" :key="index">
            <input type="radio" :value="index" v-model="picked" />
            <span
              >姓名: {{ data.name }} 年齡: {{ data.age }} 性別:
              {{ data.sex === "male" ? "男" : "女" }}</span
            >
          </li>
          <button @click="handleModifyClick">變更</button>
        </ul>
        <div v-else>
          <div><span>姓名</span><input v-model.trim="chosename" /></div>
          <div><span>年齡</span><input v-model="choseage" type="number" /></div>
          <div>
            <input v-model="chosesex" type="radio" value="male" /><span>男</span>
            <input v-model="chosesex" type="radio" value="female" /><span>女</span>
          </div>
          <div><button @click="handleModifySend">變更</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNumber: 0,
      name: '',
      age: '',
      sex: '',
      list: [
        { name: 'aaa', age: 11, sex: 'male' },
        { name: 'bbb', age: 22, sex: 'female' },
        { name: 'ccc', age: 33, sex: 'female' },
        { name: 'ddd', age: 44, sex: 'male' }
      ],
      checkgroup: [],
      picked: null,
      open: true,
      chosename: '',
      choseage: '',
      chosesex: ''
    }
  },
  methods: {
    handleClick (i) {
      this.activeNumber = i
    },
    handleCreateSend () {
      this.list.push({
        name: this.name,
        age: this.age,
        sex: this.sex
      })
      this.name = ''
      this.age = ''
      this.sex = ''
    },
    handleDeleteSend () {
      // const list = this.list
      const checkgroup = this.checkgroup.sort((a, b) => a - b)
      const list = this.list
      for (let i = checkgroup.length - 1; i >= 0; i--) {
        list.splice(checkgroup[i], 1)
      }
      this.checkgroup = []
      this.list = list
    },
    handleModifyClick () {
      console.log(this.picked)
      if (this.picked !== null) {
        this.open = false
        const choseUser = this.list[this.picked]
        this.chosename = choseUser.name
        this.choseage = choseUser.age
        this.chosesex = choseUser.sex
      } else {
        alert('選擇修改對象')
      }
    },
    handleModifySend () {
      this.list[this.picked] = {
        name: this.chosename,
        age: this.choseage,
        sex: this.chosesex
      }
      this.open = true
      this.chosename = ''
      this.chosesex = ''
      this.choseage = ''
      this.picked = ''
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  width: auto;
  padding: 0;
  margin: 0;
}
.crud {
  padding: 0 5%;
  .chose {
    width: 100%;
    display: flex;
    button {
      width: 33.33%;
    }
    .buttonActive {
      background-color: orange;
    }
  }
  .show {
    .create {
      span {
        margin-right: 20px;
      }
    }
    .delete {
      input {
        margin-right: 10px;
      }
    }
  }
}
</style>
