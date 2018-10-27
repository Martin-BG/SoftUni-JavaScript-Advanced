function calcAggregates(arr) {
  console.log('Sum = ' + arr.reduce((a, b) => a + b));
  console.log('Min = ' + arr.reduce((a, b) => Math.min(a, b)));
  console.log('Max = ' + arr.reduce((a, b) => Math.max(a, b)));
  console.log('Product = ' + arr.reduce((a, b) => a * b));
  console.log('Join = ' + arr.reduce((a, b) => '' + a + b));
}

calcAggregates([2, 3, 10, 5]);
calcAggregates([5, -3, 20, 7, 0.5]);
