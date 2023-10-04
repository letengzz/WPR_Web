// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//将 『你好 中国』 写入到当前文件夹下的『1.txt』文件中
fs.writeFile('./1.txt','你好 中国',err =>{
    //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
    if(err){
        console.log(err);
        return;
    }
    console.log('写入成功');
});
console.log('结束');

