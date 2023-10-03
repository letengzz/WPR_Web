//测试 以下命令 程序会报异常
//BOM
// console.log(window);
// console.log(history);
// console.log(navigator);
// console.log(location);

//DOM
// console.log(document);

//AJAX
//let xhr = new XMLHttpRequest();

//测试 以下命令 程序不会报异常 正常输出
console.log('1');

setTimeout(() =>{
    console.log('love')
},1000)

//Node.js  的顶级对象并不是window对象 而是 global对象
console.log(global);
console.log(globalThis); 
console.log(global == globalThis);//ES2020引入的新特性 用globalThis指向顶级对象 Node.js支持此特性