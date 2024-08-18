// 类型声明:字面量类型
let e: '你好' //a的值只能为字符串“你好”
let f: 100 //b的值只能为数字100
e = '欢迎'//警告：不能将类型“"欢迎"”分配给类型“"你好"”
f = 200 //警告：不能将类型“200”分配给类型“100”

//自动类型判断
let a: string //变量a只能存储字符串
let b: number //变量b只能存储数值
let c: boolean //变量c只能存储布尔值

a = 'hello'
a = 100 //警告：不能将类型“number”分配给类型“string”

b = 666
b = '你好'//警告：不能将类型“string”分配给类型“number”

c = true
// c = 666 //警告：不能将类型“number”分配给类型“boolean”

// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x:number,y:number):number{
 return x + y
}

demo(100,200)
demo(100,'200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100,200,300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个


let n = 56
n.toFixed(2)
/*
当执行n.toFixed(2) ，底层做了这几件事：
 1.let temp = new Number(42)
 2.value = temp.toFixed(2)
 3.删除value
 4.返回value
*/

//类型断言
let someValue1: unknown = "this is a string";
let strLength1: number = (someValue1 as string).length;

let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue2).length;

//联合类型
let g: "male" | "female";
g = "male";
g = "female";

let h: boolean | string;
h = true;
h = 'hello';