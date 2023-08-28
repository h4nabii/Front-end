class SpeedObj {
    constructor(speed = 100) {
        this.speed = speed;
        this.left = 10000;
    }

    get nextMove() {
        return Math.ceil(this.left / this.speed);
    }

    move(steps) {
        this.left -= this.speed * steps;
        if (this.left <= 0) this.left = 10000;
    }
}

let chars = [
    new SpeedObj(95),
    new SpeedObj(100),
    new SpeedObj(105),
    new SpeedObj(120),
];
chars.sort((a, b) => a.nextMove - b.nextMove);
chars.forEach(val => console.log(val.nextMove));
let st = chars[0].nextMove;
chars.forEach(val => {
    val.move(st)
});
chars.forEach(val => console.log(val.nextMove));

