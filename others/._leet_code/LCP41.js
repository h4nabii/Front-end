// /**
//  * @param {string[]} chessboard
//  * @return {number}
//  */
// var flipChess = function (chessboard) {
//     let height = chessboard.length;
//     let width = chessboard[0].length;
//
//     let chessArr = [];
//     chessboard.forEach(val => chessArr.push([...val]));
//
//     let condense = new Array(height);
//     for (let i = 0; i < height; i++) condense[i] = new Array(width).fill(0);
//
//     console.log(chessArr);
//
//     for (let row = 0; row < height; row++) {
//         for (let col = 0; col < width; col++) {
//             let count;
//             if (chessArr[row]?.[col] === "X") {
//                 count = 0;
//                 while (chessArr[row]?.[++col] === "O") count++;
//                 if (chessArr[row]?.[col] === ".") condense[row][col] += count;
//                 else col--;
//             }
//         }
//         for (let col = width - 1; col >= 0; col--) {
//             let count;
//             if (chessArr[row]?.[col] === "X") {
//                 count = 0;
//                 while (chessArr[row]?.[--col] === "O") count++;
//                 if (chessArr[row]?.[col] === ".") condense[row][col] += count;
//                 else col++;
//             }
//         }
//     }
//     console.log(condense);
//
//     for (let col = 0; col < width; col++) {
//         for (let row = 0; row < height; row++) {
//             let count;
//             if (chessArr[row]?.[col] === "X") {
//                 count = 0;
//                 while (chessArr[++row]?.[col] === "O") count++;
//                 if (chessArr[row]?.[col] === ".") condense[row][col] += count;
//                 else row--;
//             }
//         }
//         for (let row = height - 1; row >= 0; row--) {
//             let count;
//             if (chessArr[row]?.[col] === "X") {
//                 count = 0;
//                 while (chessArr[--row]?.[col] === "O") count++;
//                 if (chessArr[row]?.[col] === ".") condense[row][col] += count;
//                 else row++;
//             }
//         }
//     }
//     console.log(condense);
//
//     let diagLen = width + height - 3;
//     for (let line = 1; line <= diagLen; line++) {
//         let row, col;
//
//         [row, col] = [Math.min(height - 1, line), Math.max(0, line - height + 1)];
//     }
// };
//
// flipChess([
//     "....X.",
//     "...OX.",
//     ".OXOO.",
//     ".OXX..",
//     "......"
// ]);
