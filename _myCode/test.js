let codeOf = {};
let specificDay = undefined;
setTimeout(function () {
    let date = new Date();
    let today = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
    let func = specificDay ? codeOf?.[specificDay] : codeOf?.[today];

    if (!func) console.log("No function");
    else {
        console.log(today);
        func();
    }
});

let methods = {
    log: (...msg) => console.log(...msg.map(value => JSON.parse(JSON.stringify(value))))
};

codeOf["2023.3.17"] = function () {
    // JS block scope
    let t = function () {
        throw undefined;
    };
    try {
        t();
    } catch (a) {
        a = 2;
        console.log(a);
    }
    console.log(a);

    // let scope
    // let (a = 2) {
    //     console.log(a);
    // }
    {
        let a = 2;
        console.log(a);
    }


    {
        function a() {
            console.log("before");
        }

        function a() {
            console.log("after");
        }

        a();
    }

    {
        foo();

        if (false) {
            function foo() {
                console.log(1);
            }
        } else {
            function foo() {
                console.log(2);
            }
        }

        function foo() {
            console.log(3);
        }
    }
};

codeOf["2023.3.18"] = function () {
    {
        function pack_(num) {
            let a = num;

            function bar() {
                console.log(a);
            }

            return bar;
        }

        let baz1 = pack_(20);
        let baz2 = pack_(30);
        baz1();
        baz2();
    }

    // {
    //     for (var i = 0; i < 5; i++) {
    //         setTimeout(function () {
    //             console.log(i)
    //         }, 1000 * i);
    //     }
    //
    //     for (var i = 0; i < 5; i++) {
    //         (function (i) {
    //             setTimeout(function () {
    //                 console.log(i)
    //             }, i * 1000)
    //         })(i)
    //     }
    //
    //     for (let i = 0; i < 5; i++) {
    //         setTimeout(function () {
    //             console.log(i)
    //         }, 1000 * i);
    //     }
    // }

    {
        function getInstance(str) {
            let name = str;

            function setName(str) {
                name = str;
            }

            function getName(str) {
                return name;
            }

            return {
                setName: setName,
                getName: getName
            };
        }

        let a = getInstance("a");
        let b = getInstance();

        b.setName("bet");
        console.log(a.getName());
        console.log(b.getName());
        console.log(a.getName());
    }

    {
        let test = {
            id: 10,
            log: function () {
                console.log(this.id);
            }
        };

        test.log();
        setTimeout(test.log.bind(test));
        setTimeout(() => {
            test.log();
        });
    }
};

codeOf["2023.3.19"] = function () {

    function f(str, from = 0, to = 1) {
        console.log(str.slice(from, to));
    }

    f("1111", 0, 2);
};

codeOf["2023.4.9"] = function () {

    class Range {
        constructor(from, to) {
            this.from = from;
            this.to = to;
        }

        [Symbol.iterator]() {
            let next = Math.ceil(this.from);
            let last = this.to;

            let random;
            if (!random) random = Math.random();

            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    console.log("inside of " + random);
                    return next <= last ?
                        {value: next++} :
                        {done: true};
                }
            };
        }
    }


    console.log(...new Range(1.2, 4.5));
    console.log(...new Range(1.2, 4.5));


    (function () {
        for (var i = 0; i < 10; i++) {
            (function (j) {
                setTimeout(() => console.log(j));
            })(i);
        }
    })();
};

codeOf["2023.4.10"] = function () {
    function check(rate) {
        return Math.floor(Math.random() * rate) === 0;
    }

    let map = new Map();
    let total = 100000;
    for (let i = 0; i < total; i++) {
        let times = 0;
        while (!check(3600)) times++;
        map.set(times, (map.get(times) ?? 0) + 1);
    }
    console.log(map);
    let avg = 0;
    for (let [k, v] of map) {
        avg += k * v;
    }
    avg /= total;
    console.log(avg);

    let count = 0;
    let all = 10000;
    for (let i = 0; i < all; i++) {
        if (from().get()) count++;
    }
    console.log(count / all);
};

codeOf["2023.4.11"] = function () {
    function from(total = 100) {
        return {
            select(count = 1) {
                return Math.floor(Math.random() * total) < count;
            }
        };
    }

    let count = 0;
    let total = 10000000;
    for (let i = 0; i < total; i++) {
        if (from(3600).select()) count++;
    }
    console.log(count / total);


    let pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("123");
        }, 100);
    });

    pro.then(response => {
        console.log(response);
    });

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    (async () => {
        await sleep(1000).then(() => console.log("???"));
        await sleep(1000);
        console.log(1000);
    })();
};

