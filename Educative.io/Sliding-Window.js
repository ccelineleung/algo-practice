// function find_averages_of_subarrays(k, arr) {
//     const result = [];
//   for (let i=0; i<arr.length - k + 1; i++) {
//     let sum = 0;
//     for (let j=i; j< i+k; j++) {
//         sum += arr[j]
//     }
//     result.push(sum/k)
//   }
//  return result
// }

//   const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
//   console.log(`Averages of subarrays of size K: ${result}`);

function find_averages_of_subarrays(k, arr) {
  const result = [];
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    console.log(sum);
    if (right >= k - 1) {
      result.push(sum / k);
      sum -= arr[left];
      left += 1;
    }
  }
  return result;
}

const max_sub_array_of_size_k = function (k, arr) {
  //  const result = [];
  let left = 0;
  let sum = 0;
  let maxSum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (right >= k - 1) {
      // result.push (sum);
      // sum -= arr[left];
      // left += 1;
      maxSum = Math.max(maxSum, sum);
      sum -= arr[left];
      left += 1;
    }
  }
  // let max = Math.max(...result)
  return maxSum;
};

// console.log(
//   `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
//     3,
//     [2, 1, 5, 1, 3, 2]
//   )}`
// );
// console.log(
//   `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
//     2,
//     [2, 3, 4, 1, 5]
//   )}`
// );

const smallest_subarray_sum = function (s, arr) {
  let start = 0;
  let minLength = Infinity;
  let sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    console.log(sum);
    while (sum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= arr[start];
      start += 1;
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
};

// console.log(
//   `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`
// );
// console.log(
//   `Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`
// );
// console.log(
//   `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`
// );

// console.log(
//     `Length of the longest substring: ${longest_substring_with_k_distinct(
//       "cbbebi",
//       3
//     )}`
//   );

const longest_substring_with_k_distinct = function (str, k) {
  const objFrequency = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    objFrequency[str[end]]
      ? (objFrequency[str[end]] += 1)
      : (objFrequency[str[end]] = 1);

    console.log(objFrequency);

    while (Object.keys(objFrequency).length > k) {
      objFrequency[str[start]] -= 1;
      if (objFrequency[str[start]] === 0) {
        delete objFrequency[str[start]];
      }
      start += 1;
    }
    console.log(maxLength, end - start + 1);
    maxLength = Math.max(maxLength, end - start + 1);
    console.log(maxLength);
  }
  return maxLength;
};

// console.log(
//     `Length of the longest substring: ${longest_substring_with_k_distinct(
//       "cbbebi",
//       3
//     )}`
//   );

const fruits_into_baskets = function (fruits) {
  const fruitTree = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < fruits.length; end++) {
    fruitTree[fruits[end]]
      ? (fruitTree[fruits[end]] += 1)
      : (fruitTree[fruits[end]] = 1);

    console.log(fruitTree);
    while (Object.keys(fruitTree).length > 2) {
      fruitTree[fruits[start]] -= 1;
      if (fruitTree[fruits[start]] === 0) {
        delete fruitTree[fruits[start]];
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

// console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
// console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);

const non_repeat_substring = function (str) {
  const characters = {};
  let start = 0;
  maxLength = 0;
  for (let end = 0; end < str.length; end++) {
    //如果obj里面已经有这个字母了，就更新start的index，看看现在哪个更大
    // console.log(characters)
    if (str[end] in characters) {
      start = Math.max(start, characters[str[end]] + 1);
      // console.log(characters[str[end]],characters[str[end]] + 1)
    } else {
      //如果没有，就在obj里面增加这个key 和她的value（就是index的位置）
      characters[str[end]] = end;
    }
    // console.log(characters)
    maxLength = Math.max(maxLength, end - start + 1);
    //console.log(maxLength)
  }
  return maxLength;
};

// console.log(
//   `Length of the longest substring: ${non_repeat_substring("aabccbb")}`
// );
//  console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

// function length_of_longest_substring(str, k) {
//   const objLetter = {};
//   let start = 0;
//   let maxLength = 0;
//   let maxRepeat = 0;

//   for (let end = 0; end < str.length; end++) {
//     if (str[end] in objLetter) {
//       objLetter[str[end]] += 1;
//     } else {
//       objLetter[str[end]] = 0;
//     }
//     console.log(objLetter);

//     if (end - start + 1 - maxRepeat > k) {
//       objLetter[str[end]] -= 1;
//       start += 1;
//     }

//     maxLength = Math.max(maxLength, end - start + 1);
//   }
//   return maxLength;
// }
// console.log(length_of_longest_substring("aabccbb", 2));
// console.log(length_of_longest_substring("abbcb", 1));
// console.log(length_of_longest_substring("abccde", 1));

const length_of_longest_substring = function (arr, k) {
  const objCount = {};
  let start = 0;
  let maxLength = 0;
  let count = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 1) {
      count += 1;
    }
    if (end - start + 1 - count > k) {
      if (arr[start] === 1) {
        count -= 1;
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

// console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
// console.log(
//   length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
// );

function find_permutation(str, pattern) {
  const patternObj = {};
  let start = 0;
  let match = 0;

  for (let i = 0; i < pattern.length; i++) {
    patternObj[pattern[i]]
      ? (patternObj[pattern[i]] += 1)
      : (patternObj[pattern[i]] = 1);
    // if (!(pattern[i] in patternObj)) {
    //     patternObj[pattern[i]] = 0
    // } 
    //     patternObj[pattern[i]] += 1
    
  }
  console.log(patternObj)

  for (let end = 0; end < str.length; end++) {
    if (str[end] in patternObj) {
        patternObj[str[end]] -= 1;
        if (patternObj[str[end]] === 0) {
            match += 1;
        }
    }
    console.log(match)

    if (Object.keys(patternObj).length === match) return true;

    //shrink the sliding window
    if (end >= pattern.length - 1) {
        let leftChar = str[start];
        start += 1;
        console.log(leftChar)
        if (leftChar in patternObj) {
            if (patternObj[leftChar] === 0) {
                console.log(match)
                match -= 1;
                console.log(patternObj[leftChar],match)
            }
            console.log(patternObj)
            patternObj[leftChar] += 1;
            console.log(patternObj)
        }
    } 
  }
  return false;
}

//console.log(`Permutation exist: ${find_permutation("oidbcaf", "abc")}`);
console.log(`Permutation exist: ${find_permutation("odicf", "dc")}`);
// console.log(`Permutation exist: ${find_permutation("bcdxabcdy", "bcdyabcdx")}`);
// console.log(`Permutation exist: ${find_permutation("aaacb", "abc")}`);
