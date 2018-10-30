function sortArray(array, method) {
  const sortingStrategies = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  return array.sort(sortingStrategies[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
