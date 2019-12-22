<template>
  <div class="left-bar">
    <!--  列表 -->
    <ul class="left-bar-ul overfollw-bar">
        <draggable :list="data" :group="{ name: 'people', pull: 'clone', put: false }" :clone="cloneLib">
          <li class="left-bar-li" v-for="(item, i) in data" :key="i">
            <img :src="require('@/assets/images/' + item.name + '.png')" alt="" />
          </li>
        </draggable>
    </ul>
    <!-- 展开、收缩图标 -->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "",
   components: {draggable},
  data() {
    return {
      data: [
        { name: "fl1" },

        { name: "ft1" }, // 输入框
        { name: "ft3" },
        { name: "ft4" },
        { name: "ft7" },
        { name: "ft8" },
        { name: "ft9" },
        { name: "ft10" },

        { name: "fs1" }, // 列表选择
        { name: "fs2" },
        { name: "fs3" },

        { name: "fc1" }, // 单选、多选
        { name: "fc2" },
        { name: "fc3" },
        { name: "fc4" },
        { name: "fc5" },

        { name: "ff1" }, // 文件按钮
        { name: "fb1" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.left-bar {
  height: 95vh;
  background-color: #f3f3f3;
  
}
.left-bar-ul{
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.left-bar-li {
  margin-top: 6px;
}
.left-bar-li img {
  width: 194px;
  height: 60px;
}
/* 滚动条样式--start */
.overfollw-bar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.overfollw-bar::-webkit-scrollbar-track {
  background:#eaeaea;
  border-radius: 2px;
}
.overfollw-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
 background: #bfbfbf;
 /* background-color: #f6f6f6 */
}
.overfollw-bar::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
  /* background-color: #f6f6f6 */
}
.overfollw-bar::-webkit-scrollbar-corner {
  background: #179a16;
}
/* 滚动条样式--end */
</style>
