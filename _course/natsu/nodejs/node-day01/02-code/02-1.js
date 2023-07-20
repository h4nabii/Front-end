let num=100;
// 定义这个变量，只能在当前文件里运行，如果想让其文件使用这个变量，就必须手工导出
// module.exports.num=num
// exports.num = num;
//console.log(exports === module.exports); // true

// 最终以 module.exports 导出为准


// module.exports.num = num+10;
// exports.num1 = num;

module.exports={
    a:1,
    b:2,
    hello:function(){
        return this.a+this.b;
    }
}