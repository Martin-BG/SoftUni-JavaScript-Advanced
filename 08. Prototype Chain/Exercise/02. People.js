function solve() {
  class Employee {
    constructor(name, age) {
      if (new.target === Employee) {
        throw new Error('Cannot instantiate directly.');
      }
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this.currentTaskIndex = -1;
    }

    work() {
      console.log(this.name + ' ' + this.tasks[++this.currentTaskIndex % this.tasks.length]);
    }

    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    getSalary() {
      return this.salary;
    }

  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`is working on a simple task.`);
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push('is working on a complicated task.');
      this.tasks.push('is taking time off work.');
      this.tasks.push('is supervising junior workers.');
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;

      this.tasks.push('scheduled a meeting.');
      this.tasks.push('is preparing a quarterly report.');
    }

    getSalary() {
      return this.salary + this.dividend;
    }
  }

  return {
    Employee,
    Junior,
    Manager,
    Senior,
  };
}

let wrapper = solve();
let manager = new wrapper.Manager('Peter', 22);
manager.work();
manager.work();
manager.work();
manager.work();
manager.salary = 2000;
manager.collectSalary();

let guy2 = new wrapper.Senior('Petkan', 99);
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
