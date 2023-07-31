/* var let const and temporal death zone */

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

function  f() {
    console.log(a);
    var a = 10;
}

var a = 10;
f();


