<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{ fullName }}</span> <br>
    <button @click="changeFullName">全名改为：li-si</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import {ref, computed} from 'vue'

// 数据
let firstName = ref('zhang')
let lastName = ref('san')
// 计算属性——只读取，不修改
/* let fullName = computed(()=>{
  return firstName.value + '-' + lastName.value
}) */


// 计算属性——既读取又修改
let fullName = computed({
  // 读取
  get() {
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.split('-')[0].slice(1) + '-' + lastName.value
  },
  // 修改
  set(val) {
    console.log('有人修改了fullName', val)
    firstName.value = val.split('-')[0].slice(0,1).toUpperCase() + val.split('-')[0].slice(1)
    lastName.value = val.split('-')[1]
  }
})

// 方法

function changeFullName() {
  // firstName.value = 'li'
  // lastName.value = 'si'
  fullName.value = 'li-si'
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
