<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="changeName()">修改名字</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="changePerson()">修改人</button>
    <hr>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {reactive, watch} from 'vue'
//数据
let person = reactive({
  name: '张三',
  age: 18
})
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})

//方法
function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  //对象还是之前的对象，所以直接赋值不会触发监视
  Object.assign(person, {name: '李四', age: 40})
}

function test() {
  obj.a.b.c = 888
}

//监视 watch(监视数据,回调函数)
//监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的且删除不到
const stopWatch = watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
  if (newValue.age > 50) {
    //结束监视
    console.log('停止监视')
    stopWatch()
  }
}, {immediate: true})

watch(obj,(newValue,oldValue)=>{
  console.log('Obj变化了',newValue,oldValue)
})
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
