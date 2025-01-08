let str1: string
str1 = 'hello'
str1 = new String('hello') //报错

let str2: String
str2 = 'hello'
str2 = new String('hello')

console.log(typeof str1)
console.log(typeof str2)


// 原始类型字符串
let str = 'hello';
// 当访问str.length时，JavaScript引擎做了以下⼯作：
let size = (function() {
 // 1. ⾃动装箱：创建⼀个临时的String对象包装原始字符串
 let tempStringObject = new String(str);
 // 2. 访问String对象的length属性
 let lengthValue = tempStringObject.length;
 // 3. 销毁临时对象，返回⻓度值
 // （JavaScript引擎⾃动处理对象销毁，开发者⽆感知）
 return lengthValue;
})();
console.log(size); // 输出: 5