function isOddOrEven(string) {
  if (typeof(string) !== 'string') {
    return undefined;
  }

  if (string.length % 2 === 0) {
    return 'even';
  }

  return 'odd';
}

const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Even or odd string length', (() => {
  it('with a number parameter, should return undefined', function () {
    expect(isOddOrEven(13)).to.equal(undefined, 'Function did not return the correct result!');
  });
  it('with a object parameter, should return undefined', function () {
    assert.equal(isOddOrEven({name: 'pesho'}), undefined, 'Function did not return correct result!');
  });
  it('with an even length string should return "even"', function () {
    assert.equal(isOddOrEven('roar'), 'even', 'Function did not return correct result!');
  });
  it('with an odd length string, should return "odd"', function () {
    expect(isOddOrEven('pesho')).to.equal('odd', 'Function did not return correct result!');
  });
  it('with multiple consecutive checks, should return correct values', function () {
    expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return correct result!');
    expect(isOddOrEven('alabala')).to.equal('odd', 'Function did not return correct result!');
    expect(isOddOrEven('is it even')).to.equal('even', 'Function did not return correct result!');
  });
}));
