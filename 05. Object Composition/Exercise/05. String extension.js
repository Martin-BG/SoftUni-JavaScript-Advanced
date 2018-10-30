(() => {
  String.prototype.ensureStart = function (str) {
    if (this.indexOf(str) !== 0) {
      return str + this;
    }
    return this.valueOf();
  };

  String.prototype.ensureEnd = function (str) {
    let length = str.length;
    let lastElements = this.substr(-length);
    if (str !== lastElements) {
      return this + str;
    }
    return this.valueOf();
  };

  String.prototype.isEmpty = function () {
    return this.valueOf() === '';
  };

  String.prototype.truncate = function (n) {
    if (n >= this.length) {
      return this.valueOf();
    }
    if (n < 4) {
      return '.'.repeat(n);
    }
    if (!this.includes(' ')) {
      return this.substring(0, n - 3) + '...';
    }

    let tokens = this.split(' ');
    let result = tokens[0];
    for (let i = 1; i < tokens.length; i++) {
      if (result.length + tokens[i].length + 4 > n) {
        return result + '...';
      }
      result += ' ' + tokens[i];
    }
  };

  String.format = function () {
    let args = [...arguments];
    let str = args.shift();
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(`${i}`) !== -1 && args.length > 0) {
        str = str.replace(`{${i}}`, args.shift());
      }
    }
    return str;
  };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
