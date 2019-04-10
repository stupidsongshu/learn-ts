console.log('%c借用构造函数法************', 'color: red; font-size: 16px;')
/**
 * 借用构造函数法可以解决原型中引用类型值被修改的问题, 可是 instanceOne 与 staff 已经没有原型链的关系了
 * 缺点:
 * 1.只能继承父对象的实例属性和方法，不能继承父对象原型属性和方法
 * 2.无法实现函数复用，每个子对象都有父对象实例的副本，性能欠优
 */

function Staff() {
  this.company = 'abc';
  this.arr = [1, 2, 3];
  this.fun = function() {
    return this.company;
  }
}
Staff.prototype.name = 'This is parent\'s property';
Staff.prototype.companyName = function() {
  return this.company;
}
function Employee(name, profession) {
  Staff.call(this);
  this.employeeName = name;
  this.profession = profession;
}
var EmployeeInstance1 = new Employee('Bob1', 'back-end 1');
var EmployeeInstance2 = new Employee('Bob2', 'back-end 2');

// 此方法可以解决原型中引用类型值被修改的问题
console.log(EmployeeInstance1.arr); // [1, 2, 3]
console.log(EmployeeInstance2.arr); // [1, 2, 3]
EmployeeInstance1.arr.push(4);
console.log(EmployeeInstance1.arr); // [1, 2, 3, 4]
console.log(EmployeeInstance2.arr); // [1, 2, 3]

console.log(EmployeeInstance1.hasOwnProperty('employeeName')); // true
console.log(EmployeeInstance1.hasOwnProperty('profession')); // true
console.log(EmployeeInstance1.hasOwnProperty('company')); // true
console.log(EmployeeInstance1.hasOwnProperty('arr')); // true

// EmployeeInstance1 与 staff 已经没有原型链的关系了
console.log(Staff.prototype.isPrototypeOf(EmployeeInstance1)); // false

// 只能继承父对象的实例属性和方法，不能继承父对象原型属性和方法
console.log(EmployeeInstance1.employeeName); // Bob1
console.log(EmployeeInstance1.company); // abc
console.log(EmployeeInstance1.fun()); // abc
console.log(EmployeeInstance1.name); // undefined
console.log(EmployeeInstance1.companyName); // undefined
