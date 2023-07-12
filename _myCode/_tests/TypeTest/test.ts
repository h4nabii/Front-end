interface Test {
    name: string;
    id: number;

    toString(): string;
}

class a implements Test {
    public name: string
    public id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    show() {
        return this.name + this.id;
    }
}

let stu = new a("123", 123);
console.log(a.toString());
