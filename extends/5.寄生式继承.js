console.log('%c寄生式继承************', 'color: red; font-size: 16px;')
/**
 * 在原型式继承的基础上，通过封装继承过程的函数增强对象，返回对象
 * 缺点（同原型式继承）:
 * 1.原型中引用类型值会被修改
 * 2.无法传递参数
 */

function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function createAnother(original) {
  var clone = object(original); // 通过调用 object() 函数创建一个新对象
  clone.sayHi = function() { // 以某种方式来增强对象
    console.log('Hi ' + this.name);
  }
  return clone;
}

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

var instance1 = createAnother(person);
instance1.sayHi();
instance1.name = 'hahaha';
instance1.sayHi();
