interface vue {
    data?: () => { [prop: string]: any },
    computed?: { [prop: string]: () => any },
    methods?: { [prop: string]: () => any }
}

function SimpleVue(obj: vue) {
    let res = {};
    if (obj.data) {
        for (let [key, value] of Object.entries(obj.data())) {
            res[key] = value;
        }
    }
    if (obj.computed) {
        for (let [key, f] of Object.entries(obj.computed)) {
            if (typeof f === "function") {
                Object.defineProperty(res, key, {
                    enumerable: true,
                    get: f.bind(res),
                });
            }
        }
    }
    if (obj.methods) {
        for (let [key, f] of Object.entries(obj.methods)) {
            if (typeof f === "function") {
                res[key] = f.bind(res);
            }
        }
    }
    return res;
}

let instance = SimpleVue({
    data() {
        return {
            firstName: "first",
            lastName: "last",
            amount: 10,
        }
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        },
    },
    methods: {
        hi() {
            console.log(this.fullName.toUpperCase());
        },
        testHI() {
            this.hi();
        },
    },
});

console.log(instance);
