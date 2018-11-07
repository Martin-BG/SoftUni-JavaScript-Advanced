let mathEnforcer = {
  addFive: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof(num) !== 'number') {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
      return undefined;
    }
    return num1 + num2;
  }
};

let expect = require('chai').expect;

describe('Match enforcer', () => {
  describe('check undefined cases', () => {
    it('should return undefined from addFice("7")', function () {
      expect(mathEnforcer.addFive('7')).to.be.undefined;
    });

    it('should return undefined from subtractTen([11])', function () {
      expect(mathEnforcer.subtractTen([11])).to.be.undefined;
    });

    it('should return undefined from sum(1, "2")', function () {
      expect(mathEnforcer.sum(1, '2')).to.be.undefined;
    });

    it('should return undefined from sum("1", 10)', function () {
      expect(mathEnforcer.sum({}, 10)).to.be.undefined;
    });
  });

  describe('check \'add\' cases which should work', () => {
    it('should return 11 from addFive(6)', function () {
      expect(mathEnforcer.addFive(6)).to.be.equal(11);
    });

    it('should return 0 from addFive(-5)', function () {
      expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });

    it('should return 6.1 from addFive(1.1)', function () {
      expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
    });
  });

  describe('check \'subtract\' cases which should work', () => {
    it('should return 90 from subtractTen(100)', function () {
      expect(mathEnforcer.subtractTen(100)).to.be.equal(90);
    });

    it('should return -15 from subtractTen(-5)', function () {
      expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
    });

    it('should return -0.1 from subtractTen(9.9)', function () {
      expect(mathEnforcer.subtractTen(9.9)).to.be.closeTo(-0.1, 0.01);
    });
  });

  describe('check \'sum\' cases which should work', () => {
    it('should return 0.3 from sum(0.1,0.2)', function () {
      expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
    });

    it('should return 18 from sum(9,9)', function () {
      expect(mathEnforcer.sum(9, 9)).to.be.equal(18);
    });

    it('should return -550 from sum(-600,50)', function () {
      expect(mathEnforcer.sum(-600, 50)).to.be.equal(-550);
    });

    it('should return -550 from sum(600,-50)', function () {
      expect(mathEnforcer.sum(600, -50)).to.be.equal(550);
    });
  });
});
