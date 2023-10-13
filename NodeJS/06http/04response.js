const http = require('http');

const server = http.createServer((request, response) => {
    //设置响应状态码
    response.statusCode = 250;
    //设置响应状态描述
    response.statusMessage = 'Okk';
    //设置响应头信息
    response.setHeader("Content-Type","text/html;charset=utf-8");
    //设置多个相同名的响应头
    response.setHeader("test",['a','b','c']);
    //设置响应体
    //1.write和end结合使用，响应体相对分散
    response.write('xx');
    response.write('xx');
    response.write('xx');
    response.end();
    //2.单独使用end方法 响应体相对集中
    // response.end('xxx');
});
server.listen(9000,()=>{
    console.log('服务已经启动, 端口 9000 监听中...');
});
