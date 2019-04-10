var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, privateProperty) {
        // 实例属性
        this.instancePropety = '实例属性';
        this.protectedProperty = 'protectedProperty';
        this.name = name;
        this.privateProperty = privateProperty;
    }
    // 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用
    Animal.isAnimal = function (a) {
        console.log(a instanceof Animal);
    };
    Animal.prototype.say = function () {
        return "My name is " + this.name + " " + this.say1();
    };
    Animal.prototype.say1 = function () {
        return "" + this.privateProperty;
    };
    Object.defineProperty(Animal.prototype, "value", {
        /**
         * 存取器: 使用 getter 和 setter 可以改变属性的赋值和读取行为
         * 编译报错：error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
         * 解决方法(加上 --target es5)：tsc --target es5 filename.ts
         */
        get: function () {
            return 'value';
        },
        set: function (val) {
            console.log('set value: ' + val, this);
        },
        enumerable: true,
        configurable: true
    });
    // 使用 static 定义一个静态属性
    Animal.staticProperty = '静态属性';
    return Animal;
}());
var animal = new Animal('dog', 'privateProperty');
console.log(animal.say());
animal.value = 'hahaha';
console.log(animal.value);
Animal.isAnimal(animal);
console.log(animal.instancePropety);
console.log(Animal.staticProperty);
// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, a) {
        return _super.call(this, name, a) || this;
    }
    Cat.prototype.say = function () {
        return 'Cat extends Animal, ' + _super.prototype.say.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat('cat', 'cat private');
console.log(cat.say());
function Car(name, price) {
    this.name = name;
    this.price = price;
}
Car.prototype.getName = function () {
    return this.name;
};
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
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Man.prototype.sayHi = function () {
        console.log(this.name + " is saying Hi.");
    };
    return Man;
}(People));
var man = new Man('man');
man.sayHi();
