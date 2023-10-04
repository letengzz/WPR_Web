// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//同步创建文件夹
fs.mkdirSync('./index');
console.log('创建成功');
//递归同步创建
fs.mkdirSync('./aa/bb',{recursive:true});
console.log('创建成功');