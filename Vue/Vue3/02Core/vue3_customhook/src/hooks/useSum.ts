import {ref, onMounted, compile, computed} from 'vue'

export default function(){
    let sum = ref(0)
    let bigSum = computed(()=>{
        return sum.value * 10
    })
    const increment = ()=>{
        sum.value += 1
    }
    const decrement = ()=>{
        sum.value -= 1
    }
    onMounted(()=>{
        increment()
    })

    //向外部暴露数据
    return {sum,bigSum,increment,decrement}
}
