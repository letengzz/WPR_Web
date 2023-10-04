// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

//创建写入流对象
let ws = fs.createWriteStream('./观书有感.txt');
//write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
//关闭通道 使用end()或close()
ws.end();
//close可选 执行完毕 通道也会被断开 可加可不加
//ws.close();