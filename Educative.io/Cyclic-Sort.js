// --------------------------Cyclic Sort -------------------//
// const cyclic_sort = function (nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] - 1 !== i) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     } else {
//       i += 1;
//     }
//   }
//   console.log(nums)
//   return nums;
// };

// console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
// console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
// console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);

// --------------------------Find the Missing Number -------------------//
const find_missing_number = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  console.log(nums);
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k) {
      return k;
    }
  }
};

// console.log(find_missing_number([4, 0, 3, 1]));
// console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
// console.log(find_missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// --------------------------Find all Missing Numbers Leetcode #448. Find All Numbers Disappeared in an Array -------------------//
const find_missing_numbers = function (nums) {
  missingNumbers = [];
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }
  //console.log(nums)

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      missingNumbers.push(k + 1);
    }
  }
  return missingNumbers;
};

// console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
// console.log(find_missing_numbers([2, 4, 1, 2]));
// console.log(find_missing_numbers([2, 3, 2, 1]));

// --------------------------Find the Duplicate Number  Leetcode # 287. Find the Duplicate Number-------------------//

const find_duplicate = function (nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
  return null;
};

// console.log(find_duplicate([1, 4, 4, 3, 2]));
// console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
// console.log(find_duplicate([2, 4, 1, 4, 4]));

// --------------------------Find all Duplicate Numbers  Leetcode # 442. Find All Duplicates in an Array-------------------//

const find_all_duplicates = function (nums) {
  duplicateNumbers = [];
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      duplicateNumbers.push(nums[k]);
    }
  }
  return duplicateNumbers;
};

// console.log(find_all_duplicates([3, 4, 4, 5, 5]));
// console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));

// --------------------------Find the Corrupt Pair Leetcode # -------------------//
const find_corrupt_numbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }
  const result = [];
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      result.push(nums[k], k + 1);
    }
  }
  return result;
};

// console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
// console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));

// --------------------------Find the Smallest Missing Positive Number Leetcode # -------------------//
const find_first_smallest_missing_positive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  //console.log(nums);
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== k + 1) {
      return k + 1;
    }
  }
};

// console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
// console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
// console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));

// ------------------------Find the First K Missing Positive Numbers Leetcode # -------------------//
const find_first_k_missing_positive = function (nums, k) {
  missingNumbers = [];
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] <= nums.length && nums[i] > 0 && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  const extraNumbers = new Set();
  for (j = 0; j < nums.length; j++) {
    if (missingNumbers.length < k) {
      if (nums[j] !== j + 1) {
        missingNumbers.push(j + 1);
        extraNumbers.add(nums[j]);
      }
    }
  }
  console.log(extraNumbers);

  let q = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = i + 1;
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    i += 1;
  }
  return missingNumbers;
};

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([-2, -3, 4], 2));
console.log(find_first_k_missing_positive([-5,-3,-2,3,4,6],5))
//-----