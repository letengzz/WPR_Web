// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//异步创建文件夹
fs.mkdir('./page',err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建成功');
});
//递归异步创建
fs.mkdir('./a/b/c',{recursive:true},err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建成功');
})