//-----------------------------------Order-agnostic Binary Search LeetCode #704. Binary Search-----------------------//
/*Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.*/

const binary_search1 = function (arr, key) {
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

// console.log(search_ceiling_of_a_number([4, 6, 10], 6));
// console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
// console.log(search_ceiling_of_a_number([4, 6, 10], 17));
// console.log(search_ceiling_of_a_number([4, 6, 10], -1));

//-----------------------------------Next Letter LeetCode #744. Find Smallest Letter Greater Than Target-----------------------//
/*Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.*/
const search_next_letter = function (letters, key) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  //console.log(start,letters.length)
  return letters[start % letters.length];
};

// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
//   console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
//   console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))

//-----------------------------------Number Range LeetCode #-----------------------//
/*Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1]. */

const find_range = function (arr, key) {
  result = [-1, -1];
  result[0] = binary_search(arr, key, false);
  if (result[0] !== -1) {
    // no need to search, if 'key' is not present in the input array
    result[1] = binary_search(arr, key, true);
  }
  return result;
};

function binary_search(arr, key, findMaxIndex) {
  let start = 0;
  let end = arr.length - 1;
  let keyIndex = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1; //search ahead to find the last index of 'key'
      } else {
        end = mid - 1; //search behind to find the first index of 'key'
      }
    }
  }
  //console.log(keyIndex)
  return keyIndex;
}

// console.log(find_range([4, 6, 6, 6, 9], 6));
// console.log(find_range([1, 3, 8, 10, 15], 10));
// console.log(find_range([1, 3, 8, 10, 15], 12));

//-----------------------------------Search in a Sorted Infinite Array  LeetCode #-----------------------//
/*Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. 
Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1. */

//Time: O(logN)
//Space: O(1)
class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) return Number.MAX_SAFE_INTEGER;
    return this.arr[index];
  }
}

const search_in_infinite_array = function (reader, key) {
  let start = 0;
  let end = 1;
  while (reader.get(end) < key) {
    newStart = end + 1;
    end += (end - start + 1) * 2;
    //increase to double the bounds size
    start = newStart;
  }

  return binary_search(reader, key, start, end);
};

function binary_search(reader, key, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key < reader.get(mid)) {
      end = mid - 1;
    } else if (key > reader.get(mid)) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

//   var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
//   console.log(search_in_infinite_array(reader, 16))
//   console.log(search_in_infinite_array(reader, 11))
//   reader = new ArrayReader([1, 3, 8, 10, 15])
//   console.log(search_in_infinite_array(reader, 15))
//   console.log(search_in_infinite_array(reader, 200))

//-----------------------------------Minimum Difference Element  LeetCode #-----------------------//
// /*Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’. */

const search_min_diff_element = function (arr, key) {
  // TODO: Write your code here
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[end]) return arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      console.log(start, end);
      return arr[mid];
    }
  }
  if (arr[start] - key < key - arr[end]) {
    return arr[start];
  }
  return arr[end];
};

// console.log(search_min_diff_element([4, 6, 10], 7));
// console.log(search_min_diff_element([4, 6, 10], 4));
// console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
// console.log(search_min_diff_element([4, 6, 10], 17));

//-----------------------------------Bitonic Array Maximum LeetCode #-----------------------//
/*Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. 
Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].*/

const find_max_in_bitonic_array = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] <= arr[mid + 1]) {
      start = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      end = mid;
    }
  }
  // at the end of the while loop, 'start === end'
  return arr[start];
};

//   console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
//   console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
//   console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
//   console.log(find_max_in_bitonic_array([10, 9, 8]))

//-----------------------------------Search Bitonic Array LeetCode #-----------------------//
/*Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically 
decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1. */
const search_bitonic_array = function (arr, key) {
  const maxIndex = findMax(arr);
  const keyIndex = binarySearch(arr, key, 0, maxIndex);
  if (keyIndex !== -1) {
    return keyIndex;
  }
  return binarySearch(arr, key, maxIndex + 1, arr.length - 1);
};

function findMax(arr) {
  let start = 0;
  let end = arr.length - 1;
  let maxIndex = 0;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else if (arr[mid] <= arr[mid + 1]) {
      start = mid + 1;
    }
  }
  return start;
}

const binarySearch = function (arr, key, start, end) {
  isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key === arr[mid]) return mid;

    if (arr[start] < arr[end]) {
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

// console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
// console.log(search_bitonic_array([3, 8, 3, 1], 8));
// console.log(search_bitonic_array([1, 3, 8, 12], 12));
// console.log(search_bitonic_array([10, 9, 8], 10));

//-----------------------------------Search in Rotated Array LeetCode #33. Search in Rotated Sorted Array-----------------------//
/*Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given 
array does not have any duplicates. */

const search_rotated_array = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let maxIndex = -Infinity;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) return mid;

    if (arr[start] <= arr[mid]) {
      //left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        //key > arr[mid]
        start = mid + 1;
      }
    } else {
      //right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

// console.log(search_rotated_array([10, 15, 1, 3, 8], 15));
// console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10));

//-----------------------------------Rotation Count LeetCode #153. Find Minimum in Rotated Sorted Array-----------------------//
/*Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates. */

const count_rotations = function(arr) {
    // TODO: Write your code here
    return -1 ;
  };
  
  
  console.log(count_rotations([10, 15, 1, 3, 8]))
  console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
  console.log(count_rotations([1, 3, 8, 10]))