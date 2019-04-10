class Animal {
  name: string;
  // 实例属性
  instancePropety = '实例属性';
  // 使用 static 定义一个静态属性
  static staticProperty = '静态属性';
  // protected protectedProperty: string;
  private privateProperty: string;
  protected protectedProperty: string = 'protectedProperty';
  public constructor(name: string, privateProperty: string) {
    this.name = name;
    this.privateProperty = privateProperty;
  }
  // 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
  static isAnimal(a: any) {
    console.log(a instanceof Animal);
  }
  public say() {
    return `My name is ${this.name} ` + this.say1();
  }
  private say1() {
    return `${this.privateProperty}`;
  }
  /**
   * 存取器: 使用 getter 和 setter 可以改变属性的赋值和读取行为
   * 编译报错：error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
   * 解决方法(加上 --target es5)：tsc --target es5 filename.ts
   */
  get value() {
    return 'value';
  }
  set value(val) {
    console.log('set value: ' + val, this);
  }
}
let animal = new Animal('dog', 'privateProperty');
console.log(animal.say());
animal.value = 'hahaha';
console.log(animal.value);
Animal.isAnimal(animal);
console.log(animal.instancePropety);
console.log(Animal.staticProperty);

// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
class Cat extends Animal {
  constructor(name: string, a: string) {
    super(name, a);
  }
  say() {
    return 'Cat extends Animal, ' + super.say();
  }
}
let cat = new Cat('cat', 'cat private');
console.log(cat.say());


function Car(name, price) {
  this.name = name;
  this.price = price;
}
Car.prototype.getName = function() {
  return this.name;
}

// class Car {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   getName() {
//     return this.name;
//   }
// }

var car1 = new Car('car1', 1);
// prototype是一个显示的原型属性，只有函数才拥有该属性。
console.log(car1.prototype); // undefined
console.log(car1.constructor);
console.log(car1.constructor.prototype);
console.log(car1.__proto__);
console.log(Car.prototype);
console.log(car1.constructor === Car); // true
console.log(car1.constructor === Car.prototype.constructor); // true
console.log(car1.__proto__ === Car.prototype); // true
console.log(car1.constructor.prototype === Car.prototype); // true
console.log(car1.constructor.prototype === car1.__proto__); // true

/**
 * abstract 用于定义抽象类和其中的抽象方法。
 * 抽象类是不允许被实例化的
 * 抽象类中的抽象方法必须被子类实现
 */
abstract class People {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi(): any;
}

class Man extends People {
  public sayHi() {
    console.log(`${this.name} is saying Hi.`);
  }
}
let man = new Man('man');
man.sayHi();
