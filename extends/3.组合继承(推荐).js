console.log('%c组合继承************', 'color: red; font-size: 16px;')
/**
 * 组合继承是 JavaScript 最常用的继承模式;
 * 不过，它也有自己的不足。组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数:一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
 * 没错，子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子 类型构造函数时重写这些属性。
 */
/**
 * 组合继承指的是将原型链技术和借用构造函数技术结合起来，二者皆取其长处的一种经典继承方式。
 * 优点:
 * 1.可以保证每个函数有自己的属性，可以解决原型中引用类型值被修改的问题
 * 2.可以复用原型上定义的方法
 * 缺点: Staff 会被调用 2 次：第 1 次是 Employee.prototype = new Staff(); 第 2 次是调用 Staff.call(this)
 */

function Staff() {
  this.company = 'abc';
  this.arr = [1, 2, 3];
}
Staff.prototype.companyName = function() {
  return this.company;
}

function Employee(name, profession) {
  // 继承属性
  Staff.call(this); // 第二次调用 Staff()
  this.employeeName = name;
  this.profession = profession;
}
// 继承方法
Employee.prototype = new Staff(); // 第一次调用 Staff()
Employee.prototype.constructor = Employee;
Employee.prototype.showInfo = function() {
  return this.employeeName + "'s profession is " + this.profession;
}

var instance1 = new Employee('Andy', 'front-end');
var instance2 = new Employee('Mike', 'after-end');

console.log(instance1.arr);
console.log(instance2.arr);
instance1.arr.push(4);
console.log(instance1.arr);
console.log(instance2.arr);

console.log(instance1.employeeName);
console.log(instance1.profession);
console.log(instance1.company); // abc
console.log(instance1.arr); // [1, 2, 3, 4]
console.log(instance1.showInfo());
console.log(instance1.companyName()); // abc

console.log('hasOwnProperty:', instance1.hasOwnProperty('employeeName'));
console.log('hasOwnProperty:', instance1.hasOwnProperty('company')); // true
console.log('hasOwnProperty:', instance1.hasOwnProperty('companyName')); // false
console.log('in:', 'companyName' in instance1); // true

console.log('isPrototypeOf:', Staff.prototype.isPrototypeOf(instance1)); // true
