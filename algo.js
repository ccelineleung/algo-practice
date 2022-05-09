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

function transpose(array) {
  let round = 0;
  const output = [];
  while (array[0][round]) {
    const subArray = [];
    for (let i = 0; i < array.length; i++) {
      subArray.push(array[i][round]);
    }
    output.push(subArray);
    round += 1;
  }
  return output;
}

const twoDimArray = [
  ["fred", "barney"],
  [30, 40],
  [true, false],
];
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

// Challenge 1
function countdown(n, result = 0) {
  //decleaing variable inside the recursion named result, and assign the value to 0
  //base case: if n is equal to 0, return result
  //reassgin result to result plue n
  // decrement the n
  //return countdown with two paramteres, n and result
  if (n === 0) return result;
  result += n;
  n--;
  return countdown(n, result);
}

// To check if you've completed it, uncomment these console.logs!
// console.log(countdown(5));
// console.log(countdown(10));

// Challenge 2
function sum(array, i = 0, result = 0) {
  // declearing variable insde the recursion named i , and assgin the value to 0;
  //base case: if array at index i is undefined, return the result
  //create a variable named result, and assign it to 0;
  //reassign result to result plus array at index i
  //increment the i
  // return function sum with paramters array and i
  if (array[i] === undefined) return result;
  result += array[i];
  i++;
  return sum(array, i, result);
}

// uncomment these to check your work
// console.log(sum([1,1,1])); // -> returns 3
// console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
function palindrome(string, i = 0) {
  // declear a veriable named i inside the recursion, and assgin the value of i to 0;
  //using the RegEx to combin the string without space and punctuations, and create a variable str to store the value
  //base case: if i equals to the length of string divied by 2, and round up, we should return true
  //if str at index i is not euqal to str at index length of string mins 1 and mins i, return false;
  //increment i by 1
  // return function palindrome with two paramters str, and i
  let str = string
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  if (i === Math.ceil(str.length / 2)) return true;

  if (str[i] !== str[str.length - 1 - i]) return false;

  i += 1;
  return palindrome(str, i);
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

// Challenge 4

function isPrime(num, i = 2) {
  //declear a variable i inside the recursion, and assign the value to 2
  // if num is smaller than 2, return false
  // if num module i is equal to 0; return false
  //increment i
  //return isPrime(num,i)

  if (i === num) return true;
  if (num < 2) return false;
  if (num % i === 0) return false;
  return isPrime(num, (i += 1));
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

//Challenge 5
function pathFinder(obj, arr, i = 0) {
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
  i += 1;
  return pathFinder(obj, arr, i);
}

const obj = {
  first: { second: { third: "finish" } },
  second: { third: "wrong" },
};
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
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i]);
      return flattenRecursively(result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

//Challenge 7
function findInOrderedSet(arr, target, mid = Math.ceil(arr.length / 2)) {
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
    arr = arr.slice(0, mid);
    // console.log(arr[mid],arr)
    return findInOrderedSet(arr, target, (mid = Math.ceil(arr.length / 2)));
  }
  if (arr[mid] < target) {
    arr = arr.slice(mid + 1, arr.length);
    //console.log(arr[mid],arr)
    return findInOrderedSet(arr, target, (mid = Math.ceil(arr.length / 2)));
  } //else
  if (arr[0] === target || arr[mid] === target) return true;
  else return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 1))
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false
// console.log(findInOrderedSet(nums, 17))
// console.log(findInOrderedSet(nums, 18))

//Challenge 8
function countWaysToReachNthStair(n) {}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

