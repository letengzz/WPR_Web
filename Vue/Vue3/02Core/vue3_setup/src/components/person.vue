<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  //配置式API-->
<!--  name: 'Person',-->
<!--  beforeCreate(){-->
<!--    console.log("beforeCreate")-->
<!--  },-->
<!--  // setup(){-->
<!--  //   console.log("setup")-->
<!--  //   // console.log(this) //setup函数中的this是undefined，Vue3中已经弱化this了-->
<!--  //   // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）-->
<!--  //   let name='张三'-->
<!--  //   let age=18-->
<!--  //   let tel='1388888888'-->
<!--  //-->
<!--  //   function changeName() {-->
<!--  //     name = 'zhang-san' //注意：此时这么修改name页面是不变化的-->
<!--  //     console.log(name) //name确实改了，但name不是响应式的-->
<!--  //   }-->
<!--  //   function changeAge() {-->
<!--  //     age += 1 //注意：此时这么修改age页面是不变化的-->
<!--  //     console.log(age) //age确实改了，但age不是响应式的-->
<!--  //   }-->
<!--  //   function showTel() {-->
<!--  //     alert(tel)-->
<!--  //   }-->
<!--  //-->
<!--  //   // 返回一个对象，对象中的内容，模板中可以直接使用-->
<!--  //   return {name,age,tel,changeName,changeAge,showTel}-->
<!--  // }-->
<!--}-->
<!--</script>-->

<!-- 下面的写法是setup语法糖 -->
<script setup lang="ts"  name="Person">
console.log("setup")
  // console.log(this) //setup函数中的this是undefined，Vue3中已经弱化this了
  // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
  let name='张三'
  let age=18
  let tel='1388888888'

  function changeName() {
    name = 'zhang-san' //注意：此时这么修改name页面是不变化的
    console.log(name) //name确实改了，但name不是响应式的
  }
  function changeAge() {
    age += 1 //注意：此时这么修改age页面是不变化的
    console.log(age) //age确实改了，但age不是响应式的
  }
  function showTel() {
    alert(tel)
  }
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
