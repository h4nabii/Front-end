// 基本数据类型
let str: string = 'hello'
let num: number = 12
let b: boolean = true
let u: undefined = undefined
let n: null = null
let anyTing: any = '123'

// 函数没有返回值时使用 void
function test(): void {
    console.log("test");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null
let unusable: void = undefined;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;

// void 类型的变量不能赋值给 number 类型的变量
// 这样会报错
let u: void;
let num: number = u;
// Type 'void' is not assignable to type 'number'.



// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}