li = []
for (let i = 0; i < 4; i++) {
    li.push(Math.random() + i)
}

console.log(li)

matrix = []
for (let times = 0; times < 5; times++) {
    matrix.push([
        li[0] * li[times],
        li[1] * li[times],
        li[2] * li[times],
        li[3] * li[times]
    ])
}


