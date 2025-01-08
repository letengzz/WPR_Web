//导入 express
const express = require('express');
//创建应用对象
const app = express();
//获取请求的路由规则
app.get('/:id', (req, res) => {
    res.send('商品详情, 商品 id 为' + req.params.id);
});

//启动服务
app.listen(3000, () => {
    console.log('启动成功....')
});