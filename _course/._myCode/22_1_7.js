console.log("\u{1f600}")

date = [1, 2, 3, 24, 34, 14, 12, 4, 1, 4];

for (let i in date) console.log(i)
for (let i of date) console.log(i)

obj = {
    a: 1,
    r: 2,
    t: 3
}

let [x, y] = [1, 2]

{
    const {sin, cos, tan} = Math;

    console.log(sin(10))
    console.log(cos(10))
    console.log(tan(10))

    const {sin:s, cos:c, tan:t} = Math;

    console.log(s(10))
    console.log(c(10))
    console.log(t(10))
}
