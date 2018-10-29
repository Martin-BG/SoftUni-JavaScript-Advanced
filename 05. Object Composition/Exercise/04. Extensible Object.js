function extensibleObject() {
  return {
    extend: function (template) {
      for (let prop in template) {
        if (template.hasOwnProperty(prop)) {
          if (typeof template[prop] === 'function') {
            this.__proto__[prop] = template[prop];
          } else {
            this[prop] = template[prop];
          }
        }
      }
    }
  };
}

const template = {
  test: 'test',
  funct: function () {}
};

const obj = extensibleObject();
console.log(obj);
console.log(obj.__proto__);

obj.extend(template);
console.log(obj);
console.log(obj.__proto__);
