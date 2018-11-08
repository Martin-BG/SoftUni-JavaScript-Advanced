class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  toString() {
    const className = this.constructor.name;
    return `${className} (name: ${this.name}, email: ${this.email})`;
  }
}

class Student extends Person {
  constructor(name, email, course) {
    super(name, email);
    this.course = course;
  }

  toString() {
    let baseStr = super.toString().slice(0, -1);
    return baseStr + `, course: ${this.course})`;
  }
}

function extendClass(Class) {
  Class.prototype.species = 'Human';
  Class.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

extendClass(Person);
console.log(new Person('Maria', 'maria@gmail.com').toSpeciesString()); // "I am a Human. Person (name: Maria, email: maria@gmail.com)"
console.log(new Student('Ana', 'ana@mail.ru', 3).toSpeciesString());// "I am a Human. Student (name: Ana, email: ana@mail.ru, course: 3)"
