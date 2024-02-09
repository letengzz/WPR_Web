<template>
  <div class="person">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <h2>汽车信息：一台{{ brand }}汽车，价值{{ price }}万 {{price2}}</h2>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changePrice">修改价格</button>
  </div>
</template>

<!-- 下面的写法是setup语法糖 -->
<script setup lang="ts" name="Person">
import {reactive, toRef, toRefs} from 'vue'

// 数据
let car = reactive({
  brand: '奔驰',
  price: 100
})

//解构赋值 相当于 let brand = car.brand let price = car.price
// let {brand, price} = car
//toRefs接受一个由reactive生成的响应式对象，返回一个由相同key的ref包装的对象
let {brand, price} = toRefs(car)
console.log(brand, price)
let price2 = toRef(car, 'price')
console.log(price2)
// 方法
function changeBrand() {
  // car.brand = '宝马'
  //页面不能变化
  // brand += '~'
  // console.log(brand,car.brand)
  brand.value += '~'
  console.log(brand.value,car.brand)
}

function changePrice() {
  // car.price += 1
  //页面不能变化
  // price += 1
  // console.log(price,car.price)
  price.value += 1
  console.log(price.value,car.price)
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
