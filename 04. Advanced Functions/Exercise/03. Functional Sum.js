const add = (() => {
  let sum = 0;

  const add = (num) => {
    sum += num;
    return add;
  };

  add.toString = () => sum;

  return add;
})();

console.log(add(10)(1)(3).toString());
