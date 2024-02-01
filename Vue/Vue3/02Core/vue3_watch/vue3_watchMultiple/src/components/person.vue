<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import {reactive,watch} from 'vue'

// 数据
let person = reactive({
  name:'张三',
  age:18,
  car:{
    c1:'奔驰',
    c2:'宝马'
  }
})
let obj = reactive({
  a:{
    b:{
      c:666
    }
  }
})
// 方法
function changeName(){
  person.name += '~'
}
function changeAge(){
  person.age += 1
}
function changeC1(){
  person.car.c1 = '奥迪'
}
function changeC2(){
  person.car.c2 = '大众'
}
function changeCar(){
  person.car = {c1:'雅迪',c2:'爱玛'}
}
function test(){
  obj.a.b.c = 888
}

//监视 watch(监视数据,回调函数)
// 监视，情况五：监视上述的多个数据
watch([()=>person.car,()=>person.name,obj],(newValue,oldValue)=>{
  console.log('变化了',newValue,oldValue)
},{deep:true})
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
