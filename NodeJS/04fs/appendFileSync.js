// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//同步追加写入
// fs.appendFileSync('1.txt','Hello China');
// console.log('同步追加成功');


fs.writeFile('./1.txt','Hello China',{flag: 'a'},err =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('追加成功');
});
console.log('结束');