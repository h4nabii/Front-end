function SimpleVue(obj) {
    var res = {};
    if (obj.data) {
        for (var _i = 0, _a = Object.entries(obj.data()); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            res[key] = value;
        }
    }
    if (obj.computed) {
        for (var _c = 0, _d = Object.entries(obj.computed); _c < _d.length; _c++) {
            var _e = _d[_c], key = _e[0], f = _e[1];
            if (typeof f === "function") {
                Object.defineProperty(res, key, {
                    enumerable: true,
                    get: f.bind(res),
                });
            }
        }
    }
    if (obj.methods) {
        for (var _f = 0, _g = Object.entries(obj.methods); _f < _g.length; _f++) {
            var _h = _g[_f], key = _h[0], f = _h[1];
            if (typeof f === "function") {
                res[key] = f.bind(res);
            }
        }
    }
    return res;
}
var instance = SimpleVue({
    data: function () {
        return {
            firstName: "first",
            lastName: "last",
            amount: 10,
        };
    },
    computed: {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
    },
    methods: {
        hi: function () {
            console.log(this.fullName.toUpperCase());
        },
        testHI: function () {
            this.hi();
        },
    },
});
console.log(instance);
