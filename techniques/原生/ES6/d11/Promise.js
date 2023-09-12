let IDGenerator = require("./IDGenerator");

let idGen = new IDGenerator();

function Person(name, age, sex) {
    this.id = idGen.getID();
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person.prototype.toString = function () {
    return `Person { name="${this.name}", age=${this.age}, sex="${this.sex}" }`;
};

Person.prototype[Symbol.iterator] = function* () {
    // for (let i = 0; i < this.age; i++) {
    //     yield i + 1;
    // }
    yield this.name;
    yield this.age;
    yield this.sex;
};

let person = new Person("Jack", 18, "male");
console.log(person);
console.log(...person);
