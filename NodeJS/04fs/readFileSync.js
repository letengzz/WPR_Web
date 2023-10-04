// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

let data = fs.readFileSync('./1.txt');
console.log('读取成功'+data.toString());

let data2 = fs.readFileSync('./1.txt','UTF-8');
console.log('读取成功'+data2);