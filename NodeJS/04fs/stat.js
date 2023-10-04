// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

fs.stat('./你好中国.txt',(err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    //查看是否是一个文件
    console.log(data.isFile());
    //查看是否是一个文件夹
    console.log(data.isDirectory());
});