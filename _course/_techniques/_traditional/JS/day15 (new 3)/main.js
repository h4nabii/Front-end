// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成随机颜色值的函数

function randomColor() {
    return 'rgb(' +
        random(0, 255) + ',' +
        random(0, 255) + ',' +
        random(0, 255) + ')';
}

class Ball {
    // 定义 Ball 构造器
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    // 定义彩球绘制函数
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };

    // 定义彩球更新函数
    borderBounce() {
        if ((this.x + this.size) >= width)
            this.velX = -(this.velX);

        if ((this.x - this.size) <= 0)
            this.velX = -(this.velX);

        if ((this.y + this.size) >= height)
            this.velY = -(this.velY);

        if ((this.y - this.size) <= 0)
            this.velY = -(this.velY);

        this.x += this.velX;
        this.y += this.velY;
    };

    // 定义碰撞检测函数
    collisionDetect(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + otherBall.size) {
            let totalVel = [this.velX + otherBall.velX, this.velY + otherBall.velY];
            this.velX = otherBall.velX = totalVel / 2;
            this.velY = otherBall.velY = totalVel / 2;
            if (dx > 0) this.velX = -(this.velX);
            if (dy > 0) this.velY = -(this.velY);
        }
    };

}


// 定义一个数组，生成并保存所有的球
let balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-5, 5),
        random(-5, 5),
        randomColor(),
        size
    );
    balls.push(ball);
}

// 定义一个循环来不停地播放

function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].borderBounce();
        for (let j = 0; j < balls.length; j++) {
            if (i !== j) balls[i].collisionDetect(balls[j]);
        }
    }

    requestAnimationFrame(loop);
}

loop();
