let express = require("express");
let http = require("http");
let cors = require("cors");
const url = require("url");

let app = express();
let port = 8088;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("./html"));
app.use(cors());

let commentMap = new Map();
let counter = 0;

app.get("/commit/list", function (request, response) {
    response.json({
        code: 200,
        data: [...commentMap.values()].map(value => JSON.parse(value))
    });
});

app.get("/article/detail", function (req, res) {
    res.json({
        code: 200,
        data: "Response from server: This is the article details 123 123 123 123"
    });
});

app.post("/commit/list", function (req, res) {
    req.url = decodeURI(req.url);
    if (req.body["text"] !== "") {
        commentMap.set(counter++, JSON.stringify(req.body));
        res.json({
            post: "ok"
        });
    } else {
        res.json({
            post: "failed: empty message"
        });
    }
    console.log(commentMap);
});

http.createServer(app).listen(port, function () {
    console.log("启动成功，端口" + port);
});
