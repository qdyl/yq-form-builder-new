<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="4" class="left-bar"> <left-bar></left-bar> </el-col>
      <el-col :span="16"> <center-bar></center-bar> </el-col>
      <el-col :span="4"> <right-bar></right-bar> </el-col>
    </el-row>
  </div>
</template>

<script>
import LeftBar from '../components/edit/Left'
import CenterBar from '../components/edit/Center'
import RightBar from '../components/edit/Right'
export default {
  name: 'home',
  components: {LeftBar, CenterBar, RightBar}
}
</script>

<style scoped>
.left-bar{
   background-color: #f3f3f3;
}
</style>
