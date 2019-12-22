<template>
  <div id="app">
    <!-- <Mparent :msga="a" :msgb="b" :msgc="c" v-on:test1="onFntest1" v-on:test2="onFntest2"></Mparent> -->
    <button @click="fnbusMsg">app:通过bus传递数据给child组件</button>
  
    <button @click="fnCtohome">点击跳转到home,并传递参数</button>
    <router-view></router-view>
  </div>
</template>

<script>
import bus from './utils/bus.js'
// import Mparent from "./views/Parent";
export default {
  // components: { Mparent },
  data(){
    return {
      a:'aaa',
      b:'bbbb',
      c:'cccc'
    }
  },
  methods:{
    fnbusMsg(){
      bus.$emit('emitbusMsg','hello yeeew')

    },
    onFntest1(val){
      window.console.log('listener',val)
    },
    onFntest2(val){
       window.console.log('listener',val)
    },
    fnCtohome(){
      // this.$router.push({path:'/home',query:{name:"jakaa"}})
      this.$router.push({name:'home',params:{id:"jakaa"}})
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
