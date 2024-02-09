<template>
  <div class="person">
    <!-- 不需要加.value -->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <br>
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <h2>测试：{{obj.a.b.c.d}}</h2>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeFirstGame">修改第一游戏</button>
    <button @click="test">测试</button>
  </div>
</template>

<!-- 下面的写法是setup语法糖 -->
<script setup lang="ts" name="Person">
import {ref} from "vue";

// name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。
let name = ref('张三')
let age = ref(18)
// tel就是一个普通的字符串，不是响应式的
let tel = '1388888888'
let car = ref({ brand: '奔驰', price: 100 })
let games = ref([
  { id: 'ahsgdyfa01', name: '英雄联盟' },
  { id: 'ahsgdyfa02', name: '王者荣耀' },
  { id: 'ahsgdyfa03', name: '原神' }
])
let obj = ref({
  a:{
    b:{
      c:{
        d:666
      }
    }
  }
})

console.log(car)


function changeName() {
  // 注意：name不是响应式的，name.value是响应式的，会引起页面的更新。
  // JS中操作ref对象时候需要.value
  name.value = 'zhang-san'
  console.log(name.value)
}

function changeAge() {
  // 注意：name不是响应式的，name.value是响应式的，会引起页面的更新。
  // JS中操作ref对象时候需要.value
  age.value += 1
  console.log(age.value)
}

function showTel() {
  alert(tel)
}

function changeCarPrice() {
  car.value.price += 10
}
function changeFirstGame() {
  games.value[0].name = '流星蝴蝶剑'
}
function test(){
  obj.value.a.b.c.d = 999
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
