// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray1(length, value) {
    var result = [];
    for (var index = 0; index < length; index++) {
        result.push(value);
    }
    return result;
}
var arr1 = createArray1(3, 'hello');
console.log(arr1);
function createArray2(length, value) {
    var result = [];
    for (var index = 0; index < length; index++) {
        result[index] = value;
    }
    return result;
}
var arr2 = createArray2(3, false);
console.log(arr2);
// 定义泛型的时候，可以一次定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([1, '1']));
function loggingIdentity(arg) {
    console.log(arg.length * 10);
    return arg;
}
console.log(loggingIdentity({ length: 3 }));
// 多个类型参数之间也可以互相约束
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var target = { a: 1, b: 2, c: 3, d: 4 };
var source = { a: 10, d: 40 };
console.log(copyFields(target, source));
var mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
console.log(mySearch('hello world', 'hello'));
