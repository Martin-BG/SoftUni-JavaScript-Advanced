const assert = require('chai').assert;
const createCalculator = require('../07. Add or Subtract').createCalculator;

describe('createCalculator()', () => {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it('should have get() function', () => {
    const hasProp = calc.hasOwnProperty('get');
    assert.isTrue(hasProp);
  });

  it('should have subtract() function', () => {
    const hasProp = calc.hasOwnProperty('subtract');
    assert.isTrue(hasProp);
  });

  it('should have add() function', () => {
    const hasProp = calc.hasOwnProperty('add');
    assert.isTrue(hasProp);
  });

  it('should return 0 after create', () => {
    const value = calc.get();
    assert.equal(value, 0);
  });

  it('should return 5 after {add 3; add 2}', () => {
    calc.add(3);
    calc.add(2);
    const value = calc.get();
    assert.equal(value, 5);
  });

  it('should return -5 after {subtract 3; subtract 2}', () => {
    calc.subtract(3);
    calc.subtract(2);
    const value = calc.get();
    assert.equal(value, -5);
  });

  it('should return 4.199999999999999 after {add 5.3; subtract 1.1}', () => {
    calc.add(5.3);
    calc.subtract(1.1);
    const value = calc.get();
    assert.equal(value, 4.199999999999999);
  });

  it('should return 2 after {add 10; subtract \'7\'\' add \'-2\'; subtract -1}', () => {
    calc.add(10);
    calc.subtract('7');
    calc.add('-2');
    calc.subtract(-1);
    const value = calc.get();
    assert.equal(value, 2);
  });

  it('should return NaN after {add \'hello\'}', () => {
    calc.add('hello');
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN after {subtract \'hello\'}', () => {
    calc.subtract('hello');
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN after {add (empty input)}', () => {
    calc.add();
    const value = calc.get();
    assert.isNaN(value);
  });

  it('should return NaN subtract {add (empty input)}', () => {
    calc.subtract();
    const value = calc.get();
    assert.isNaN(value);
  });
});
