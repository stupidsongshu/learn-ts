/**
 * prototype显示原型: 用来实现基于原型的继承与属性的共享。
 * __proto__隐式原型: 构成原型链，同样用于实现基于原型的继承。
 */
console.log('%c原型************', 'color: red; font-size: 16px;')

console.log(Array);
console.log(Array.prototype);
console.log(Array.prototype.constructor === Array);
console.log(Array.prototype.__proto__);
console.log(Array.prototype.__proto__ === Object.prototype);

console.log('--------------------------');

var arr = new Array();
console.log(arr);
console.log(arr.__proto__);
console.log(arr.constructor);
console.log(arr.constructor === Array);
console.log(arr.__proto__ === arr.constructor.prototype);

console.log('--------------------------');

function fn() {
  return false;
}
console.log(fn);
console.log(fn.prototype);
console.log(fn.prototype.__proto__);
console.log(fn.prototype.__proto__ === Object.prototype);
console.log(fn.toString());
console.log(Object.prototype.toString.call(fn));

console.log('--------------------------');

console.log(Function);
console.log(Function.prototype);
console.log(Function.__proto__);
console.log(Function.prototype === Function.__proto__);
console.log(new Function);
console.log(new Function());
console.log(Function.prototype.__proto__ === Object.prototype);
