document.getElementById("input_file").addEventListener("change", function () {
    if (this.files.length === 0) {
        console.log("select BMP file please");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        console.log(reader.result);
        if (reader.result instanceof ArrayBuffer) {
            const view = new Uint8Array(reader.result)

            const dataView = new DataView(view.buffer);

            // console.log(view.slice(0, 2)); /*const*/
            // console.log(hexArrToInt(view.slice(6, 10))); /*const*/
            // console.log(hexArrToInt(view.slice(14, 18))); /*const*/
            // console.log(hexArrToInt(view.slice(26, 28))); /*const*/

            let byteSize = dataView.getUint32(2, true);
            let offset = dataView.getUint32(10, true);
            let width = dataView.getUint32(18, true);
            let height = dataView.getUint32(22, true);
            let bit = dataView.getUint32(28, true);

            console.log("byteSize " + byteSize);
            console.log("offset " + offset);
            console.log("width " + width);
            console.log("height " + height);
            console.log("bit " + bit);

            let content = view.slice(offset);

            let line = "";
            let ans = "";
            for (let i = 0; i < byteSize - offset; i += bit / 8) {
                if (
                    content[i] !== 0 && content[i] !== 255 ||
                    content[i + 1] !== 0 && content[i + 1] !== 255 ||
                    content[i + 2] !== 0 && content[i + 2] !== 255
                ) {
                    alert("This is not a binary BMP")
                    alert(`Stop at ${i}`)
                    break;
                }
                line += content[i] === 0 ? "0" : "1";
                if (line.length === width) {
                    ans = line + ans;
                    line = "";
                }
            }

            document.getElementById("data").value = ans;
        }
    };
    reader.readAsArrayBuffer(this.files[0]);
})

document.getElementById("copy_button").onclick = function () {
    navigator.clipboard.writeText(document.getElementById("data").value).then(() => {
        alert("已复制");
    })
}

// /* replaced with dataView to deal byte data */
// function hexArrToInt(arr) {
//     let num = 0;
//     let count = 0;
//     for (let item of arr) {
//         num += item * Math.pow(256, count++);
//     }
//     return num;
// }
