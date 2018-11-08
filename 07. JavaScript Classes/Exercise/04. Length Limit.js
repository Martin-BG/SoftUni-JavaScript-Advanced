class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  get innerLength() {
    return this._innerLength;
  }

  set innerLength(innerLength) {
    this._innerLength = (innerLength < 0) ? 0 : innerLength;
  }

  get innerString() {
    return this._innerString;
  }

  set innerString(innerString) {
    this._innerString = innerString;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    this.innerLength -= length;
  }

  toString() {
    if (this.innerString.length <= this.innerLength) {
      return this.innerString;
    }

    if (this.innerLength === 0) {
      return '...';
    }

    return this.innerString.substr(0, this.innerLength) + '...';
  }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
