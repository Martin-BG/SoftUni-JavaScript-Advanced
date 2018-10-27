// first-class functions - Functions and objects are treated as the same thing
function hello() {
  console.log('Function hello() invoked.');
}

hello();
hello.speed = 200;
console.log(hello.name + ' ' + hello.speed);

// Declaration:
// 1. Function declaration
function myfunc1(val) {
  return val + 1;
}

// 2. Function expression
let myfunc2 = function (val) {
  return val + 1;
};

// 3. Function constructor
let myfunc3 = new Function('val', 'return val + 1;');

// higher-order functions - Take other functions as argument or return a function as result
function invokeAll(functionsArr) {
  for (let func of functionsArr) {
    func();
  }
}

let last = function () {
  console.error('last');
};

invokeAll([
  () => console.info('first'),
  () => console.warn('second'),
  last
]);

// example
function reduce(arr, func) {
  let result = arr.shift();
  for (let nextElement of arr)
    result = func(result, nextElement);
  return result;
}

reduce([5, 10, 20], (a, b) => a + b); // 35
reduce([5, 10, 20], (a, b) => a * b); // 1000

console.log([1, 2, 3].reduce((acc, cur) => acc += cur, 0));

// Partial Application
function sum(a, b) {return a + b;}

const increaseByOne = num => sum(num, 1);
console.log(increaseByOne(77));

// Function Properties
function max(arr) { return arr; }

console.log(max.length); // 1 (number of arguments)
console.log(max.name); // max
console.log((function () {}).name); // (empty string)

function inner() {
  console.log('Caller: ' + inner.caller);
}

function outer() { inner(); }

outer(); // Caller: function outer()

// IIFE
(function () { console.log('invoked!'); }());
(function () { console.log('invoked!'); })();
const iife = function () { console.log('invoked!'); }();
(() => { console.log('invoked!'); })();
(() => console.log('invoked!'))();

(function (arr) {
  let sum = 0;
  for (let x of arr)
    sum += x;
  console.log(sum);
})([10, 20, 30]);

// Closure - return function, state preserved in outer function
const f = (function () {
  let counter = 0;
  return () => console.log(++counter);
})();
f();
f();
f();
f();

console.log('######################### this');

function fff() {
  console.log(this === global); // (this == window) in browsers
}

fff(); // true

function ffff() {
  'use strict';
  console.log(this === global); // (this == window) in browsers
}

ffff(); // false

function func() {
  console.log(this);
}

let objA = {
  name: 'Peter',
  f: func
};
objA.f(); // { name: 'Peter', f: [Function: func] }

let objB = {
  name: 'Todor',
  getName: function () {
    return this.name; // "this" refers to "obj"
  }
};
console.log(objB.getName()); // Todor
function Car() {
  console.log(this);
}

let car = new Car(); // Car {}

function outerB() {
  console.log(this); // this Object
  function inner() {
    console.log(this === global); // global -> true
  }

  inner();
}

let objZ = {name: 'Peter', f: outerB};
objZ.f(); // { name: 'Peter', f: [Function: outerB] }

function outerC() {
  let inner = () => console.log(this);
  inner();
}

let objY = {
  name: 'Peter',
  f: outerC
};
objY.f(); // { name: 'Peter', f: [Function: outerC] }

//Changing the Context: Call and Apply
let maria = {
  name: 'Maria',
  hello: function (thing) {
    console.log(this.name + ' says hello ' + thing);
  }
};
maria.hello('world'); // Maria says hello world
let ivan = {name: 'Ivan'};
maria.hello.call(ivan, 'now'); // Ivan says hello now
maria.hello.apply(ivan, ['again']); // Ivan says hello again

//Changing the Context: Bind
let helloIvan = maria.hello.bind(ivan);
maria.hello('world'); // Maria says hello world
helloIvan('from me'); // Ivan says hello from me

console.log('######################### DEMOS ');
const obj = {
  name: 'Pesho',
  a: () => console.log(this), // {}
  b: () => console.log(this.name), // undefined
  printName: function () { console.log(this.name);}, // "Pesho"
  printDetails: function (title, city) { console.log(`${title} ${this.name} from ${city}`);},
  d: function () { console.log(this);} // { name: 'Pesho',a: [Function: a],b: [Function: b],  printName: [Function: printName], printDetails: [Function: printDetails],,d: [Function: d] }
};
obj.a(); // {}
obj.b(); // undefined
obj.printName(); // "Pesho"
obj.d(); // { name: 'Pesho',a: [Function: a],b: [Function: b],  printName: [Function: printName], printDetails: [Function: printDetails],,d: [Function: d] }

const person = {name: 'Gosho'};
obj.printName.call(person); // Gosho
obj.printName.apply(person);// Gosho
obj.printDetails.call(person, 'Mr', 'Sofia'); // Mr Gosho from Sofia
obj.printDetails.apply(person, ['Mr', 'Sofia']); // Mr Gosho from Sofia

const otherPerson = {name: 'Pencho'};
const otherObj = obj.printDetails.bind(otherPerson);
otherObj('Mr', 'Burgas'); // Mr Pencho from Burgas

const objTwo = {
  name: 'Pesho',
  movies: ['One', 'Two', 'Three'],
  printMovies: function () {
    console.log(this.name); // Pesho
    this.movies.forEach(function (movie) {
      console.log(movie); // "One" "Two"  "Three"
      console.log(this === global); // true
      console.log(`${this.name} watched ${movie}`); // undefined watched "One" "Two"  "Three"
    });
  },
  printMoviesFixOne: function () {
    function printing(movie) {
      console.log(`${this.name} watched ${movie}`);
    }

    const myPrint = printing.bind(this);
    this.movies.forEach(myPrint); // Pesho watched One / Two / Three
  },
  printMoviesFixTwo: function () {
    const that = this;
    this.movies.forEach(function (movie) {
      console.log(arguments); // [Arguments] { valid arguments }
      console.log(`${that.name} watched ${movie}`); // Pesho watched One / Two / Three
    });
  },
  printMoviesFixThree: function () {
    this.movies.forEach((movie) => {
      console.log(arguments); // [Arguments] { empty }
      console.log(`${this.name} watched ${movie}`); // Pesho watched One / Two / Three
    });
  }
};

objTwo.printMovies();
objTwo.printMoviesFixOne();
objTwo.printMoviesFixTwo();
objTwo.printMoviesFixThree();

// In browser this === selected element, so use this syntax:
// document.getElementById("elementId").addEventListener('click', objTwo.printMoviesFixOne.bind(objTwo));

// this === global for functions declared and called in global context (function a(){} | a())
//    to make this === obj in forEach etc., use arrow functions instead
// this === object, when functions declared in object (obj.function())
// this === selected element in browser (event handlers) => use obj.f.bind(obj) for this === obj
// this === obj when used with f.apply(obj) or f.call(obj)
// this === prototype/context when used with new: function f(){} | new f();

function fifth() {
  console.log(this === global);
  console.log(this.name);
}

fifth.prototype.name = 'Pesho';

fifth(); // true, undefined
new fifth(); // false, Pesho
