//-----------------------------------Order-agnostic Binary Search LeetCode #704. Binary Search-----------------------//
/*Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.*/

const binary_search = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key === arr[mid]) return mid;

    if (isAscending) {
      if (key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (key < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(binary_search([4, 6, 10], 10));
// console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(binary_search([10, 6, 4], 10));
// console.log(binary_search([10, 6, 4], 4));

//-----------------------------------Ceiling of a Number LeetCode #-----------------------//
/* Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.*/

const search_ceiling_of_a_number = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return start;
};

console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], -1));
