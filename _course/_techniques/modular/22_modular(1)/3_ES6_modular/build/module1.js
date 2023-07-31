'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
/* 
	module1中使用【分别暴露】
*/

var data = exports.data = 'htg';
var msg = exports.msg = 'hello,htg';

function showData() {
	console.log(data);
}
function showMsg() {
	console.log(msg);
}
