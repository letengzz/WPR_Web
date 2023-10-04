// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//同步删除文件夹
fs.rmdirSync('./index');

//同步递归删除文件夹
fs.rmdirSync('./aa',{recursive:true});