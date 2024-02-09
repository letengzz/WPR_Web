<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>{{person.name}}</h2>
    <h2>{{person.age}}</h2>
    <button @click="changeName()">修改名字</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="changePerson()">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, watch} from 'vue'
//数据
let person = ref({
  name: '张三',
  age: 18
})
//方法
function  changeName(){
  person.value.name += '~'
}
function changeAge(){
  person.value.age += 1
}
function changePerson(){
  person.value = {
    name: '李四',
    age: 38
  }
}
//监视 watch(监视数据,回调函数)
/*
  监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
  watch的第一个参数是：被监视的数据
  watch的第二个参数是：监视的回调
  watch的第三个参数是：配置对象（深度监视：deep、立即监视 不管是否变化初次都会监视：immediate等等.....）
*/
const stopWatch = watch(person, (newValue, oldValue) =>{
  console.log('person变化了',newValue,oldValue)
  if(newValue.age>50){
    //结束监视
    console.log('监视停止了')
    stopWatch()
  }
},{deep:true,immediate:true})
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
