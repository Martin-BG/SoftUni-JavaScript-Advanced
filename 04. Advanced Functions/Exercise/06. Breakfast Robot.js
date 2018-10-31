let manager = (() => {
  const robot = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
    meals: {
      apple: {carbohydrate: 1, flavour: 2},
      coke: {carbohydrate: 10, flavour: 20},
      burger: {carbohydrate: 5, fat: 7, flavour: 3},
      omelet: {protein: 5, fat: 1, flavour: 1},
      cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    },
    prepare: function (meal, quantity) {
      for (const ingredient of Object.getOwnPropertyNames(this.meals[meal])) {
        const needed = this.meals[meal][ingredient] * quantity;
        if (needed > this[ingredient]) {
          return `Error: not enough ${ingredient} in stock`;
        }
      }
      for (const ingredient of Object.getOwnPropertyNames(this.meals[meal])) {
        this[ingredient] -= this.meals[meal][ingredient] * quantity;
      }
      return 'Success';
    }
  };

  return (input) => {
    const [command, argument, quantity] = input.split(/\s+/g);
    switch (command) {
      case 'restock':
        robot[argument] += +quantity;
        return 'Success';
      case 'prepare':
        return robot.prepare(argument, +quantity);
      case 'report':
        return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
    }
  };
})();

console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));

console.log();

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
