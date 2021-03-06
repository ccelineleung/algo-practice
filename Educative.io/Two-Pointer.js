// --------------PAIR WITH TARGET SUM-------------------------//
const pair_with_target_sum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < target_sum) {
      left++;
    } else if (arr[left] + arr[right] > target_sum) {
      right--;
    } else {
      return [left, right];
    }
  }
};
// console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// --------------REMOVE DUPLICATES-------------------------//
const remove_duplicates = function (arr) {
  let i = 0;
  let nextNonDuplicate = 1;

  if (arr.length === 0) return 0;
  for (
    let nextNonDuplicate = 1;
    nextNonDuplicate < arr.length;
    nextNonDuplicate++
  ) {
    if (arr[i] !== arr[nextNonDuplicate]) {
      i++;
      arr[i] = arr[nextNonDuplicate];
    }
  }
  return i + 1;
};

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

// --------------SQUARING A SORTED ARRAY-------------------------//
const make_squares = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let index = arr.length - 1;
  const squares = Array(arr.length).fill();

  while (left <= right) {
    if (arr[left] ** 2 > arr[right] ** 2) {
      squares[index] = arr[left] ** 2;
      left += 1;
    } else {
      squares[index] = arr[right] ** 2;
      right -= 1;
    }
    index--;
  }
  return squares;
};

// console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
// console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

// --------------TRIPLET SUM TO ZERO-------------------------//
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    console.log(i);
    search_pair(arr, -arr[i], i + 1, triplets);
  }
  return triplets;
}

function search_pair(arr, targetSum, left, triplets) {
  console.log(targetSum);
  console.log(left);
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left += 1;
      right -= 1;

      // while (left < right && arr[left] === arr[left-1]){
      //     left += 1
      // }
      // while (left < right && arr[right] === arr[right+1]) {
      //     right -= 1;
      // }
    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

//   console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
//  console.log(search_triplets([-5, 2, -1, -2, 3]));

// --------------TRIPLET SUM CLOSE TO TARGET  Leetcode 16.3Sum Closest -------------------------//

const triplet_sum_close_to_target = function (arr, targetSum) {
  arr.sort((a, b) => a - b);
  let sum = arr[0] + arr[1] + arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum < targetSum) {
        left += 1;
      } else {
        right -= 1;
      }
      if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - sum)) {
        sum = currentSum;
      }
    }
  }
  return sum;
};
// console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

// --------------TRIPLET WITH SMALLER SUM  Leetcode # 259. 3Sum Smaller-------------------------//
const triplet_with_smaller_sum = function (arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return count;
};
// console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
// console.log(triplet_with_smaller_sum([-2,0,1,3], 2));
// console.log(triplet_with_smaller_sum([2,0,0,2,-2], 2));

// --------------Subarrays with Product Less than a Target  Leetcode # 713. Subarray Product Less Than K----????---------------------//

const find_subarrays = function (arr, target) {
  result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (arr[i] < target) {
      result.push([arr[i]]);
    }
    while (left < right) {
      if (arr[i] * arr[left] < target) {
        result.push([arr[i], arr[left]]);
        left += 1;
      } else if (arr[i] * arr[left] * arr[right] <= target) {
        result.push([arr[i], arr[left], arr[right]]);
        left += 1;
      } else if (arr[i] * arr[left] * arr[right] > target) {
        right -= 1;
      }
    }
  }

  return result;
};
//   console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));
// console.log(find_subarrays([10,5,2,6], 100))

// --------------Dutch National Flag Problem  Leetcode # ---------------------//
const dutch_flag_sort = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i < high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high -= 1;
    }
  }
};
// let arr = [1, 0, 2, 1, 0];
// dutch_flag_sort(arr);
// console.log(arr);

// arr = [2, 2, 0, 1, 2, 0];
// dutch_flag_sort(arr);
// console.log(arr);

// --------------Quadruple Sum to Target  Leetcode # 18. 4Sum---------------------//
const search_quadruplets = function (arr, target) {
  quadruplets = [];
  if (arr.length < 4) return quadruplets;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum === target) {
          quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
          left += 1;
          right -= 1;
          while (left < right && arr[left] === arr[left - 1]) {
            left += 1;
          }
          while (left < right && arr[right] === arr[right + 1]) {
            right -= 1;
          }
        } else if (sum < target) {
          left += 1;
        } else if (sum > target) {
          right -= 1;
        }
      }
    }
  }
  return quadruplets;
};

// console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
// console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
// console.log(search_quadruplets([2, 2, 2, 2, 2], 8));

// --------------Comparing Strings containing Backspaces  Leetcode # 844. Backspace String Compare---------------------//

// const backspace_compare = function (str1, str2) {         //NOT TWO POINT WAY
//   const helper = function (str) {
//     const strArr = [];
//     for (let i = 0; i < str.length; i++) {
//       // let left = i+1;
//       if (str[i] !== "#") {
//         strArr.push(str[i]);
//       } else {
//         strArr.pop();
//       }
//     }
//     return strArr.join();
//   };
//   return helper(str1) === helper(str2)
// };

function backspace_compare(str1, str2) {
  let index1 = str1.length - 1;
  let index2 = str2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = getNextIndex(str1, index1);
    let i2 = getNextIndex(str2, index2);
    console.log(i1, i2);
    if (i1 < 0 && i2 < 0) {
      // reached the end of both strings
      console.log(`q`);
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      //reached the end of one of the strings
      console.log(`q`);
      return false;
    }
    if (str1[i1] !== str2[i2]) {
      console.log(str1[i1], str2[i2]); //check if the characters are equal
      return false;
    }
    console.log(`q`);
    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}

function getNextIndex(str, index) {
  let backSpaceCount = 0;
  while (index > 0) {
    if (str[index] === "#") {
      backSpaceCount += 1;
    } else if (backSpaceCount > 0) {
      backSpaceCount -= 1;
    } else {
      console.log(index);
      break;
    }
    index -= 1;
  }
  console.log(str, index);
  return index;
}

// console.log(backspace_compare("xy#z", "xzz#"));
// console.log(backspace_compare("xy#z", "xyz#"));
// console.log(backspace_compare("xp#", "xyz##"));
// console.log(backspace_compare("xywrrmp", "xywrrmu#p"));

// --------------Minimum Window Sort  Leetcode # ---------------------//

const shortest_window_sort = function (arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) {
    //means its the sorted array
    return 0;
  }

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  let subArrayMax = -Infinity;
  let subArrayMin = Infinity;
  for (let i = low; i < high + 1; i++) {
    subArrayMax = Math.max(subArrayMax, arr[i]);
    subArrayMin = Math.min(subArrayMin, arr[i]);
  }

  while (low > 0 && arr[low - 1] > subArrayMin) {
    low -= 1;
  }

  while (high < arr.length - 1 && arr[high + 1] < subArrayMax) {
    high += 1;
  }

  return high - low + 1;
};

console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));
