class Binaries {
    /**
     * Generate binaries from string.
     * Fill the blank using PKCS5
     * @param {string} string
     * @return {number[][]}
     */
    static from(string) {
        let append = 8 - string.length % 8;
        string += String.fromCharCode(append).repeat(append);

        let binaries = [];
        let sep = [];
        for (let char of string) {
            [...char.charCodeAt(0).toString(2).padStart(8, "0")]
                .map(val => val === "0" ? 0 : 1)
                .forEach(val => sep.push(val));
            if (sep.length === 64) {
                binaries.push(sep);
                sep = [];
            }
        }
        return binaries;
    }

    /**
     * Merge binaries to string
     * @param {number[][]} binaries
     * @return string
     */
    static merge(binaries) {
        let string = "";
        let code = 0;
        binaries.flat().forEach((val, index) => {
            code *= 2;
            code += val;
            if (!((index + 1) % 8)) {
                string += String.fromCharCode(code);
                code = 0;
            }
        });
        return string.slice(0, -string.slice(-1).charCodeAt(0));
    }

    static binaryToHex(binary64, length = 64) {
        let hex = "";
        for (let i = 0; i < length / 4; i++) {
            let charBinary = binary64.slice(i * 4, i * 4 + 4);
            hex+= Number.parseInt(charBinary.join(""), 2).toString(16);
        }
        return hex;
    }

    static hexToBinary(hexStr) {
        let arr = [];
        for (let i = 0; i < hexStr.length; i++) {
            let hex = hexStr.charAt(i);
            arr.push([...Number.parseInt(hex, 16).toString(2).padStart(4, "0")].map(val => val === "0" ? 0 : 1));
        }
        return arr.flat();
    }
}

module.exports = Binaries;
