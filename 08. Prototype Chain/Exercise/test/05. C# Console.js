const Console = require('../05. C# Console').Console;
const assert = require('chai').assert;

describe('C# console ', () => {
  it('should return undefined from a single number', () => {
    assert.isUndefined(Console.writeLine(5));
  });
  it('should return "No string format given" ', () => {
    assert.throws(() => Console.writeLine(), TypeError);
  });
  it('should return string from string', () => {
    assert.equal(Console.writeLine('return'), 'return');
  });
  it('should return JSON string from object', () => {
    assert.equal(Console.writeLine({age: 18}), JSON.stringify({age: 18}));
  });
  it('should return TypeError', () => {
    assert.throws(() => Console.writeLine(0, ''), TypeError);
  });
  it('should return RangeError for less parameters', () => {
    assert.throws(() => Console.writeLine('the sum of {0} and {1} is {2}', 1, 0), RangeError);
  });
  it('should return RangeError for more parameters', () => {
    assert.throws(() => Console.writeLine('Js {0}', 'Core', 'Mocha'), RangeError);
  });
  it('should return RangeError for equal placeholders', () => {
    assert.throws(() => Console.writeLine('The perfect match {0} {0}', 'doesNot', 'exist'), RangeError);
  });
  it('should recognize the number in the placeholder', () => {
    assert.throws(() => Console.writeLine('This will be {101}', 'WRONG'), RangeError);
  });
  it('should change all placeholders', () => {
    assert.equal(Console.writeLine('One {0} Two {1}', '1', '2'), 'One 1 Two 2');
  });
});
