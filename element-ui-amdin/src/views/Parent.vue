<template>
  <div>
      <h1>Parent</h1>
      <m-child v-bind:msg="parentData" @emitfnChang='fnChange' ref="refChild1" v-bind="$attrs" v-on="$listeners"></m-child>
  </div>
</template>

<script>
import MChild from './Child'
export default {
  name: '',
  components:{MChild},
  data() {
    return {
        parentData:"我是父组件的数据"
    };
  },
  mounted(){
      window.console.log(this.$children);
      window.console.log('ref',this.$refs.refChild1);

      this.$emit('test1','嘻嘻')
  },
  methods: {
      fnChange(param){
          this.parentData = this.parentData + param
      }
  },
};
</script>

<style scoped>

</style>
