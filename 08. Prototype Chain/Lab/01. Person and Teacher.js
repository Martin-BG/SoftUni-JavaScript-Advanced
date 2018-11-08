function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }

  return {
    Person,
    Teacher
  };
}

const wrapper = personAndTeacher();
const p = new wrapper.Person('Maria', 'maria@gmail.com');
console.log('Person: ' + p.name + ' (' + p.email + ')');

const t = new wrapper.Teacher('Ivan', 'iv@yahoo.com', 'PHP');
console.log('Teacher: ' + t.name + ' (' + t.email + '), teaches ' + t.subject);
