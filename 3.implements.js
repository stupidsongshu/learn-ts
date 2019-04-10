/**
 * 实现（implements）
 */
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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('door alarm!');
    };
    return SecurityDoor;
}(Door));
// 一个类可以实现多个接口
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alarm!');
    };
    Car.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car;
}());
var door = new SecurityDoor();
door.alert();
var car = new Car();
car.alert();
car.lightOn();
car.lightOff();
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.alert = function () {
        console.log('light implements LightAlarm');
    };
    return Light;
}());
var light = new Light();
light.alert();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point3d = {
    x: 1,
    y: 2,
    z: 3
};
function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 0;
    counter.reset = function () {
        this.interval = 0;
    };
    return counter;
}
var c = getCounter();
c(10);
c.interval = 1;
console.log(c.interval);
c.reset();
console.log(c.interval);
