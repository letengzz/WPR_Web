// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

fs.rm('./你好中国.txt',err => {
    if (err){
        console.log(err);
        return;
    }
    console.log('删除成功');
});