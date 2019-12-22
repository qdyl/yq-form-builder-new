import Vue from 'vue'
import Vuex from 'vuex'
import MoudleA from './module/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1000000,
  },
  getters:{ // getters 、mutations都接受state作为第一个参数，代表 state中的值。
    gettersCount(state){
      return state.count *2
    }
  },
  mutations: { // getters 、mutations都接受state作为第一个参数，代表 state中的值。
    add(state){
      state.count++
    },
    decrease(state){
      state.count--
    }
  },
  actions: {  // action 提交的是mutation，而不是直接修改state
    delayAdd(context){  // action 函数接收一个与store 实例具有相同方法和属性的 context 对象，也因此可以调用 context.coommit 提交一个 mutation
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    }
  },
  modules: {
    MoudleA

  }
})
