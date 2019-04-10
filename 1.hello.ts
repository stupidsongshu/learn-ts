/**
 * @description TypeScript入门教程 https://ts.xcatliu.com/
 */

// 使用 : 指定变量的类型，: 的前后有没有空格都可以
function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let isDone1: boolean = false;
let isDone2: boolean = Boolean(1);

// 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b101010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myNme: string = 'zys';
let myAge: number = 27;
let sentence: string = `Hello, my name is ${myNme}.
                        I'll be ${myAge + 1} years old next month`;

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function voidFun(): void {
  alert(myNme)
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
let varUndefined: undefined = undefined;
let varNull: null = null;
let num: number = undefined;
let n2: string = null;

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let typeInference1 = 'seven';
let typeInference2: string = 'seven';
let typeInference3;
typeInference3 = 'seven';
typeInference3 = 7;

// 联合类型:使用 | 分隔每个类型
let uniontype: string | number;
uniontype = 'seven';
uniontype = 7;
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getString(sth: string|number):string {
  return sth.toString()
}

// 接口一般首字母大写
// 定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的，赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
  name: string;
  age: number;
  // 只读属性。注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
  readonly id: number;
  // 可选属性
  sex?: string;
  isDone?: boolean;
  u?: undefined;
  // 使用 [propName: string] 定义任意属性。需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
  [propName: string]: string | number | boolean | object | undefined
}
let Tom: Person = {
  id: 110,
  name: 'Tom',
  age: 24,
  sex: 'man',
  a ():number {
    return 123
  },
  b: ():string => {
    return 'hello'
  }
}

// 类型 + 方括号
let fibonacci1: (number|string)[] = [1, 1, 2, 3, 5, '8'];
// 数组泛型 Array<elemType>
let fibonacci2: Array<number|string> = [1, 1, 2, 3, 5, '8'];
interface FibonacciArray {
  [index: number]: number|string;
}
let fibonacci3: FibonacciArray = [1, 1, 2, 3, 5, '8']

// 类数组（Array-like Object）不是数组类型
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function arrayLike() {
  // let args: number[] = arguments;
  let args: IArguments = arguments;
}

// 输入多余的（或者少于要求的）参数，是不被允许的
function sum1(x: number, y: number): number {
  return x + y;
}
console.log(sum1(1, 2));
// 函数表达式
let sum2 = function(x: number, y: number): number {
  return x + y;
}
console.log(sum2(3, 4));
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let sum3: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}
console.log(sum3(5, 6));
// 用接口定义函数的形状
interface ISum {
  (x: number, y: number): boolean
}
let sum4: ISum = function(x: number, y: number): boolean {
  return x > y;
}
console.log(sum4(1, 2));
// 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
let sum5 = function(firstName: string, lastName?: string): string {
  return firstName + ' ' + lastName;
}
console.log(sum5('Tom', 'Cat'));
console.log(sum5('Bob'));
// 参数默认值
let sum6 = function(firstName: string = 'Tom', lastName:string): string {
  return firstName + ' ' + lastName;
}
console.log(sum6('Bob', 'haha'));
console.log(sum6(undefined, 'haha'));
console.log(sum6('', 'haha'));
// 剩余参数
let sum7 = function(x: any, ...y: any[]) {
  y.forEach(item => {
    x += item
  })
  return x
}
console.log(sum7(1, [2, 3, 4]));
console.log(sum7(1, [2, '3', 4]));
console.log(sum7(1, 2, 3, 4));
console.log(sum7(1, 2, '3', 4));

// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 语法：1.<type>value 2.value as type
function getLength(x: string | number): number {
  if ((<string>x).length) {
    return (<string>x).length;
  } else {
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
let innerBoolean: Boolean = new Boolean(1);
let innerError: Error = new Error('this is an error');
let innerDate: Date = new Date();
let innerRegExp: RegExp = /[a-z]/;
// DOM/BOM内置对象: Document/HTMLElement/Event/NodeList...
let innerBody: HTMLElement = document.body;
let innerNodeList: NodeList = document.querySelectorAll('div');
document.addEventListener('click', (e: MouseEvent) => {
  // TODO
});

// 类型别名: 使用 type 创建类型别名。类型别名常用于联合类型。
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// 元组
let tuple1: [string, number] = ['Xcat Liu', 25];
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
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu = 4.4, Fri, Sat = 'S'.length};
// 常数枚举是使用 const enum 定义的枚举类型
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。假如包含了计算成员，则会在编译阶段报错。
const enum Directions {Up, Down, Left, Right};
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型。
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
// 外部枚举与声明语句一样，常出现在声明文件中。
// 同时使用 declare 和 const 也是可以的
declare const enum Directions1 {Up, Down, Left, Right};
