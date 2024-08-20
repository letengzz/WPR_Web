/* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
let a: never
// 以下对a的所有赋值都会有警告
a = 1
a = true
a = undefined
a = null

// // 指定a的类型为string
// let a: string
// // 给a设置⼀个值
// a = 'hello'
// if (typeof a === 'string') {
//  console.log(a.toUpperCase())
// } else {
//  console.log(a) // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
// }

// 限制throwError函数不需要有任何返回值，任何值都不⾏，像undeifned、null都不行
function throwError(str: string): never {
    throw new Error('程序异常退出:' + str)
}