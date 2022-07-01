"use strict";

// THE CLASS KEYWORD

// class Student {
//   constructor(firstName, lastName, year) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//     this.tardies = 0;
//     this.scores = [];
//   }
//   fullName() {
//     return `Your fullname is ${this.firstName} ${this.lastName}`;
//   }
//   markLate() {
//     this.tardies += 1;
//     if (this.tardies >= 3) {
//       return "You are expelled!!!";
//     }
//     return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
//   }
//   addScore(score) {
//     this.scores.push(score);
//     return this.scores;
//   }
//   calculateAverage() {
//     let sum = this.scores.reduce(function (a, b) {
//       return a + b;
//     });
//     return sum / this.scores.length;
//   }
//   static enrollStudents() {
//     return "ENROLLING STUDENTS!";
//   }
// }
// let firstStudent = new Student("Pushkar", "Gupta", 0);
// console.log(firstStudent);
// console.log(firstStudent.fullName());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.addScore(95));
// console.log(firstStudent.addScore(92));
// console.log(firstStudent.calculateAverage());
// console.log(Student.enrollStudents());
