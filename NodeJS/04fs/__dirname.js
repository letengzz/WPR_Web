// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

let data = fs.readFileSync(__dirname + '/你好中国.txt',"utf8");
console.log(data);