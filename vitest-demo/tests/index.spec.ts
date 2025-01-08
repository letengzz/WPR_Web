import {add} from '../src/add.ts'
import HelloWorld from '../src/components/HelloWorld.vue'

test('first test',()=>{
    // 1 + 1 是否等于 2
    expect(1 + 1).toBe(2);
})


test('add',()=>{
    // 1 + 1 是否等于 2
    expect(add(1,1)).toBe(2);
})

test('hello',()=>{
    console.log(HelloWorld)
})
