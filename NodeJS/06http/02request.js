const http = require('http');

const server = http.createServer((request, response) => {
    //获取请求方法
    console.log('获取请求方法:' + request.method);
    //获取请求路径
    console.log('获取请求路径:' + request.url); //只包含url中的路径与查询字符串
    //获取HTTP协议的版本号
    console.log('获取HTTP协议的版本号:' + request.httpVersion);
    //获取HTTP的请求头(对象形式 都转换成小写形式)
    console.log(request.headers);
    console.log('获取HTTP某个请求头:' + request.headers.host);
    //获取请求体
    //1.声明变量
    let body = '';
    //2.绑定data事件
    request.on('data', chunk => {
        body += chunk;
    })
    //3.绑定end事件
    request.on('end', () => {
        console.log('请求体:' + body);
    });

    //获取URL路径
    let pathname = require('url').parse(request.url).pathname;
    console.log(pathname);
    //获取URL查询字符串
    //true 将查询字符串转换为对象
    let username = require('url').parse(request.url,true).query.username;
    console.log(username);

    //获取URL路径
    let pathname2 = new URL(request.url,'http://127.0.0.1').pathname;
    console.log(pathname2);
    //获取URL查询字符串
    //true 将查询字符串转换为对象
    let username2 = new URL(request.url,'http://127.0.0.1').searchParams.get('username');
    console.log(username2);

    //响应
    response.end('End');
});

server.listen(9000, () => {
    console.log('服务正在运行中');
})
