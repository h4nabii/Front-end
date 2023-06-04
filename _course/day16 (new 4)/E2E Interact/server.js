let express = require('express'); // 加载express包
let http = require('http'); // 加载http包
let cors = require("cors");
let app = express(); // 创建一个应用对象

// 允许跨域访问
app.use(cors());

// 这个是get接口，地址/demo/news
// request请求对象
// response响应对象
app.get('/demo/news', function (request, response) {
    // 允许跨域访问
    // response.header("Access-Control-Allow-Origin", "*");
    response.json({
        name: '计量'
    });
});

http.createServer(app).listen(8088, function () {
    console.log('启动成功，端口8088')
});
