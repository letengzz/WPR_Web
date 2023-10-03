// 使用alloc()创建
let buf = Buffer.alloc(10);
console.log(buf);

// 使用allocUnsafe()创建
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2);

let buf_3 = Buffer.allocUnsafe(100000);
console.log(buf_3);

//通过字符串创建 Buffer
let buf_4 = Buffer.from('nihao');
console.log(buf_4);

//通过数组创建Buffer
let buf_5 = Buffer.from([100,11,21,32,5]);
console.log(buf_5);

//使用`toString()`将Buffer转换成字符串
let buf_6 = Buffer.from('hi');
console.log(buf_6.toString());

//Buffer的读写
let buf_7 = Buffer.from('hello');
// console.log(buf_7);
//读取单个字符
console.log(buf_7[0]);
//修改单个字符
buf_7[0] = 97;
//查看字符串结果
console.log(buf_7.toString());
console.log(buf_7[0].toString());
//进行数字的进制转换
console.log(buf_7[0].toString(2));

//如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
let buf_8 = Buffer.from([361]);
console.log(buf_8[0].toString(2));  //舍弃高位的数字 0001 0110 1001 => 0110 1001

//中文问题 一个 utf-8 的字符一般占 3 个字节
let buf_9 = Buffer.from('我');
console.log(buf_9);