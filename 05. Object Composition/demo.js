// Closures

function counterClosure() {
  let counter = 0;

  function getNextCount() {
    console.log(++counter);
  }

  return getNextCount;
}

let count = counterClosure();
count();
count();
count();

let counter = (function () {
  let num = 0;
  return function () {
    console.log(++num);
  };
})();

counter(); // 1
counter(); // 2
counter(); // 3

let counterArrow = (() => {
  let num = 0;
  return () => console.log(++num);
})();
counterArrow(); // 1
counterArrow(); // 2
counterArrow(); // 3
counterArrow(); // 4