//Challenge 9
function getPermutations(arr) {}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//Challenge 10
function getRangeBetween(x, y, i = x + 1, newArr = []) {
  //declearing variable inside the recursion named newArr, which is the empty array
  //declearing variable inside the recursion named i , assign the value i equal to x plus 1
  // base case: if i is equal to y, return newArr
  //if i is smaller than y, push i to the newArr
  //increment i by 1
  //return function getRangeBetween (x,y,i,newArr)
  if (i === y) return newArr;
  if (i < y) {
    newArr.push(i);
  }
  i += 1;
  return getRangeBetween(x, y, i, newArr);
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

//Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept
//   zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a
//   second time, the returned function will return the second element of the array, and so forth. After returning the last
//   element of the array, the next invocation will return the first element of the array again, and continue on with the
//   second after that, and so forth.

function cycleIterator(array) {
  // Create a let variable with count
  // return a function with no argument
  // create if statement, check if count is less than length of array
  // increment count by 1
  // return array at index count
  // else reassign count to zero
  // return array at index count
  let count = 0;
  let result;
  return function () {
    if (count < array.length) {
      result = array[count];
      count += 1;
      return result;
    } else {
      count = 0;
      return array[count];
    }
  };
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

//input: string, output;string
//create function reverseString has one parameter called string
//create const called strToArray and assign to evaluted result of calling the splic method on string
//create const named output, assign it to empty array
//create for loop, inside the for loop, create a variable called strArray, and assign it to evaluated result of calling on split method on array at index i
//chain the reverse method,
//push the strArray to output
//return strArray

function reverseString(string) {
  const strToArray = string.split(" ");
  console.log(strToArray);
  const output = [];
  for (let i = 0; i < strToArray.length; i++) {
    const reverseStr = strToArray[i].split("").reverse().join("");
    output.push(reverseStr);
  }
  return output.join(" ");
}

// console.log(reverseString("This is an example!"));

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument.
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first
// argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

function defineFirstArg(func, arg) {
  // create variable called result
  // return a function with one param called num
  // reassign result to evaluated result of invoking func by passing in arg and num
  // return result

  let result;
  return function (num) {
    result = func(arg, num);
    return result;
  };
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15
// console.log(subFrom20(10)); // => should log 15

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
/*
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// declare function filter-list accept 2 parameters, arr and i=0 and arr = []
// if statement: array at index i equal to undefined, then return empty array arr
// if statement: type of arr at index i is a number
// push arr at index i to empty array
// return function filter_list with array, i increment by 1, arr

function filter_list(array, i = 0, arr = []) {
  if (array[i] === undefined) return arr;
  if (typeof array[i] === "number") {
    arr.push(array[i]);
  }
  return filter_list(array, (i += 1), arr);
}

// console.log(typeof 0);
// console.log(filter_list([1, "a", "b", 0, 15]));

// CHALLENGE 1
function createFunction() {
  return function () {
    return `hello`;
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
// console.log(function1()); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function () {
    return input;
  };
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// console.log(printSample()); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// console.log(printHello()); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return function (y) {
    return x + y;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  //create a varibale named result.
  //create a variable named hasBeenCalled and assign the value to false
  //return the function with one paramter num
  // if hasBeenCalled is false,
  // reassgin result equal to evaluated result of invoking function func passing in num
  //reassign hasBeenCalled to true
  //return result
  // else , if hasBeenCalled is true,return result

  let hasBeenCalled = false;
  let result;

  return function (num) {
    if (hasBeenCalled === false) {
      result = func(num);
      hasBeenCalled = true;
      return result;
    } else {
      return result;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  // create variable named time, and assign the value to 0
  // create another variable named result
  //return function with no paramter
  // increment the time by 1
  //if time is smaller than count, return
  // else , reassign result to the evaluated result of invoking function func
  //return result
  let time = 0;
  let result;
  return function () {
    time += 1;
    if (time < count) return;
    else {
      result = func();
    }
    return result;
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6  *********************
// function delay(func, wait) {
//   return function () {
//   setTimeout(func, wait)
//   }
// }

// CHALLENGE 7
function rollCall(names) {
  // create a variable named i, and assign it to 0
  //return funtion with no paramter
  //increment i by 1
  //if i is smaller than the length of names -1; return names at index i
  // else return Everyone accounted for

  let i = 0;
  let result;
  return function () {
    if (i < names.length) {
      result = names[i];
      i += 1;
      return result;
    }

    return "Everyone accounted for";
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// console.log(rollCaller()); // => should log 'Victoria'
// console.log(rollCaller()); // => should log 'Juan'
// console.log(rollCaller()); // => should log 'Ruth'
// console.log(rollCaller()) // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  // create const variable named obj,and assign the value to empty obj
  //create variable named result;
  //return function with one parameter named num
  //if num is not stickly equal to magicword,
  //reassign result to the evaluated result of invoking function func passing in num
  // assign the key of the obj to num, and the value of obj would be result
  //return result
  //else : if num is stickly equal to magicword
  //return obj

  const obj = {};
  let result;
  return function (num) {
    if (num !== magicWord) {
      result = func(num);
      obj[num] = result;
      return result;
    } else return obj;
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
