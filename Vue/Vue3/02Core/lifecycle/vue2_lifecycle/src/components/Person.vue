<template>
  <div class="person">
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>
<script>
export default {
  name: 'MyPerson',
  //数据
  data() {
    return {
      sum: 0
    }
  },
  //方法
  methods: {
    add() {
      this.sum++
    }
  },
  //创建前的钩子
  beforeCreate() {
    console.log("person---beforeCreate")
    // debugger
    debugger;
  },
  //创建后的钩子
  created() {
    console.log("person---beforeCreate")
  },
  //挂载前的钩子
  beforeMount() {
    console.log("person---beforeMount")
  },
  //挂载后的钩子
  mounted() {
    console.log("person---beforeMount")
  },
  //更新前的钩子
  beforeUpdate() {
    console.log("person---beforeUpdate")
  },
  //更新后的钩子
  updated() {
    console.log("person---updated")
  },
  //销毁前的钩子
  beforeDestroy() {
    console.log("person---beforeDestroy")
  },
  //销毁后的钩子
  destroyed() {
    console.log("person---destroyed")
  }
}
</script>


<style scoped>
.person {
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
