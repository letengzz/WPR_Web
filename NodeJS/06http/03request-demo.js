//1.导入http模块
const http = require('http');

//2.创建服务对象
const server = http.createServer((request, response) =>{
    //解构赋值 简写 获取请求方法、路径
    let {url,method} = request;
    //解决乱码
    response.setHeader("Content-Type","text/html;charset=utf-8");
    //获取请求的url路径
    let pathname = new URL(url,'http://127.0.0.1').pathname;
    //判断
    if(pathname == '/register' && method == 'GET'){
        //注册
        response.end('注册界面');  //设置响应体
    }else if(pathname == '/login' && method == 'GET'){
        //登录
        response.end('登录界面');  //设置响应体
    }else {
        response.end('<h1>404 Not Found</h1>');
    }
});
//3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务正在运行中');
});

