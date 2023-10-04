// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

//创建读取流对象
let rs = fs.createReadStream('./1.txt');
//每次取出 64k 数据后执行一次 data 回调
rs.on('data',chunk =>{
    console.log(chunk);
    console.log(chunk.length);
})
//读取完毕后, 执行 end 回调
rs.on('end',()=>{
    console.log("读取成功");
})

//创建读取流对象
let rs2 = fs.createReadStream('./1.txt','utf8');

rs2.on('data',chunk =>{
    console.log(chunk);
    console.log(chunk.length);
})
rs2.on('end',()=>{
    console.log("读取成功");
})

//快速复制
const ws = fs.createWriteStream('./HelloChina.txt');
rs.pipe(ws);