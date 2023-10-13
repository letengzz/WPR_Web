//导入 http 模块
const http = require('http');
const fs = require('fs');

//创建服务对象
const server = http.createServer((request, response) => {
    //获取请求url的路径
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    //声明根目录
    let root = __dirname;
    //拼接文件路径
    let filePath = root + pathname;
    //读取文件 fs 异步API
    fs.readFile(filePath,(err,data) =>{
       if (err){
           response.statusCode = 500;
           response.end('500 Server Error');
           return;
       }
       //响应文件内容
        response.end(data);
    });





    // if (pathname === '/index.html'){
    //     //读取文件内容
    //     let html = fs.readFileSync(__dirname + '/index.html');
    //     response.end(html); //设置响应体
    // }else if (pathname === '/style.css'){
    //     //读取文件内容
    //     let css = fs.readFileSync(__dirname + '/style.css');
    //     response.end(css); //设置响应体
    // }else if (pathname === '/script.js'){
    //     //读取文件内容
    //     let js = fs.readFileSync(__dirname + '/script.js');
    //     response.end(js); //设置响应体
    // }else {
    //     response.statusCode = 404;
    //     response.end('<h1>404 Not Found</h1>');
    // }
});

//监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
});