// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');

fs.unlink('./2.txt', (err) => {
    if (err) throw err;
    console.log('删除成功');
});