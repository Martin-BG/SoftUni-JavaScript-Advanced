function createCalculator() {
  let value = 0;
  return {
    add: (num) => { value += +num; },
    subtract: (num) => { value -= +num; },
    get: () => { return value; }
  };
}

module.exports = {createCalculator};
