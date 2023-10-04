/**
 * 复制文件
 */
const fs = require('fs');

//方式一 readFile

//1.读取文件内容
let data = fs.readFileSync('../你好中国.txt');
//2.写入文件
fs.writeFileSync('../你好中国2.txt',data);
console.log(process.memoryUsage());

//方式二 流式操作 推荐 资源使用少

//1.创建读取流对象
const rs = fs.createReadStream('../你好中国.txt');
//2.创建写入流对象
const ws = fs.createWriteStream('../你好中国3.txt');

rs.on('data',chunk =>{
    ws.write(chunk);
});
rs.on('end',()=>{
    console.log(process.memoryUsage());
});

//快速复制
rs.pipe(ws);