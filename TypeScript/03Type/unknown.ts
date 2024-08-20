// 设置a的类型为unknown
let a: unknown

//以下对a的赋值，均符合规范
a = 100
a = false
a = '你好'

// 设置x的数据类型为string
let x: string
x = a //警告：不能将类型“unknown”分配给类型“string”


//第一种方式：加类型判断
if(typeof a === 'string'){
 x = a
 console.log(x)
}
//第二种方式：加断言
x = a as string
//第三种方式：加断言
x = <string>a


let str1: string
str1 = 'hello'
str1.toUpperCase() //无警告

let str2: any
str2 = 'hello'
str2.toUpperCase() //无警告

let str3: unknown
str3 = 'hello';
str3.toUpperCase() //警告：“str3”的类型为“未知”

// 使用断⾔强制指定str3的类型为string
(str3 as string).toUpperCase() //无警告