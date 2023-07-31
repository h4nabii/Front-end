(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

console.log(_module.data);
//引入【分别暴露】的模块

console.log(_module.showData);
console.log(_module.showMsg);

// //引入【分别暴露】的模块+重命名
// import {data as data2} from './module2'

// //引入【分别暴露】的模块+打包引入
// import * as module1 from './module1'

// //引入【统一暴露】的模块（统一暴露和分别暴露，最后引入的方式都是一样的）
// import {school,person,getLaoliu} from './module3'

// //引入【默认暴露】的模块
// import module4 from './module4'

// //引入多种暴露方式的模块
// import module5,{teacher1,teacher2,stu1,stu2} from './module5'
// console.log(module5);
// console.log(teacher1);
// console.log(teacher2);
// console.log(stu1);
// console.log(stu2);
},{"./module1":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
