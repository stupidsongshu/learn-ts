// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function createArray1(length: number, value: any): Array<any> {
  let result = [];
  for (let index = 0; index < length; index++) {
    result.push(value);
  }
  return result;
}
let arr1 = createArray1(3, 'hello');
console.log(arr1);

function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let index = 0; index < length; index++) {
    result[index] = value;
  }
  return result;
}
let arr2 = createArray2<boolean>(3, false);
console.log(arr2);

// 定义泛型的时候，可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
console.log(swap<number, string>([1, '1']));

// 泛型约束
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length * 10);
  return arg;
}
console.log(loggingIdentity({length: 3}));

// 多个类型参数之间也可以互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}
let target = { a: 1, b: 2, c: 3, d: 4 };
let source = { a: 10, d: 40 };
console.log(copyFields(target, source));

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source: string, subString: string): boolean {
  return source.search(subString) !== -1;
}
console.log(mySearch('hello world', 'hello'));
