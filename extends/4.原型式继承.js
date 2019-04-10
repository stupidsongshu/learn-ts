console.log('%c原型式继承************', 'color: red; font-size: 16px;')
/**
 * 在 object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的 原型，最后返回了这个临时类型的一个新实例。从本质上讲，object()对传入其中的对象执行了一次浅复制。
 * 缺点：
 * 1.原型中引用类型值会被修改
 * 2.无法传递参数
 */
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var employee = {
  name: 'Alice',
  arr: [1, 2, 3]
};

var instance1 = new object(employee);
var instance2 = new object(employee);

console.log(instance1.arr); // [1, 2, 3]
console.log(instance2.arr); // [1, 2, 3]
instance1.arr.push(4);
console.log(instance1.arr); // [1, 2, 3, 4]
console.log(instance2.arr); // [1, 2, 3, 4]

/**
 * ECMAScript 5 通过新增 Object.create()方法规范化了原型式继承。
 * 这个方法接收两个参数:一 个用作新对象原型的对象和(可选的)一个为新对象定义额外属性的对象。
 * 在传入一个参数的情况下， Object.create()与 object()方法的行为相同。
 */
var anotherEmployee = {
  name: 'Micale',
  arr: [1, 2, 3, 4, 5]
};
var instance3 = Object.create(anotherEmployee);
instance3.name = 'instance3';
instance3.arr.push('instance3');
var instance4 = Object.create(anotherEmployee);
instance4.name = 'instance4';
instance4.arr.push('instance4');
console.log(instance3.name);
console.log(instance4.name);
console.log(instance3.arr);
console.log(instance4.arr);
console.log(anotherEmployee);
