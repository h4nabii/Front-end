
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function () {
        return this.name;
    },

    setName: function (newName) {
        this.name = newName;
    }
}

let person = new Person("123");
person.setName("234");
console.log(person.getName());

