<template>
  <div>
      我是home页
      <!-- <h2 class="ghh">{{$route.params.id}}</h2>
      <h3 class="">计算属性：{{storeCount}} --- {{storeCount2}}</h3>
      <div class=""><button @click="mutationAdd">点击出发commit</button></div>
      <div><button @click="fndispatchCount">触发disPatch</button></div>
      <div>获取getters中的数据-- {{calGettersCount}}</div>
      <div>通过mapGetters获取getters中数据：{{renameGetterCount}}</div> -->

      <div class="">获取模块A 的 state: {{moduleACount}}</div>
      <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  name: 'home',
  computed:{
      storeCount(){
          return this.$store.state.count
      },
      ...mapState({
           storeCount2:'count',
           moduleACount: state => state.MoudleA.countA   // 只跟模块名字，有关系，跟目录结构没有关系
      }),
      // 获取getters中的数据
      calGettersCount(){
          return this.$store.getters.gettersCount
      },
      ...mapGetters({
          renameGetterCount:'gettersCount'
      })
  },

  data() {
    return {
    };
  },
  methods: {
      // 
      fnCommitCount(){
          this.$store.commit('add')
      },
      ...mapMutations({
          mutationAdd:'add' // 将 mutations 
      }),
      // 触发 dispatch
      fndispatchCount(){
          this.$store.dispatch('delayAdd')
      }

  },
};
</script>

<style scoped>

</style>

