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
