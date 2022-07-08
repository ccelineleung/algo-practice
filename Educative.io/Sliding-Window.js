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

console.log(
  `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`
);
