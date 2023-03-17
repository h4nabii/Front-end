{
    /*
    * 2023.3.7
    * */

    // JS block scope
    try {
        throw undefined;
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


