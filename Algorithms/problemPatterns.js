"use strict";

// FREQUENCY COUNTER PROBLEM APPROACH 1
// TIME COMPLEXITY- O(N square)

// const same = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };
// console.log(same([1, 2, 3], [4, 1, 9]));

// FREQUENCY COUNTER PROBLEM APPROACH 2
// TIME COMPLEXITY- O(N)

// const same1 = function (arr3, arr4) {
//   if (arr3.length !== arr4.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr3) {
//     frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
//   }
//   for (let val of arr4) {
//     frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
//   }
//   console.log(frequencyCounter1, frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(same1([1, 2, 3], [4, 1, 9]));

// ANAGRAM CHALLENGE

// const validAnagram = function (str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let str1Obj = {};
//   let str2Obj = {};
//   for (let val of str1) {
//     str1Obj[val] = ++str1Obj[val] || 1;
//   }
//   for (let val of str2) {
//     str2Obj[val] = ++str2Obj[val] || 1;
//   }
//   console.log(str1Obj, str2Obj);
//   for (let key in str1Obj) {
//     if (str1Obj[key] !== str2Obj[key]) {
//       return false;
//     }
//     if (!(key in str2Obj)) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(validAnagram("cinema", "iceman"));

// MULTIPLE POINTERS APPROACH 1
// TIME COMPLEXITY- O(N square)

// const sumZero = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         console.log(arr[i], arr[j]);
//       }
//     }
//   }
// };
// sumZero([-3, -2, 2, 3]);

// MULTIPLE POINTERS APPROACH 2
// TIME COMPLEXITY- O(N)

// const sumZero1 = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       console.log(arr[left], arr[right]);
//       left++;
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };
// sumZero1([-3, -2, 1, 2, 3]);

// COUNT UNIQUE VALUES CHALLENGE
// MULTIPLE POINTERS

// const countUniqueValues = function (arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] === arr[j];
//     }
//   }
//   return i - 1;
// };
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// SLIDING WINDOW APPROACH 1
// TIME COMPLEXITY- O(N SQUARE)

// const maxSubArray = function (arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// };
// console.log(maxSubArray([1, 1, 2, 4, 3, 6, 7, 4, 1, 7, 4, 6, 5], 3));

// SLIDING WINDOW APPROACH 2
// TIME COMPLEXITY- O(N)

// const maxSubArray1 = function (arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let tempSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < num; i++) {
//     tempSum += arr[i];
//   }
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// };
// console.log(maxSubArray1([1, 1, 6, 7, 8, 4, 3, 9, 5, 8, 2, 7, 3], 3));
