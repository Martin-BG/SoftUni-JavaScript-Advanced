function Human(name) { // Hoisted
  this.name = name || 'Pesho';
  this.walk = function () { // This as it creates a function for every Human object!!! Use Human.prototype.walk = function () {...} instead
    console.log(this.name + ' is walking');
  };
}

Human.prototype.sleep = function () { // Proper way to add functions
  console.log(this.name + ' is sleeping');
};

Human.eat = function () { // Static function (Human.eat())
  console.log(this.name + ' is eating');
};
Human.MAX_HEALTH = 100; // Static "constant" definition for Human (Human.MAX_HEALTH)

Human.eat(); // result: Human is eating
console.log(Human.MAX_HEALTH);

let pesho = new Human(); // Create new human object - proto is Object

Human.eat.call(pesho); // Call static function for object -> Pesho is eating
Human.eat.apply(pesho); // Call static function for object -> Pesho is eating
Human.prototype.sleep.call(pesho); // Alternative way to call function -> Pesho is sleeping

pesho.walk();
pesho.sleep();

let gosho = Object.create(pesho); // Create object from another; proto is Human, then Object
gosho.name = 'Gosho';
gosho.sleep();

// Yet another way to create Human object - proto is Human
let ivan = Object.create(Human.prototype);
Human.call(ivan, 'Ivan'); // Or Human.apply(ivan, 'Ivan');
ivan.sleep();

console.log('================ Classes ===============');

class ClassHuman { // Not hoisted!
  constructor(name) {
    this.name = name || 'Pesho'; // this.name calls setter!!!

    this.jump = function () { // BAD! - a copy for each instance
      console.log(this._name + 'is jumping');
    };

    this._name = '';

    // Object.seal(this); // Inextensible Class Data - prevents adding/removing of properties
    // Object.freeze(this); // Read-only class and data - prevents adding/removing of properties and changing current values;
    // To override : Object.defineProperty(....); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

  }

  get name() { // getter
    return this._name;
  }

  set name(val) { // setter
    this._name = val;
  }

  static talk() { // Static function
    console.log(this.name + ' is talking');
  }

  sleep() { // Function
    console.log(this._name + ' is sleeping');
  }
}

ClassHuman.prototype.eat = function () { // Another way to add functions to class
  console.log(this._name + ' is eating');
};

let peshoClass = new ClassHuman();
peshoClass.name = 'PeshO'; // Use setter
console.log(peshoClass.name); // Use getter
peshoClass._name = 'Pesho'; // Direct access
peshoClass.sleep();
peshoClass.eat();
ClassHuman.talk();
ClassHuman.talk.apply(peshoClass); // Or ...call(..)


