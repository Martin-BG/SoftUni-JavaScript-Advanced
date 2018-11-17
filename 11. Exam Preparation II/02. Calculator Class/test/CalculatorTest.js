const assert = require('chai').assert;
const Calculator = require('../Calculator').Calculator;

describe('Calculator class', () => {
  let calculator = new Calculator();

  beforeEach('init Calculator class', () => {
    calculator = new Calculator();
  });

  it('should contain empty array as expenses property', function () {
    assert.notEqual(calculator.expenses, []);
  });

  it('should succeed adding number', function () {
    calculator.add(10);
    assert.notEqual(calculator.expenses, [10]);
  });

  it('should succeed adding string', function () {
    calculator.add('Pesho');
    assert.notEqual(calculator.expenses, ['Pesho']);
  });

  it('should succeed adding floating number', function () {
    calculator.add(10.67);
    assert.notEqual(calculator.expenses, [10.67]);
  });

  it('should succeed adding undefined (no parameter)', function () {
    calculator.add();
    assert.notEqual(calculator.expenses, [undefined]);
  });

  it('should throw on divide of empty expenses', function () {
    assert.throws(() => calculator.divideNums(), 'There are no numbers in the array!');
  });

  it('should throw on divide of no numbers in expenses', function () {
    calculator.add('5');
    assert.throws(() => calculator.divideNums(), 'There are no numbers in the array!');
  });

  it('should return correct result on divide of one number in expenses', function () {
    calculator.add(5);
    assert.equal(calculator.divideNums(), 5);
  });

  it('should return correct result on divide of one floating number in expenses', function () {
    calculator.add(5.6888);
    assert.closeTo(calculator.divideNums(), 5.6888, 0.01);
  });

  it('should return correct result on divide of three mixed numbers in expenses', function () {
    calculator.add(5.6888);
    calculator.add('5');
    calculator.add(5);
    calculator.add();
    calculator.add({num: 5});
    calculator.add(-123.44);
    const expected = 5.6888 / 5 / -123.44;
    assert.closeTo(calculator.divideNums(), expected, 0.01);
  });

  it('should return correct message on divide if 0 is present in expenses and is not the first element', function () {
    calculator.add(1);
    calculator.add(0);
    assert.equal(calculator.divideNums(), 'Cannot divide by zero');
  });

  it('should return correct result on divide if 0 is present in expenses as the first element', function () {
    calculator.add(0);
    calculator.add(1.0);
    calculator.add(5.0);
    assert.closeTo(calculator.divideNums(), 0, 0.01);
  });

  it('should return correct string on empty expenses', function () {
    assert.equal(calculator.toString(), 'empty array');
  });

  it('should return correct string on populated expenses', function () {
    const toAdd = [5.6888, '5', 5, 'Pesho', undefined, {key: 5}];
    const expected = toAdd.join(' -> ');
    toAdd.forEach((item) => calculator.add(item));
    assert.equal(calculator.toString(), expected);
  });

  it('should sort numbers properly', function () {
    const toAdd = [5.6888, 5, -5, -99.4, 0];
    const expected = toAdd.sort((a, b) => a - b).join(', ');
    toAdd.forEach((item) => calculator.add(item));
    assert.equal(calculator.orderBy(), expected);
  });

  it('should sort mixed expenses properly', function () {
    const toAdd = [5.6888, 5, -5, -99.4, undefined];
    const expected = toAdd.sort().join(', ');
    toAdd.forEach((item) => calculator.add(item));
    assert.equal(calculator.orderBy(), expected);
  });
});

/* // Demo solution
describe('constructor', function () {
   let calculator;
   beforeEach(function () {
       calculator = new Calculator();
   });
   it('expences property should be empty arr', function () {
       let result = calculator.expenses;
       let obj = {};

       expect(result).to.be.eql([]);
   });

    describe('add function', function () {
        it('add string and numbers', function () {
            calculator.add('Pesho');
            calculator.add(10);
            calculator.add(1.5);
            calculator.add(-10);

            let result = calculator.expenses;
            expect(result).to.eql(['Pesho', 10, 1.5, -10]);
        });

        it('add objects, array', function () {
            calculator.add([1,2,3]);
            calculator.add({});

            let result = calculator.expenses;
            expect(result).to.be.eql([[1,2,3], {}]);
        })
    });

    describe('divide function', function () {
        it('test with no numbers into the arr', function () {
            calculator.add('Pesho');
            calculator.add({});
            let result = () => calculator.divideNums();
            expect(result).to.throw(`There are no numbers in the array!`)
        });

        it('test with one number', function () {
            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-9.9, 0.01);
        });

        it('test with more then two numbers', function () {

            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(9.5);

            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-0.115, 0.01);
        });

        it('test with more then two numbers', function () {

            calculator.add('Pesho');
            calculator.add({});
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(0);

            let result = calculator.divideNums();
            expect(result).to.be.eql(`Cannot divide by zero`);
        })

    });

    describe('toString', function () {
        it('test empty expenses', function () {

            let result = calculator.toString();

            expect(result).to.be.eql('empty array');
        });


        it('test with 5 elements', function () {

            calculator.add('Peshoo');
            calculator.add({});
            calculator.add([1,2,3]);
            calculator.add(-1.5);
            calculator.add(300);

            let result = calculator.toString();

            expect(result).to.be.eql(`Peshoo -> [object Object] -> 1,2,3 -> -1.5 -> 300`);
        })

    });

    describe('orderBy function', function () {
        it('order empty expeses', function () {
            let result = calculator.orderBy();
            expect(result).to.be.eql(`empty`)
        });

        it('order with numbers', function () {
            calculator.add(9);
            calculator.add(-9.9);
            calculator.add(0);

            let result = calculator.orderBy();
            expect(result).to.be.eql(`-9.9, 0, 9`)
        });

        it('order with mixed types', function () {
            calculator.add(9);
            calculator.add(-9.9);
            calculator.add('Pesho');
            calculator.add(0);
            calculator.add({});

            let result = calculator.orderBy();
            expect(result).to.be.eql(`-9.9, 0, 9, Pesho, [object Object]`)
        })
    })
});
 */
