"use strict";

// THE CALL STACK

// function takeShower() {
//   return "Showering!";
// }

// function eatBreakfast() {
//   let meal = cookFood();
//   return `Eating ${meal}`;
// }

// function cookFood() {
//   let items = ["Oatmeal", "Eggs", "Protein Shake"];
//   return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp() {
//   takeShower();
//   eatBreakfast();
//   console.log("Ok ready to go to work!");
// }

// wakeUp();

// RECURSIVE FUNCTION 1
// COUNTDOWN

// const countDown = function (num) {
//   if (num <= 0) {
//     console.log("All Done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// };
// countDown(4);

// RECURSIVE FUNCTION 2
// SUMRANGE

// const sumRange = function (num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// };
// console.log(sumRange(4));

// ITERATIVE FACTORIAL

// const factorial = function (num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// };
// console.log(factorial(4));

// // RECURSIVE FACTORIAL

// const factorial1 = function (num) {
//   if (num === 1) return 1;
//   return num * factorial1(num - 1);
// };
// console.log(factorial1(4));

// HELPER METHOD RECURSION

// const oddValues = function (arr) {
//   let result = [];

//   const helper = function (helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   };
//   helper(arr);
//   return result;
// };
// console.log(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// PURE RECURSION

// const oddValues1 = function (arr) {
//   let newArr = [];
//   if (arr.length === 0) {
//     return newArr;
//   }
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   newArr = newArr.concat(oddValues1(arr.slice(1)));
//   return newArr;
// };
// console.log(oddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
