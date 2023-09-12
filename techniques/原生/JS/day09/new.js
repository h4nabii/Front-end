let arr = [];
for (let i = 0; i < 10; i++) arr.push(i);

arr.shift();
arr.unshift([123, 123])
arr.splice(4, 0, "???");
arr.splice(5, 2, "removed");

arr.forEach((value, index, array) => {
    console.log(index, value)
})


function speak(fn, obj) {
    return fn.bind(obj)()
}
