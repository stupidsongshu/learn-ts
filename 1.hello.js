/**
 * @description TypeScript入门教程 https://ts.xcatliu.com/
 */
// 使用 : 指定变量的类型，: 的前后有没有空格都可以
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var isDone1 = false;
var isDone2 = Boolean(1);
// 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 42;
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myNme = 'zys';
var myAge = 27;
var sentence = "Hello, my name is " + myNme + ".\n                        I'll be " + (myAge + 1) + " years old next month";
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function voidFun() {
    alert(myNme);
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
var unusable = undefined;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
var varUndefined = undefined;
var varNull = null;
var num = undefined;
var n2 = null;
// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
var typeInference1 = 'seven';
var typeInference2 = 'seven';
var typeInference3;
typeInference3 = 'seven';
typeInference3 = 7;
// 联合类型:使用 | 分隔每个类型
var uniontype;
uniontype = 'seven';
uniontype = 7;
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getString(sth) {
    return sth.toString();
}
var Tom = {
    id: 110,
    name: 'Tom',
    age: 24,
    sex: 'man',
    a: function () {
        return 123;
    },
    b: function () {
        return 'hello';
    }
};
// 类型 + 方括号
var fibonacci1 = [1, 1, 2, 3, 5, '8'];
// 数组泛型 Array<elemType>
var fibonacci2 = [1, 1, 2, 3, 5, '8'];
var fibonacci3 = [1, 1, 2, 3, 5, '8'];
// 类数组（Array-like Object）不是数组类型
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function arrayLike() {
    // let args: number[] = arguments;
    var args = arguments;
}
// 输入多余的（或者少于要求的）参数，是不被允许的
function sum1(x, y) {
    return x + y;
}
console.log(sum1(1, 2));
// 函数表达式
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(3, 4));
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var sum3 = function (x, y) {
    return x + y;
};
console.log(sum3(5, 6));
var sum4 = function (x, y) {
    return x > y;
};
console.log(sum4(1, 2));
// 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
var sum5 = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(sum5('Tom', 'Cat'));
console.log(sum5('Bob'));
// 参数默认值
var sum6 = function (firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
};
console.log(sum6('Bob', 'haha'));
console.log(sum6(undefined, 'haha'));
console.log(sum6('', 'haha'));
// 剩余参数
var sum7 = function (x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    y.forEach(function (item) {
        x += item;
    });
    return x;
};
console.log(sum7(1, [2, 3, 4]));
console.log(sum7(1, [2, '3', 4]));
console.log(sum7(1, 2, 3, 4));
console.log(sum7(1, 2, '3', 4));
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 语法：1.<type>value 2.value as type
function getLength(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
// 声明语句
// declare var $: (selector: string) => any;
// $('#app');
/**
 * TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
 * 注意，TypeScript 核心库的定义中不包含 Node.js 部分。
 * Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
 * npm install @types/node --save-dev
 */
// 内置对象
// ECMAScript内置对象: Boolean/Error/Date/RegExp...
var innerBoolean = new Boolean(1);
var innerError = new Error('this is an error');
var innerDate = new Date();
var innerRegExp = /[a-z]/;
// DOM/BOM内置对象: Document/HTMLElement/Event/NodeList...
var innerBody = document.body;
var innerNodeList = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // TODO
});
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
// 元组
var tuple1 = ['Xcat Liu', 25];
// let tuple2: [string, number];
// tuple2[1] = 25;
// // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
// tuple2.push('world');
// tuple2.push(27);
// 枚举使用 enum 关键字来定义
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// 我们也可以给枚举项手动赋值，未手动赋值的枚举项会接着上一个枚举项递增
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的，所以使用的时候需要注意，最好不要出现这种覆盖的情况。
// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)
// 当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4.4] = "Thu";
    Days[Days["Fri"] = 5.4] = "Fri";
    Days[Days["Sat"] = 'S'.length] = "Sat";
})(Days || (Days = {}));
;
;
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
;
