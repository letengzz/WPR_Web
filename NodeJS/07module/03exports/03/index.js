//导入模块
const me = require('./me.js');

//调用函数
console.log(me);

//require 返回的是目标模块中 `module.exports` 的值
console.log(exports === module.exports); //true