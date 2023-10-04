// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//同步获取状态
let data = fs.statSync('./你好中国.txt');
console.log(data);