codeOf["2023.4.14"] = function () {
    let temp = {
        temp: 10,
        a() {
            console.log("a");
        }
    };
    // temp = [];
    while (temp) {
        console.log("---------------------------------------------------------------");
        console.log(temp);
        console.log(Object.getOwnPropertyNames(temp));
        methods.log(Object.getOwnPropertyNames(temp));
        temp = temp.__proto__;
    }
};

codeOf["2023.4.17"] = function () {
    let obj = Object.create([1, 2, 3]);
    console.log(obj);
    console.log(obj.__proto__);

    class Position {
        static byPolar(t, r) {
            return new Position(r * Math.cos(t), r * Math.sin(t));
        }

        static byCoordinate(x, y) {
            return new Position(x, y);
        }

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        get coordinate() {
            return [this.x, this.y];
        }

        set coordinate([x, y]) {
            this.x = x;
            this.y = y;
        }

        get polar() {
            let [x, y] = [this.x, this.y];
            let {atan, sqrt, pow} = Math;
            return [atan(y / x), sqrt(pow(x, 2) + pow(y, 2))];
        }

        set polar([t, r]) {
            this.x = r * Math.cos(t);
            this.y = r * Math.sin(t);
        }
    }

    let pos = Position.byPolar(Math.PI / 4, 5);
    console.log(pos.coordinate);
    console.log(pos.polar);
    pos.coordinate = [3, 4];
    console.log(pos.polar);


    function Student(name, id) {
        this.name = name;
        this.id = id;
    }

    Student.prototype = {
        getName: function () {
            return this.name;
        },

        getId: function () {
            return this.id;
        }
    };

    let stu = new Student("123", 123);
    console.log(stu.getName());
    console.log(stu.__proto__);
    console.log(typeof stu);

    console.log([1, 2, 3].find(val => val > 0));
};

codeOf["2023.4.20"] = function () {
    console.log(
        [0xff, 0xfe, 0xdc, 0x83, 0x90, 0x5f, 0x64, 0x57].reduce(
            (previousValue, currentValue) => {
                console.log(currentValue, currentValue - 0x7f, String.fromCharCode(currentValue - 0x80));
                return previousValue + String.fromCharCode(currentValue - 0x80);
            }, ""
        )
    );
};

codeOf["2023.5.6"] = function () {
    console.log(-3 % 2);
    console.log((3 + 6) * 2);
    console.log(0 == null);
    console.log(0 == undefined);
    console.log(0 == NaN);
    console.log(0 == "");

    function info() {
        year = 1999;
    }

    info();
    console.log(year);
    console.log("max" in Math);
    new Date().getMonth();
};

codeOf["2023.5.7"] = function () {
    console.log(Function.prototype);
    console.log(Function.constructor);
    console.log(Object.__proto__);
};

codeOf["2023.5.14"] = function () {
    class CharacterPool {
        static standardCharacters = [
            "Dehya",
            "Tighnari",
            "Keqing",
            "Mona",
            "Qiqi",
            "Diluc",
            "Jean"
        ];

        constructor(pickUpCharacter) {
            this.pickUpRate = 0.5;
            this.baseRateStar5 = 0.006;
            this.incRateStar5 = 0.06;
            this.incContStar5 = 73;
            this.baseRateStar4 = 0.051;
            this.count = 0;
        }

        draw() {

            this.count++;
        }
    }
};

codeOf["2023.5.21"] = function () {

    let times = 100000;

    let total = 37;
    let target = 4;
    let countAvg = 0;

    let map = new Map();
    let count = 0;

    map.clear();
    countAvg = 0;
    for (let i = 0; i < times; i++) {
        count = 0;
        for (let num = 1; num <= total && count < target; num++) {
            if (Math.floor(Math.random() * (total - num + 1)) === 0) {
                map.set(num, (map.get(num) ?? 0) + 1);
                count++;
            }
        }
        countAvg += count;
    }
    console.log(countAvg / times);
    console.log(new Map([...map].sort((a, b) => a[0] - b[0])));

    map.clear();
    countAvg = 0;
    for (let i = 0; i < times; i++) {
        count = 0;
        for (let num = 1; num <= total && count < target; num++) {
            if (Math.floor(Math.random() * (total - num + 1)) < (target - count)) {
                map.set(num, (map.get(num) ?? 0) + 1);
                count++;
            }
        }
        countAvg += count;
    }
    console.log(countAvg / times);
    console.log(new Map([...map].sort((a, b) => a[0] - b[0])));

    map.clear();
    countAvg = 0;
    for (let i = 0; i < times; i++) {
        count = 0;
        for (let num = 1; num <= total && count < target; num++) {
            if ((total - num + 1) <= (target - count)) {
                while (num++ <= total) {
                    map.set(num, (map.get(num) ?? 0) + 1);
                    count++;
                }
                break;
            }
            if (Math.floor(Math.random() * (total - num + 1)) === 0) {
                map.set(num, (map.get(num) ?? 0) + 1);
                count++;
            }
        }
        countAvg += count;
    }
    console.log(countAvg / times);
    console.log(new Map([...map].sort((a, b) => a[0] - b[0])));
};


