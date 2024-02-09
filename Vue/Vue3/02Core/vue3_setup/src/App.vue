<!-- 编写模板结构 -->
<template>
  <!-- Html -->
  <div class="app">
    <h1>你好 世界</h1>
    <!-- Vue3 可以写多个根标签-->
    <Person/>
  </div>
</template>
<!-- 编写脚本代码 -->
<script lang="ts">
// export default {
//   name: 'App',
// }
</script>
<script setup lang="ts" name="App">
// JS或TS
import Person from "./components/person.vue"
</script>
<!-- 样式 -->
<style scoped>
/* css */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
