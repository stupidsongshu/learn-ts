console.log('%c寄生组合式继承************', 'color: red; font-size: 16px;')

function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function inheritPrototype(SubType, SuperType) {
  var prototype = object(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green', 'blue'];
}
SuperType.prototype.sayName = function() {
  return '超类：' + this.name;
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
  return '子类：' + this.age;
}

var instance1 = new SubType('Vue', 5);
console.log(instance1.name);
console.log(instance1.age);
console.log(instance1.sayName());
console.log(instance1.sayAge());
instance1.colors.push('black');
console.log(instance1);

var instance2 = new SubType('React', 6);
console.log(instance2);

console.log('hasOwnProperty:', instance1.hasOwnProperty('age')); // true
console.log('hasOwnProperty:', instance1.hasOwnProperty('name')); // true
console.log('hasOwnProperty:', instance1.hasOwnProperty('colors')); // true
console.log('hasOwnProperty:', instance1.hasOwnProperty('sayName')); // false

console.log('isPrototypeOf:', SuperType.prototype.isPrototypeOf(instance1));