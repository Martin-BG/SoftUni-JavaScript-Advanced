class Vacation {
  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = +budget;
    this.kids = {};
  }

  get numberOfChildren() {
    let numberOfChildren = 0;
    Object.keys(this.kids).forEach((key) => numberOfChildren += this.kids[key].length);
    return numberOfChildren;
  }

  registerChild(name, grade, budget) {
    if (+budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }
    this.kids[grade] = this.kids[grade] || [];
    if (this.kids[grade].some((a) => a.startsWith(`${name}-`))) {
      return `${name} is already in the list for this ${this.destination} vacation.`;
    } else {
      this.kids[grade].push(`${name}-${+budget}`);
      return this.kids[grade];
    }
  }

  removeChild(name, grade) {
    this.kids[grade] = this.kids[grade] || [];
    const oldSize = this.kids[grade].length;
    this.kids[grade] = this.kids[grade].filter((a) => !a.startsWith(`${name}-`));
    if (oldSize !== this.kids[grade].length) {
      return this.kids[grade];
    }
    return `We couldn't find ${name} in ${grade} grade.`;
  }

  toString() {
    let numberOfChildren = 0;
    let sorted = [];
    Object.keys(this.kids).forEach((key) => {
      numberOfChildren += this.kids[key].length;
      if (this.kids[key].length) {
        sorted[key] = this.kids[key];
      }
    });

    if (!numberOfChildren) {
      return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    }

    let result = `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}\n`;
    sorted.forEach((arr, grade) => {
      result += `Grade: ${grade}\n`;
      arr.forEach((el, index) => result += `${index + 1}. ${el}\n`);
    });
    return result;
  }
}

/*
Method toString()
Prints all kids from the kid's property sorted in ascending order by their grade into the following format:
`{organizer} will take {numberOfChildren} children on trip to {destination}
`Grade: {currentGrade}`
{currentKidNumber}. {kid}`
…
…

`Grade: {nextGrade}`
{currentKidNumber}. {kid}`
…
…
.. And so on for all grades
The new line (\n) after every kid or grade is at the end.
If there are currently no kids for the current trip, the kids property is empty and you should return the following string:
`No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
Check the example below for more clarity.
 */

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());

/*let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));*/

/*let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000));*/
/*

 */
