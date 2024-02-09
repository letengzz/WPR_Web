<template>
  <div class="person">
    <h1>你好</h1>
<!--    <h2 id="title2">前端</h2>-->
    <h2 ref="title2">前端</h2>
    <h3>Vue</h3>
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import {ref} from "vue";

//变量名必须和ref中的名称一致
//创建一个title2,用于存储ref标记的内容
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)
function showLog(){
  // 通过id获取元素
  // console.log(document.getElementById('title2'));
  console.log(title2.value);
}
// vue中要使用defineExpose暴露内容
// 使用defineExpose将组件中的数据交给外部
defineExpose({a,b})
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
