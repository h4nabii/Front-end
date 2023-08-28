var a = 2;
if(a==1){
    console.log('我进不来');
}
else if(a == 2){
    console.log('我进来了');
}
else{
    console.log('其他情况');
};


for(var i = 0; i < 6; i++){
  console.log('i:',i);  
};
console.log('最终i的值',i);

var j = 0;
while(j < 6){
    console.log('j:',j); 
    j++;
};
console.log('最终j的值',j);

var abc; // undefined
console.log(abc);
// 基础数据类型：null, undefined, boolean (true, false), number (NaN, 整数，小数), string ( ''， ""，`` )


var str = 'abcdef';

console.log(str.length); // 长度为6个字符
// 位置：是从0开始
var strA = str.charAt(0);
console.log('strA字符是：',strA);

// 字符串的拼接
var strB = 'aaa' + 'bbb';
var strC = strB.concat('ccc', 'ddd'); // strB + 'ccc' + 'ddd'

console.log(strB, strC); // 'aaabbb'   'aaabbbcccddd'
// 模版字符，模版拼接
var strD = `ggg`; // 模版字符
console.log(strD === 'ggg'); // true
var strE = `ab${strD}cc`; // 模版拼接 //等价 'ab' + strD + 'cc';
console.log(strE); // 'abgggcc'
