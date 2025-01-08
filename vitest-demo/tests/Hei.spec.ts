import {test} from 'vitest';
import {mount} from '@vue/test-utils';
import Hei from '../src/components/Hei'

test("test",()=>{
    console.log(Hei.setup?.toString())
    const wrapper = mount(Hei)
    expect(wrapper.text()).toContain("hei")
})