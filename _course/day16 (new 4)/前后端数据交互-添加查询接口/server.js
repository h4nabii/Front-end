var express = require('express'); // 加载express包
var http = require('http'); // 加载http包
var app = express(); // 创建一个应用对象

app.use(express.static('./html')); // 指定服务的绑定的静态文件夹路径

// 评论详情接口
app.get('/commit/list', function(request, response){
    // request请求对象； 文章id
    // response响应对象
    // 通过文章id从数据库查询评论信息
    response.json({
        code: 200,
        data: [
            { id: 1, content: '111asdasdasdasd', createdTime: '1685863058079' },
            { id: 2, content: '222asdasdasdasd', createdTime: '1685863058079' }
        ]
    });
});

// 评论提交接口
// app.post('/commit/list', function(request, response){
//     // request请求对象
//     // response响应对象
//     response.json({
//         name: '计量'
//     });
// });

http.createServer(app).listen(8088,function(){
    console.log('启动成功，端口8088')
});
