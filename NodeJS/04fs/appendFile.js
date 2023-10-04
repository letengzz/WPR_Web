// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//异步追加
fs.appendFile('2.txt','\r\n你好世界',err =>{
    if(err) throw err;
    console.log('追加成功')
})