<template>
  <div>
      <h2>child</h2>
      <div class="">子组件接受的父组件的数据：{{msg}}</div>
      <button @click="fnChangeParentData">修改父组件的数据</button>
      <h3>{{chilldData}}</h3>
  </div>
</template>

<script>
import bus from '../utils/bus'
export default {
  name: 'child',
  props:{
      msg:{
          type:String,
          default:''
      }
  },
  data() {
    return {
        chilldData:"我是子组件的自己的数据"
    };
  },
  mounted(){
      bus.$on('emitbusMsg',(val)=>{
          this.chilldData = val;
      })
    //   window.console.log('这是子组件中获取父组件', this.$parent)
    window.console.log('$attrs', this.$attrs);
    this.$emit('test2','哈哈')
  },
  methods: {
      // 修改父组件的数据
      fnChangeParentData(){
          this.$emit('emitfnChang','hello')
      },
      // 
      fnListener(){
          this.$listeners('funListen')
      }

  },
};
</script>

<style scoped>

</style>
