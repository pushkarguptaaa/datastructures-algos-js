"use strict";

// TIMING OUR CODE

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// function addUpTo(n) {
//     return n * (n + 1) / 2;
//   }

//   var time1 = performance.now();
//   addUpTo(1000000000);
//   var time2 = performance.now();
//   console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// PROBLEM SOLVING

// const charCount = function (str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char]) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// };
// console.log(charCount("Hi There!"));

// const charCount = function (str) {
//   let result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char]) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// };
// console.log(charCount("Hi There!"));

// TO COUNT CHARACTERS IN A STRING

// const charCount = function (str) {
//   let obj = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// };
// console.log(charCount("Hi There!"));
