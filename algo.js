/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

//input: nested array
//output: nested array

//declare function called transpose, accepts one parameter call that array
    //create const variable called output, and assign it to empty array
    //create for loop to iterate through the input array
        //create variable called subArray
        //create another nested loop to iterate through the subArray
            //push the first index into the subArray
        //outside of loop, psuh subArray into output 
    //return output

 function transpose (array) {
   let round = 0;
   const output = [];
   while (array[0][round]) {
       const subArray = [];
       for (let i = 0; i < array.length; i++){
          subArray.push(array[i][round])
       }
       output.push(subArray)
       round += 1;
   }
   return output ;
 }
 
 const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

// Challenge 1
function countdown(n, result =0 ) {
    //decleaing variable inside the recursion named result, and assign the value to 0
  //base case: if n is equal to 0, return result
    //reassgin result to result plue n
    // decrement the n
    //return countdown with two paramteres, n and result
    if ( n === 0) return result;
    result += n
    n--;
    return countdown (n, result)
  }
  
  // To check if you've completed it, uncomment these console.logs!
  // console.log(countdown(5));
  // console.log(countdown(10));
  
  
  // Challenge 2
  function sum(array, i=0, result = 0) {
    
   // declearing variable insde the recursion named i , and assgin the value to 0;
    //base case: if array at index i is undefined, return the result
    //create a variable named result, and assign it to 0;
    //reassign result to result plus array at index i
    //increment the i 
    // return function sum with paramters array and i
    if (array[i] === undefined) return result
    result += array[i]
    i ++ ;
    return sum (array, i, result)
  }
  
  // uncomment these to check your work
   // console.log(sum([1,1,1])); // -> returns 3
   // console.log(sum([1,2,3,4,5,6])); // -> returns 21
  
  
  // Challenge 3
  function palindrome(string, i=0) {
  // declear a veriable named i inside the recursion, and assgin the value of i to 0;
    //using the RegEx to combin the string without space and punctuations, and create a variable str to store the value
    //base case: if i equals to the length of string divied by 2, and round up, we should return true
    //if str at index i is not euqal to str at index length of string mins 1 and mins i, return false;
    //increment i by 1
    // return function palindrome with two paramters str, and i
    let str = string.replace(/[^\w\s\']|_/g, "").replace(/\s/g, '').toLowerCase()
   
    if (i === Math.ceil(str.length/2)) return true;
  
    if (str[i] !== str[str.length - 1 - i]) return false;
    
    i+=1;
    return palindrome (str, i)
  }
  
  // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
  // console.log(palindrome("llama mall")); //-> true
  // console.log(palindrome("jmoney")); //-> false
  
  
  // Challenge 4
  
  function isPrime(num, i=2) {
   //declear a variable i inside the recursion, and assign the value to 2
    // if num is smaller than 2, return false
    // if num module i is equal to 0; return false
    //increment i
    //return isPrime(num,i)
    
    if ( i === num ) return true;
    if ( num < 2) return false
    if (num % i === 0 ) return false;
    return isPrime(num, i+=1)
  }
  
  // console.log(isPrime(1)); //-> false
  // console.log(isPrime(2)); //-> true
  // console.log(isPrime(3)); //-> true
  // console.log(isPrime(4)); //-> false
  
  
  //Challenge 5
  function pathFinder(obj, arr, i=0) {
    //creat variable inside the recursion named index, and assign it to 0
    //create variable insde the recursion named innerObj, and it is an empty obj
    //base case: if arr at index i is undefined, return the innerObj
    // looking for the key, the first element of arr, first, in the obj;
    //  reassign innerObj it to value of the obj;
    //increment the i by 1
    //return pathFinder (innerObj, arr, innerObj, i)
    
    if (arr[i] === undefined) return obj;
    obj = obj[arr[i]];
   // console.log(obj[arr[i]])
    i+=1;
    return pathFinder (obj, arr, i)
  }
  
  const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
  const arr = ["first", "second", "third"];
  // console.log(pathFinder(obj, arr));   //-> "finish"
  
  
  //Challenge 6
  function flattenRecursively(arr) {
    //create an empty array named result
  // loop though the arr
    //if arr at index i is an array, return function flattenRecursively with arr at index i
    //if it is not an array, push arr at index i to the empty array result
    //return result
    let result = [];
    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(arr[i])
        return flattenRecursively(result)
      } else {
        result.push(arr[i])
      }
    }
    return result
  }
  // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
  // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
  
  
  //Challenge 7
  function findInOrderedSet(arr, target, mid = Math.ceil(arr.length / 2) ) {
    //create an empty array named newArr
    
   //create a variable named mid, assign the value to the round up number of length of arr divide by 2, inside the recursion
    //if mid equals to 1 and arr ar index mid is not equal to target, return false
    //if arr at index mid is bigger than target, 
       // push the arr from index 0 to mid to the newArr
       //return function findInOrderedSet with newArr and target, mid equal to mid divide by 2
    //else if arr at index mid is smaller than target
       // push the arr from index at mid+1 to arr with index at the length of array -1
       //return function findInOrderedSet with newArr and target, mid equal to mid divide by 2
    //else if the arr at index mid is equal to target; return true
   // if ( mid === 1 && arr[mid] !== target ) return false;
    //console.log(arr[mid],newArr)
    if (arr[mid] > target) {
      arr = arr.slice(0,mid)
     // console.log(arr[mid],arr)
      return findInOrderedSet(arr, target, mid = Math.ceil(arr.length / 2) )
    } 
      if (arr[mid] < target) {
     arr = arr.slice(mid+1,arr.length)
     //console.log(arr[mid],arr)
      return findInOrderedSet(arr, target, mid = Math.ceil(arr.length / 2))
    } //else 
     if (arr[0] === target || arr[mid] === target) return true
     else return false
  }
   
  
  const nums = [1, 4, 6, 7, 9, 17, 45];
  // console.log(findInOrderedSet(nums, 1))
  // console.log(findInOrderedSet(nums, 4));  //-> true
  // console.log(findInOrderedSet(nums, 2));  //-> false
  // console.log(findInOrderedSet(nums, 17))
  // console.log(findInOrderedSet(nums, 18))
  
  //Challenge 8
  function countWaysToReachNthStair(n) {
  
  }
  
  // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
  // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
  // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
  
  
  //Challenge 9
  function getPermutations(arr) {
  
  }
  
  // console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
  // console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  
  
  //Challenge 10
  function getRangeBetween(x, y,i=x+1, newArr=[]) {
    //declearing variable inside the recursion named newArr, which is the empty array
    //declearing variable inside the recursion named i , assign the value i equal to x plus 1
   // base case: if i is equal to y, return newArr
    //if i is smaller than y, push i to the newArr
    //increment i by 1
    //return function getRangeBetween (x,y,i,newArr)
    if ( i === y) return newArr
    if (i < y) {
      newArr.push(i)
    }
    i += 1;
    return getRangeBetween(x, y,i, newArr)
  }
  
  // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
  // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
  