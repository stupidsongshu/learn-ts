console.log('%c原型链继承************', 'color: red; font-size: 16px;')
/**
 * 原型链的构建是通过将一个类型的实例赋值给另一个构造函数的原型实现的。
 * 原型链的问题是对象实例共享所有继承的属性和方法，因此不适宜单独使用。
 * 实现的本质是重写原型对象，代之以一个新类型的实例。
 * 最大的问题是：当原型中存在引用类型值时，实例可以修改其值。
 */

function Staff() {
  this.company = 'abc';
  this.arr = [1, 2, 3, 4];
}
Staff.prototype.companyName = function() {
  return this.company;
}
function employee(name, profession) {
  this.employeeName = name;
  this.profession = profession;
}
// 继承 staff (实现的本质是重写原型对象，代之以一个新类型的实例。)
employee.prototype = new Staff();
// 将这个对象的 constructor 手动改成 employee，否则还会是 staff
employee.prototype.constructor = employee;
// 不使用对象字面量方式创建原型方法，会重写原型链
employee.prototype.showInfo = function() {
  return this.employeeName + "'s profession is " + this.profession;
}
var instance = new employee('Andy', 'front-end');
console.log(instance.showInfo());
console.log(instance.companyName());

console.log('hasOwnProperty:', instance.hasOwnProperty('employeeName'));
console.log('hasOwnProperty:', instance.hasOwnProperty('profession'));
console.log('hasOwnProperty:', instance.hasOwnProperty('company'));  // false
console.log('in:', 'employeeName' in instance);
console.log('in:', 'profession' in instance);
console.log('in:', 'company' in instance); // true
/**
 * employee.prototype.__proto__ === Staff.prototype
 * employee.prototype.__proto__.__proto__ === Object.prototype
 */
console.log('isPrototypeOf:', employee.prototype.isPrototypeOf(instance));
console.log('isPrototypeOf:', Staff.prototype.isPrototypeOf(instance));
console.log('isPrototypeOf:', Object.prototype.isPrototypeOf(instance));

// 原型链实现继承最大的问题是：当原型中存在引用类型值时，实例可以修改其值。
var instance2 = new employee();
console.log(instance.arr);
console.log(instance2.arr);
instance.arr.push(5);
console.log(instance.arr);
console.log(instance2.arr);
