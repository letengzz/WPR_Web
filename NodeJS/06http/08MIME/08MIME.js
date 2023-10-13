//导入 http 模块
const http = require('http');
const fs = require('fs');
const path = require('path');

//声明变量
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

//创建服务对象
const server = http.createServer((request, response) => {
    //获取请求url的路径
    let pathname = new URL(request.url, 'http://127.0.0.1').pathname;
    //声明根目录
    let root = __dirname;
    //拼接文件路径
    let filePath = root + pathname;
    //读取文件 fs 异步API
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end('500 Server Error');
            return;
        }
        //获取文件的后缀名
        let ext = path.extname(filePath).slice(1);
        //获取对应的类型
        let type = mimes[ext];
        //判断是否匹配到
        if (type) {
            //匹配到了
            if (type === 'html') {
                response.setHeader("Content-Type", type + ';charset=utf-8');
            } else {
                response.setHeader("Content-Type", type);
            }
        } else {
            //没有匹配到
            response.setHeader("Content-Type", "application/octet-stream");
        }
        //响应文件内容
        response.end(data);
    });
});

//监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动....');
});