codeOf["2023.5.25"] = function () {
    console.log("ASCII 0x" +
        [..."Xu"].map(val =>
            val.charCodeAt(0).toString(16).padStart(2, "0")
        ).join("")
    );

    function encodeX(str) {
        return "0x" + [...str].map(val =>
            val.charCodeAt(0).toString(16).padStart(2, "0")
        ).join("");
    }

    console.log(encodeX("Xu"));
};


codeOf["2023.5.27"] = function () {
    let t = 144;
    for (let i = 0; i < t; i++) {
        console.log((Math.floor(i / t * 1000) / 10), i, t);
    }
};

codeOf["2023.6.1"] = function () {
    function combination(n, k) {
        let ans = 1;
        while (k) ans = ans * n-- / k--;
        return ans;
    }

    function permutation(n, k) {
        let ans = 1;
        while (k--) ans *= n--;
        return ans;
    }

    function sigma(start, end, fn) {
        let ans = 0;
        for (let i = start; i <= end; i++) {
            ans += fn(i);
        }
        return ans;
    }

    let start = 0;
    let end = 10;
    console.log(sigma(start, end, val => combination(end, val) * Math.pow(1 / 4, val) * Math.pow(3 / 4, end - val)));
};

codeOf["2023.6.6"] = function () {
    // code below are generated by copilot
    // a data structure for a tree

    class Node {
        constructor(value) {
            this.value = value;
            this.children = [];
        }

        // tree functions
        addChild(node) {
            this.children.push(node);
        }

        // tree remove
        removeChild(node) {
            this.children = this.children.filter(child => child !== node);
        }

        // tree traversal
        depthFirstSearch(value) {
            if (this.value === value) return this;
            for (let child of this.children) {
                let result = child.depthFirstSearch(value);
                if (result) return result;
            }
            return null;
        }
    }

    // apply a dfs to a tree
    function dfs(node, fn) {
        fn(node);
        for (let child of node.children) {
            dfs(child, fn);
        }
    }

    // generate a random tree using node class above
    function generateTree() {
        let root = new Node(0);
        let queue = [root];
        let depth = 0;
        let maxDepth = 7;
        while (queue.length) {
            depth++;
            let node = queue.shift();
            let childrenCount = Math.floor(Math.random() * (maxDepth - depth));
            for (let i = 0; i < childrenCount; i++) {
                let child = new Node(depth);
                node.addChild(child);
                queue.push(child);
            }
        }
        return root;
    }

    let root = generateTree();

    dfs(root, node => console.log(node.value));
    console.log(root.depthFirstSearch(5));
};

codeOf["2023.6.8"] = function () {
    // create a tree node
    class Node {
        constructor(value) {
            this.value = value;
            this.children = [];
        }

        // add a child to a node
        addChild(node) {
            this.children.push(node);
        }

        // remove a child from a node
        removeChild(node) {
            this.children = this.children.filter(child => child !== node);
        }

        // inorder traversal
        inorderTraversal(fn) {
            for (let child of this.children) {
                child.inorderTraversal(fn);
            }
            fn(this);
        }
    }

    // apply dfs on a tree
    function dfs(node, fn) {
        fn(node);
        for (let child of node.children) {
            dfs(child, fn);
        }
    }

    // generate a random tree
    function generateTree() {
        let root = new Node(0);
        let queue = [root];
        let depth = 0;
        let maxDepth = 7;
        while (queue.length) {
            depth++;
            let node = queue.shift();
            let childrenCount = Math.floor(Math.random() * (maxDepth - depth));
            for (let i = 0; i < childrenCount; i++) {
                let child = new Node(depth);
                node.addChild(child);
                queue.push(child);
            }
        }
        return root;
    }

    let root = generateTree();

    dfs(root, node => console.log(node.value));

    root.inorderTraversal(node => console.log(node.value));

};

codeOf["2023.6.10"] = function () {
    function f(s) {
        let map = new Map();
        let min = "z";
        for (let char of s) {
            if (char < min) min = char;
            map.set(char, map.get(char) + 1 || 1);
        }
        console.log(min);
        return map.get(min);
    }

    console.log(f("vvvvvvccc"));

    console.log(Math.min("a", "b"));
};

codeOf["2023.6.11"] = function () {
    function a(b) {
        if (b === 10) {
            return 132;
        }
    }

    console.log(a(10), a(100));
};
