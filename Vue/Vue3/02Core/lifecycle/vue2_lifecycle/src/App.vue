<template>
<!-- 借助于vue开发者工具将isShow改为false 则执行销毁-->
  <Person v-if="isShow"/>
</template>

<script>
import Person  from './components/Person.vue'
export default {
  name: 'App',
  components: { Person },
  data(){
    return {
      isShow:true
    }
  }
}
</script>
