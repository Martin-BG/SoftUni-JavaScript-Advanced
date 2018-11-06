const assert = require('chai').assert;
const isSymmetric = require('../05. Check for Symmetry').isSymmetric;

describe('isSymmetric(arr) ', function () {
  it('should return true for [1,2,3,3,2,1]', function () {
    const input = [1, 2, 3, 3, 2, 1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [1,2,3,4,2,1]', function () {
    const input = [1, 2, 3, 4, 2, 1];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return true for [-1,2,-1]', function () {
    const input = [-1, 2, -1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [-1,2,1]', function () {
    const input = [-1, 2, 1];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return false for [1,2]', function () {
    const input = [1, 2];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return true for [1]', function () {
    const input = [1];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return true for [5,\'hi\',{a:5},new Date(),{a:5},\'hi\',5]', function () {
    const input = [5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5];
    const result = isSymmetric(input);
    assert.isTrue(result);
  });
  it('should return false for [5,\'hi\',{a:5},new Date(),{X:5},\'hi\',5]', function () {
    const input = [5, 'hi', {a: 5}, new Date(), {X: 5}, 'hi', 5];
    const result = isSymmetric(input);
    assert.isFalse(result);
  });
  it('should return false for 1,2,2,1 (not an array)', function () {
    const result = isSymmetric(1, 2, 2, 1);
    assert.isFalse(result);
  });
});
