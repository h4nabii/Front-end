let obj = {
    name: "myName",
    age: 20,
    sex: "male"
};

let a = test`obj{ ${null}
    name is ${obj.name}
    age is ${obj.age}
    sex is ${obj.sex}
}`;

function test(...args) {
    console.log(args);
}

function* gen() {
    for (let i = 0; i < 100; i++) {
        yield i;
    }
}

let oGen = gen();
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(oGen.next());
console.log(...oGen);
