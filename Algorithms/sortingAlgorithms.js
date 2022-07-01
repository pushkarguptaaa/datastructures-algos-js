"use strict";

// JAVASCRIPT SORTING

// const numberCompare = function (num1, num2) {
//   return num2 - num1;
// };
// console.log([6, 7, 3, 9, 1].sort(numberCompare));

// const compareByLen = function (len1, len2) {
//   return len1.length - len2.length;
// };
// console.log(["tom", "john", "pushkar", "amit", "lucifer"].sort(compareByLen));

// BUBBLE SORT

// const bubbleSort = function (arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(bubbleSort([6, 7, 3, 9, 1]));

// OPTIMISED BUBBLE SORT

// const bubbleSort1 = function (arr) {
//   let noSwaps;
//   for (let i = arr.length - 1; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       noSwaps = false;
//     }
//     if (noSwaps === true) break;
//   }
//   return arr;
// };
// console.log(bubbleSort1([6, 7, 3, 9, 1]));

// SELECTION SORT

// const selectionSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       let temp = 0;
//       temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// };
// console.log(selectionSort([6, 7, 3, 9, 1]));

// INSERTION SORT

// const insertionSort = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// };
// console.log(insertionSort([6, 7, 3, 9, 1]));

// MERGING ARRAYS

// const merge = function (arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// };
// console.log(merge([1, 10, 50], [2, 14, 19, 100]));

// MERGE SORT
// const mergeSort = function (arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };
// console.log(mergeSort([10, 24, 76, 73]));

// PIVOT HELPER

// const pivot = function (arr, start = 0, end = arr.length - 1) {
//   const swap = function (array, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   };
//   let pivot = arr[start];
//   let swapIndx = start;
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIndx++;
//       swap(arr, swapIndx, i);
//     }
//   }
//   swap(arr, start, swapIndx);
//   return swapIndx;
// };
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// QUICK SORT

// const quickSort = function (arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// };
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// RADIX SORT HELPER METHODS
// GET DIGIT, DIGIT COUNT, MOST DIGITS

// const getDigit = function (num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// };
// console.log(getDigit(7323, 1));

// const digitCount = function (num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// };
// console.log(digitCount(657));

// const mostDigits = function (nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// };
// console.log(mostDigits([23, 587, 123, 3465878]));

// RADIX SORT

// const radixSort = function (nums) {
//   let maxDigitCount = mostDigits(nums);
//   for (let k = 0; k < maxDigitCount; k++) {
//     let digitBuckets = Array.from({ length: 10 }, () => []);
//     for (let i = 0; i < nums.length; i++) {
//       let digit = getDigit(nums[i], k);
//       digitBuckets[digit].push(nums[i]);
//     }
//     nums = [].concat(...digitBuckets);
//   }
//   return nums;
// };
// console.log(radixSort([34, 567, 43, 5654, 23421]));
