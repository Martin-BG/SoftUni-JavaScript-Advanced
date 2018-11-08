let obj = {};
console.log(Object.getPrototypeOf(obj) === obj.__proto__); //true

class Abstract {
  constructor() {
    if (new.target === Abstract) // or (this.constructor === Abstract)
      throw new TypeError('Cannot construct Abstract instances directly');
  }
}

// Mixin demo
function asCircle() {
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
  return this;
}

class Circle {
  constructor(r) {
    this.radius = r;
  }
}

asCircle.call(Circle.prototype);
let circle = new Circle(5);
console.log(circle.area());

////////////////////////////////////////////

class Human {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(this.name + ' is walking');
  }
}

class Employee extends Human {
  constructor(name, jobTitle) {
    super(name);
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(this.name + ' - ' + this.jobTitle + ' is working');
  }
}

let person = new Employee('Pesho', 'Manager');

person.work();

Human.prototype.speak = function () { // Add function to prototype
  console.log(this.name + ' is speaking');
};

person.speak();

console.log(person.constructor.name); // Employee
console.log(person instanceof Employee); // true
console.log(person instanceof Human); // true

function Magician(name, power) {
  this.power = power;
}

Magician.prototype = Object.create(Human.prototype);
Magician.prototype.constructor = Magician;

let m = new Magician('Guru', 100);

console.log(m);

console.log('----------- Mixin ------------');

const utils = {
  toJSON: function () {
    console.log(`${this.name}`);
  }
};

class Computer {
  constructor() {
    this.name = 'Computer';
  }
}

class SpaceShip {
  constructor() {
    this.name = 'SpaceShip';
  }
}

const computer = new Computer();
utils.toJSON.call(computer); // Direct function call

Object.assign(Computer.prototype, utils); // Add function to prototype
computer.toJSON();

const computerTwo = new Computer();
computerTwo.toJSON();

const spaceShip = new SpaceShip();
Object.assign(SpaceShip.prototype, utils);
spaceShip.toJSON();

debugger;
