/**
 * 实现（implements）
 */

interface Alarm {
  alert(): any;
}

interface Light {
  lightOn(): any;
  lightOff(): any;
}

interface LightAlarm extends Alarm {
  lightOn(): any;
  lightOff(): any;
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('door alarm!');
  }
}

// 一个类可以实现多个接口
class Car implements Alarm, Light {
  alert() {
    console.log('Car alarm!');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

let door = new SecurityDoor();
door.alert();

let car = new Car();
car.alert();
car.lightOn();
car.lightOff();

class Light implements LightAlarm {
  alert() {
    console.log('light implements LightAlarm');
  }
  // lightOn lightOff 不用实现也能通过编译
}
let light = new Light();
light.alert();

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {
  x: 1,
  y: 2,
  z: 3
}

// 混合类型
// 一个函数还可以有自己的属性和方法
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    console.log(start);
  }
  counter.interval = 0;
  counter.reset = function() {
    this.interval = 0;
  }
  return counter;
}
let c = getCounter();
c(10);
c.interval = 1;
console.log(c.interval);
c.reset();
console.log(c.interval);
