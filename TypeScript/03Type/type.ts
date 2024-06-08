// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;
let d: any = 4;
d = 'hello';
d = true;


// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d;
d = 10;
d = 'hello';
d = true;

// never 表示永远不会返回结果
function fn2(): never{
    throw new Error('报错了！');
}

// void 用来表示空，以函数为例，就表示没有返回值的函数
let unusable: void = undefined;
function fn(): void{
}


// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;
let s:string;

// d的类型是any，它可以赋值给任意变量
// s = d;

e = 'hello';

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if(typeof e === "string"){
    s = e;
}



//数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//固定长度数组
let x: [string, number];
x = ["hello", 10]; 

//布尔型
let isDone: boolean = false;

//枚举
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

enum Color {
    Red = 1,
    Green,
    Blue,
}
let c: Color = Color.Green;

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
}
let c: Color = Color.Green;

//字面量
let color: 'red' | 'blue' | 'black';
let num: 1 | 2 | 3 | 4 | 5;

//never
function error(message: string): never {
    throw new Error(message);
}

//数字
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//对象
let obj: object = {};

//字符串
let colorstr: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;