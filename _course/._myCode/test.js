let codeOf = {};
let specificDay = undefined;
setTimeout(function () {
    let date = new Date();
    let today = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
    let func = specificDay ? codeOf?.[specificDay] : codeOf?.[today];

    if (!func) console.log("No function");
    func();
});

codeOf["2023.3.17"] = function () {
    // JS block scope
    let t = function () {
        throw undefined;
    }
    try {
        t();
    } catch (a) {
        a = 2
        console.log(a);
    }
    console.log(a)

    // let scope
    // let (a = 2) {
    //     console.log(a);
    // }
    {
        let a = 2;
        console.log(a)
    }


    {
        function a() {
            console.log("before")
        }

        function a() {
            console.log("after")
        }

        a();
    }

    {
        foo();

        if (false) {
            function foo() {
                console.log(1)
            }
        } else {
            function foo() {
                console.log(2)
            }
        }

        function foo() {
            console.log(3)
        }
    }
}

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
            }
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
        }

        test.log();
        setTimeout(test.log.bind(test));
        setTimeout(() => {
            test.log()
        });
    }
}

codeOf["2023.3.19"] = function () {

    function f(str, from = 0, to = 1) {
        console.log(str.slice(from, to));
    }

    f("1111", 0, 2);

}
