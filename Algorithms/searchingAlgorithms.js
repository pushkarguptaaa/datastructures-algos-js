"use strict";

// LINEAR SEARCH

// const linearSearch = function (arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(linearSearch([1, 2, 3, 4, 5], 3));

// BINARY SEARCH

// const binarySearch = function (arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== val && left <= right) {
//     if (arr[middle] > val) right = middle - 1;
//     else left = middle + 1;
//     middle = Math.floor((left + right) / 2);
//   }
//   return arr[middle] === val ? middle : -1;
// };
// console.log(binarySearch([1, 2, 3, 4, 5], 4));

// NAIVE STRING SEARCH

// const stringSearch = function (longStr, shortStr) {
//   let count = 0;
//   for (let i = 0; i < longStr.length; i++) {
//     for (let j = 0; j < shortStr.length; j++) {
//       if (shortStr[j] !== longStr[i + j]) break;
//       if (j === shortStr.length - 1) count++;
//     }
//   }
//   return count;
// };
// console.log(stringSearch("guggomggyjgomghvjhv", "omg"));
