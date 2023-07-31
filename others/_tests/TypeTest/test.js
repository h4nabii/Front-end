var a = /** @class */ (function () {
    function a(name, id) {
        this.name = name;
        this.id = id;
    }
    a.prototype.show = function () {
        return this.name + this.id;
    };
    return a;
}());
var stu = new a("123", 123);
console.log(a.toString());
