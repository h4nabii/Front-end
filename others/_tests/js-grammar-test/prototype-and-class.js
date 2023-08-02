
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

let person = new Person("origin-name");
person.setName("new-name");
console.log(person.getName()); // getter
console.log(person.name); // public
