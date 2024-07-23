// const Person = function (name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// };

// const pedro = new Person("Pedro", 1999, "Dev");
// const juan = new Person("Juan", 2003, "Ux");
// const claudia = new Person("Claudia", 2005, "Back-End");
// console.log(pedro);
// console.log(juan);
// console.log(claudia);

// console.log(pedro instanceof Person);

// const Person = function (name) {
//   this.name = name;
// };

// console.log(pedro);

// const Person = function (name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// };

// const Developer = function (skills, yearsOfExperience) {
//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// };

// Person.prototype.calculateAge = function () {
//   const today = new Date();
//   const year = today.getFullYear();
//   console.log(year - this.birthYear);
//   return year - this.birthYear;
// };

// const pedro = new Person("Pedro", 1999, "Dev");
// const erika = new Person("Erika", 1999, "Dev");
// const pablo = new Person("Pablo", 1999, "Dev");
// const juan = new Developer("React", 1);

// console.log(pedro);
// console.log(erika);
// console.log(pablo);

// const Vec = function (x, y) {
//   this.x = x;
//   this.y = y;
// };

// const vec1 = new Vec(1, 2);
// const vec2 = new Vec(2, 3);

// Vec.prototype.plus = function (obj) {
//   return new Vec(this.x + obj.x, this.y + obj.y);
// };

// Vec.prototype.minus = function (obj) {
//   return new Vec(this.x - obj.x, this.y - obj.y);
// };

// Vec.prototype.length = function () {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// };

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

// const Group = function () {
//   this.members = [];
// };

// Group.prototype.add = function (value) {
//   if (!this.has(value)) {
//     this.members.push(value);
//   }
// };

// Group.prototype.has = function (value) {
//   return this.members.includes(value);
// };

// Group.from = function (collection) {
//   var group = new Group();
//   for (let i = 0; i < collection.length; i++) {
//     group.add(collection[i]);
//   }
//   return group;
// };

// const group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false

// group.add(10);
// console.log(group.has(10)); // true

const Triangle = function (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

const triangle = new Triangle(1, 2, 3);
console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6
