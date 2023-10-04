const path = require('path');

let pathname = 'D:/program file/nodejs/node.exe';

//获取路径分隔符
console.log(path.sep); // '\'

//拼接绝对路径
console.log(path.resolve(__dirname,'test'));
console.log(path.resolve(__dirname,'/test','./index.html'));
console.log(path.resolve(__dirname,'./test'));

//解析路径
console.log(path.parse(pathname));

//获取路径基础名称
console.log(path.basename(pathname));

//获取路径的目录名
console.log(path.dirname(pathname));

//获取路径的拓展名
console.log(path.extname(pathname));