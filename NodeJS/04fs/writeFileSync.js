// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//同步写入
fs.writeFileSync('./2.txt','hello world');
console.log('写入成功');