// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//异步删除文件夹
fs.rmdir('./page',err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除成功');
});

//异步递归删除文件夹
fs.rmdir('./a',{recursive:true},err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除成功');
});