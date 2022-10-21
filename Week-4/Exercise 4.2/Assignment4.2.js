var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

function Teacher() {}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
};

const obj = new Teacher();
obj.initialize("Jimish", 25);
obj.teach("Javascript");
