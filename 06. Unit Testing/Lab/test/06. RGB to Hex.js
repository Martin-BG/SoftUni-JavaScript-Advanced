const assert = require('chai').assert;
const rgbToHexColor = require('../06. RGB to Hex').rgbToHexColor;

describe('rgbToHexColor(red, green, blue)', function () {
  describe('Nominal cases (valid input)', function () {
    it('should return #FF9EAA on (255, 158, 170)', function () {
      const hex = rgbToHexColor(255, 158, 170);
      assert.equal(hex, '#FF9EAA');
    });
    it('should return #000000 on (0, 0, 0)', function () {
      const hex = rgbToHexColor(0, 0, 0);
      assert.equal(hex, '#000000');
    });
    it('should return #0C0D0E on (12, 13, 14)', function () {
      const hex = rgbToHexColor(12, 13, 14);
      assert.equal(hex, '#0C0D0E');
    });
    it('should return #FFFFFF on (255, 255, 255)', function () {
      const hex = rgbToHexColor(255, 255, 255);
      assert.equal(hex, '#FFFFFF');
    });
  });
  describe('Special cases (invalid input)', function () {
    it('should return undefined on (-1, 0, 0)', function () {
      const hex = rgbToHexColor(-1, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, -1, 0)', function () {
      const hex = rgbToHexColor(0, -1, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, -1)', function () {
      const hex = rgbToHexColor(0, 0, -1);
      assert.isUndefined(hex,);
    });

    it('should return undefined on (256, 0, 0)', function () {
      const hex = rgbToHexColor(256, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 256, 0)', function () {
      const hex = rgbToHexColor(0, 256, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, 256)', function () {
      const hex = rgbToHexColor(0, 0, 256);
      assert.isUndefined(hex,);
    });

    it('should return undefined on (3.14, 0, 0)', function () {
      const hex = rgbToHexColor(3.14, 0, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 3.14, 0)', function () {
      const hex = rgbToHexColor(0, 3.14, 0);
      assert.isUndefined(hex,);
    });
    it('should return undefined on (0, 0, 3.14)', function () {
      const hex = rgbToHexColor(0, 0, 3.14);
      assert.isUndefined(hex,);
    });

    it('should return undefined on ("5", [3], {8:9})', function () {
      const hex = rgbToHexColor('5', [3], {8: 9});
      assert.isUndefined(hex,);
    });

    it('should return undefined on (empty input)', function () {
      const hex = rgbToHexColor();
      assert.isUndefined(hex,);
    });
  });
});
