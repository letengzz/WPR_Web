// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

fs.readFile('./1.txt',(err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.readFile('./1.txt','UTF-8',(err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
console.log('读取成功');