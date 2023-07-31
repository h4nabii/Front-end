function TileMap(width, height) {
    this.width = width;
    this.height = height;
    this.map = undefined;
    this.start = undefined;
    this.end = undefined;
    this._init();
}

// private static methods

TileMap._translatePos = function ([x, y] = [0, 0]) {
    return [x * 2 + 1, y * 2 + 1];
}

TileMap._translateVal = function (str) {
    switch (str) {
        case "border":
            return "@";
        case "road":
            return " ";
        case "wall":
            return "#"
        case "start":
            return "S"
        case "end":
            return "E"
        case "unreachable":
            return "U"
        case "unreachableEnd" :
            return "&"
        default:
            return "?"
    }
}

TileMap.prototype._getAvailable = function (pos) {
    if (this._get(pos) === "end") return [];

    let [x, y] = pos;
    let ans = [];
    if (this._get([x, y - 1]) === "wall" && ((this._get([x, y - 2]) === "unreachable") || (this._get([x, y - 2]) === "unreachableEnd"))) {
        ans.push(0);
    }
    if (this._get([x - 1, y]) === "wall" && ((this._get([x - 2, y]) === "unreachable") || (this._get([x - 2, y]) === "unreachableEnd"))) {
        ans.push(1);
    }
    if (this._get([x, y + 1]) === "wall" && ((this._get([x, y + 2]) === "unreachable") || (this._get([x, y + 2]) === "unreachableEnd"))) {
        ans.push(2);
    }
    if (this._get([x + 1, y]) === "wall" && ((this._get([x + 2, y]) === "unreachable") || (this._get([x + 2, y]) === "unreachableEnd"))) {
        ans.push(3);
    }
    return ans;
}

// private methods

TileMap.prototype._set = function ([x, y], value) {
    this.map[x][y] = value;
}

TileMap.prototype._get = function ([x, y]) {
    return this.map[x]?.[y];
}

TileMap.prototype._init = function () {
    this.map = new Array(this.height * 2 + 1);
    for (let i = 0; i < this.map.length; i++)
        this.map[i] = new Array(this.width * 2 + 1).fill("wall");
    for (let i = 0; i < this.height; i++)
        for (let j = 0; j < this.height; j++)
            this._set(TileMap._translatePos([i, j]), "unreachable");
    for (let i = 0; i < this.height * 2 + 1; i++) {
        this._set([0, i], "border");
        this._set([this.width * 2, i], "border");
    }
    for (let i = 0; i < this.width * 2; i++) {
        this._set([i, 0], "border");
        this._set([i, this.height * 2], "border");
    }
}

// public methods

TileMap.prototype.show = function () {
    let str = "TileMap\n";
    this.map.forEach(row => {
        row.forEach(col => str += TileMap._translateVal(col) + " ")
        str += '\n';
    })
    console.log(str)
}

TileMap.prototype.setStartEnd = function (startPos, endPos) {
    this._set(TileMap._translatePos(startPos), "start");
    this._set(TileMap._translatePos(endPos), "unreachableEnd");
    this.start = startPos;
    this.end = endPos;
}

TileMap.prototype.DFSCreate = function () {
    let tileMap = this;

    function dfs(pos) {
        let nextPos = undefined;
        let next = undefined;
        let available = tileMap._getAvailable(pos);
        while (available.length !== 0) {
            let dir = available[Math.floor(Math.random() * available.length)];
            if (dir === 0) {
                nextPos = [pos[0], pos[1] - 1];
                next = [pos[0], pos[1] - 2]
            } else if (dir === 1) {
                nextPos = [pos[0] - 1, pos[1]];
                next = [pos[0] - 2, pos[1]];
            } else if (dir === 2) {
                nextPos = [pos[0], pos[1] + 1];
                next = [pos[0], pos[1] + 2];
            } else if (dir === 3) {
                nextPos = [pos[0] + 1, pos[1]];
                next = [pos[0] + 2, pos[1]];
            }
            tileMap._set(nextPos, "road");
            if (tileMap._get(next) === "unreachableEnd")
                tileMap._set(next, "end");
            else
                tileMap._set(next, "road");
            dfs(next);
            available = tileMap._getAvailable(pos);
        }
    }

    dfs(TileMap._translatePos(this.start));

}

export default TileMap;
