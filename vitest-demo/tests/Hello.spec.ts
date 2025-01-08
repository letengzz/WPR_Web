import Hello from '../src/components/Hello.vue'
import {mount} from '@vue/test-utils'
test('first test',()=>{
    console.log(Hello);
    const wrapper = mount(Hello);
    expect(wrapper.text()).toContain("hello");
})