// /*
// Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
// Example:
// const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
// */

// //input: nested array
// //output: nested array

// //declare function called transpose, accepts one parameter call that array
// //create const variable called output, and assign it to empty array
// //create for loop to iterate through the input array
// //create variable called subArray
// //create another nested loop to iterate through the subArray
// //push the first index into the subArray
// //outside of loop, psuh subArray into output
// //return output

// function transpose(array) {
//   let round = 0;
//   const output = [];
//   while (array[0][round]) {
//     const subArray = [];
//     for (let i = 0; i < array.length; i++) {
//       subArray.push(array[i][round]);
//     }
//     output.push(subArray);
//     round += 1;
//   }
//   return output;
// }

// const twoDimArray = [
//   ["fred", "barney"],
//   [30, 40],
//   [true, false],
// ];
// // console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

// // Challenge 1
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

// // To check if you've completed it, uncomment these console.logs!
console.log(countdown(5));
console.log(countdown(10));

// // Challenge 2
// function sum(array, i = 0, result = 0) {
//   // declearing variable insde the recursion named i , and assgin the value to 0;
//   //base case: if array at index i is undefined, return the result
//   //create a variable named result, and assign it to 0;
//   //reassign result to result plus array at index i
//   //increment the i
//   // return function sum with paramters array and i
//   if (array[i] === undefined) return result;
//   result += array[i];
//   i++;
//   return sum(array, i, result);
// }

// // uncomment these to check your work
// // console.log(sum([1,1,1])); // -> returns 3
// // console.log(sum([1,2,3,4,5,6])); // -> returns 21

// // Challenge 3
// function palindrome(string, i = 0) {
//   // declear a veriable named i inside the recursion, and assgin the value of i to 0;
//   //using the RegEx to combin the string without space and punctuations, and create a variable str to store the value
//   //base case: if i equals to the length of string divied by 2, and round up, we should return true
//   //if str at index i is not euqal to str at index length of string mins 1 and mins i, return false;
//   //increment i by 1
//   // return function palindrome with two paramters str, and i
//   let str = string
//     .replace(/[^\w\s\']|_/g, "")
//     .replace(/\s/g, "")
//     .toLowerCase();

//   if (i === Math.ceil(str.length / 2)) return true;

//   if (str[i] !== str[str.length - 1 - i]) return false;

//   i += 1;
//   return palindrome(str, i);
// }

// // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// // console.log(palindrome("llama mall")); //-> true
// // console.log(palindrome("jmoney")); //-> false

// // Challenge 4

// function isPrime(num, i = 2) {
//   //declear a variable i inside the recursion, and assign the value to 2
//   // if num is smaller than 2, return false
//   // if num module i is equal to 0; return false
//   //increment i
//   //return isPrime(num,i)

//   if (i === num) return true;
//   if (num < 2) return false;
//   if (num % i === 0) return false;
//   return isPrime(num, (i += 1));
// }

// // console.log(isPrime(1)); //-> false
// // console.log(isPrime(2)); //-> true
// // console.log(isPrime(3)); //-> true
// // console.log(isPrime(4)); //-> false

// //Challenge 5
// function pathFinder(obj, arr, i = 0) {
//   //creat variable inside the recursion named index, and assign it to 0
//   //create variable insde the recursion named innerObj, and it is an empty obj
//   //base case: if arr at index i is undefined, return the innerObj
//   // looking for the key, the first element of arr, first, in the obj;
//   //  reassign innerObj it to value of the obj;
//   //increment the i by 1
//   //return pathFinder (innerObj, arr, innerObj, i)

//   if (arr[i] === undefined) return obj;
//   obj = obj[arr[i]];
//   // console.log(obj[arr[i]])
//   i += 1;
//   return pathFinder(obj, arr, i);
// }

// const obj = {
//   first: { second: { third: "finish" } },
//   second: { third: "wrong" },
// };
// const arr = ["first", "second", "third"];
// // console.log(pathFinder(obj, arr));   //-> "finish"

// //Challenge 6
// function flattenRecursively(arr) {
//   //create an empty array named result
//   // loop though the arr
//   //if arr at index i is an array, return function flattenRecursively with arr at index i
//   //if it is not an array, push arr at index i to the empty array result
//   //return result
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(arr[i]);
//       return flattenRecursively(result);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

// //Challenge 7
// function findInOrderedSet(arr, target, mid = Math.ceil(arr.length / 2)) {
//   //create an empty array named newArr

//   //create a variable named mid, assign the value to the round up number of length of arr divide by 2, inside the recursion
//   //if mid equals to 1 and arr ar index mid is not equal to target, return false
//   //if arr at index mid is bigger than target,
//   // push the arr from index 0 to mid to the newArr
//   //return function findInOrderedSet with newArr and target, mid equal to mid divide by 2
//   //else if arr at index mid is smaller than target
//   // push the arr from index at mid+1 to arr with index at the length of array -1
//   //return function findInOrderedSet with newArr and target, mid equal to mid divide by 2
//   //else if the arr at index mid is equal to target; return true
//   // if ( mid === 1 && arr[mid] !== target ) return false;
//   //console.log(arr[mid],newArr)
//   if (arr[mid] > target) {
//     arr = arr.slice(0, mid);
//     // console.log(arr[mid],arr)
//     return findInOrderedSet(arr, target, (mid = Math.ceil(arr.length / 2)));
//   }
//   if (arr[mid] < target) {
//     arr = arr.slice(mid + 1, arr.length);
//     //console.log(arr[mid],arr)
//     return findInOrderedSet(arr, target, (mid = Math.ceil(arr.length / 2)));
//   } //else
//   if (arr[0] === target || arr[mid] === target) return true;
//   else return false;
// }

// // const nums = [1, 4, 6, 7, 9, 17, 45];
// // console.log(findInOrderedSet(nums, 1))
// // console.log(findInOrderedSet(nums, 4));  //-> true
// // console.log(findInOrderedSet(nums, 2));  //-> false
// // console.log(findInOrderedSet(nums, 17))
// // console.log(findInOrderedSet(nums, 18))

// //Challenge 8
// function countWaysToReachNthStair(n) {}

// // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

// //Challenge 9
// function getPermutations(arr) {}

// // console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// // console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// //Challenge 10
// function getRangeBetween(x, y, i = x + 1, newArr = []) {
//   //declearing variable inside the recursion named newArr, which is the empty array
//   //declearing variable inside the recursion named i , assign the value i equal to x plus 1
//   // base case: if i is equal to y, return newArr
//   //if i is smaller than y, push i to the newArr
//   //increment i by 1
//   //return function getRangeBetween (x,y,i,newArr)
//   if (i === y) return newArr;
//   if (i < y) {
//     newArr.push(i);
//   }
//   i += 1;
//   return getRangeBetween(x, y, i, newArr);
// }

// // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

// //Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept
// //   zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a
// //   second time, the returned function will return the second element of the array, and so forth. After returning the last
// //   element of the array, the next invocation will return the first element of the array again, and continue on with the
// //   second after that, and so forth.

// function cycleIterator(array) {
//   // Create a let variable with count
//   // return a function with no argument
//   // create if statement, check if count is less than length of array
//   // increment count by 1
//   // return array at index count
//   // else reassign count to zero
//   // return array at index count
//   let count = 0;
//   let result;
//   return function () {
//     if (count < array.length) {
//       result = array[count];
//       count += 1;
//       return result;
//     } else {
//       count = 0;
//       return array[count];
//     }
//   };
// }

// // /*** Uncomment these to check your work! ***/
// // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// // const getDay = cycleIterator(threeDayWeekend);
// // console.log(getDay()); // => should log 'Fri'
// // console.log(getDay()); // => should log 'Sat'
// // console.log(getDay()); // => should log 'Sun'
// // console.log(getDay()); // => should log 'Fri'

// // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// /*
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// */

// //input: string, output;string
// //create function reverseString has one parameter called string
// //create const called strToArray and assign to evaluted result of calling the splic method on string
// //create const named output, assign it to empty array
// //create for loop, inside the for loop, create a variable called strArray, and assign it to evaluated result of calling on split method on array at index i
// //chain the reverse method,
// //push the strArray to output
// //return strArray

// function reverseString(string) {
//   const strToArray = string.split(" ");
//   console.log(strToArray);
//   const output = [];
//   for (let i = 0; i < strToArray.length; i++) {
//     const reverseStr = strToArray[i].split("").reverse().join("");
//     output.push(reverseStr);
//   }
//   return output.join(" ");
// }

// // console.log(reverseString("This is an example!"));

// // Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument.
// // defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first
// // argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

// function defineFirstArg(func, arg) {
//   // create variable called result
//   // return a function with one param called num
//   // reassign result to evaluated result of invoking func by passing in arg and num
//   // return result

//   let result;
//   return function (num) {
//     result = func(arg, num);
//     return result;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// // const subFrom20 = defineFirstArg(subtract, 20);
// // console.log(subFrom20(5)); // => should log 15
// // console.log(subFrom20(10)); // => should log 15

// // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// /*
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// */

// // declare function filter-list accept 2 parameters, arr and i=0 and arr = []
// // if statement: array at index i equal to undefined, then return empty array arr
// // if statement: type of arr at index i is a number
// // push arr at index i to empty array
// // return function filter_list with array, i increment by 1, arr

// function filter_list(array, i = 0, arr = []) {
//   if (array[i] === undefined) return arr;
//   if (typeof array[i] === "number") {
//     arr.push(array[i]);
//   }
//   return filter_list(array, (i += 1), arr);
// }

// // console.log(typeof 0);
// // console.log(filter_list([1, "a", "b", 0, 15]));

// // CHALLENGE 1
// function createFunction() {
//   return function () {
//     return `hello`;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// // const function1 = createFunction();
// // console.log(function1()); // => should console.log('hello');

// // CHALLENGE 2
// function createFunctionPrinter(input) {
//   return function () {
//     return input;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// // const printSample = createFunctionPrinter('sample');
// // console.log(printSample()); // => should console.log('sample');
// // const printHello = createFunctionPrinter('hello');
// // console.log(printHello()); // => should console.log('hello');

// // CHALLENGE 3
// function outer() {
//   let counter = 0; // this variable is outside incrementCounter's scope
//   function incrementCounter() {
//     counter++;
//     console.log("counter", counter);
//   }
//   return incrementCounter;
// }

// // const willCounter = outer();
// // const jasCounter = outer();

// // Uncomment each of these lines one by one.
// // Before your do, guess what will be logged from each function call.

// // /*** Uncomment these to check your work! ***/
// // willCounter();
// // willCounter();
// // willCounter();

// // jasCounter();
// // willCounter();

// function addByX(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// // const addByTwo = addByX(2);
// // addByTwo(1); // => should return 3
// // addByTwo(2); // => should return 4
// // addByTwo(3); // => should return 5

// // const addByThree = addByX(3);
// // addByThree(1); // => should return 4
// // addByThree(2); // => should return 5

// // const addByFour = addByX(4);
// // addByFour(4); // => should return 8
// // addByFour(5); // => should return 9

// // CHALLENGE 4
// function once(func) {
//   //create a varibale named result.
//   //create a variable named hasBeenCalled and assign the value to false
//   //return the function with one paramter num
//   // if hasBeenCalled is false,
//   // reassgin result equal to evaluated result of invoking function func passing in num
//   //reassign hasBeenCalled to true
//   //return result
//   // else , if hasBeenCalled is true,return result

//   let hasBeenCalled = false;
//   let result;

//   return function (num) {
//     if (hasBeenCalled === false) {
//       result = func(num);
//       hasBeenCalled = true;
//       return result;
//     } else {
//       return result;
//     }
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// // console.log(onceFunc(4));  // => should log 6
// // console.log(onceFunc(10));  // => should log 6
// // console.log(onceFunc(9001));  // => should log 6

// // CHALLENGE 5
// function after(count, func) {
//   // create variable named time, and assign the value to 0
//   // create another variable named result
//   //return function with no paramter
//   // increment the time by 1
//   //if time is smaller than count, return
//   // else , reassign result to the evaluated result of invoking function func
//   //return result
//   let time = 0;
//   let result;
//   return function () {
//     time += 1;
//     if (time < count) return;
//     else {
//       result = func();
//     }
//     return result;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// // afterCalled(); // => nothing is printed
// // afterCalled(); // => nothing is printed
// // afterCalled(); // => 'hello' is printed

// // CHALLENGE 6  *********************
// // function delay(func, wait) {
// //   return function () {
// //   setTimeout(func, wait)
// //   }
// // }

// // CHALLENGE 7
// function rollCall(names) {
//   // create a variable named i, and assign it to 0
//   //return funtion with no paramter
//   //increment i by 1
//   //if i is smaller than the length of names -1; return names at index i
//   // else return Everyone accounted for

//   let i = 0;
//   let result;
//   return function () {
//     if (i < names.length) {
//       result = names[i];
//       i += 1;
//       return result;
//     }

//     return "Everyone accounted for";
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// // console.log(rollCaller()); // => should log 'Victoria'
// // console.log(rollCaller()); // => should log 'Juan'
// // console.log(rollCaller()); // => should log 'Ruth'
// // console.log(rollCaller()) // => should log 'Everyone accounted for'

// // CHALLENGE 8
// function saveOutput(func, magicWord) {
//   // create const variable named obj,and assign the value to empty obj
//   //create variable named result;
//   //return function with one parameter named num
//   //if num is not stickly equal to magicword,
//   //reassign result to the evaluated result of invoking function func passing in num
//   // assign the key of the obj to num, and the value of obj would be result
//   //return result
//   //else : if num is stickly equal to magicword
//   //return obj

//   const obj = {};
//   let result;
//   return function (num) {
//     if (num !== magicWord) {
//       result = func(num);
//       obj[num] = result;
//       return result;
//     } else return obj;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function (num) {
//   return num * 2;
// };
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// // console.log(multBy2AndLog(2)); // => should log 4
// // console.log(multBy2AndLog(9)); // => should log 18
// // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// //----------------------------------------------------

// //Challenge 11 Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments
// // the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that
// // contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

// function dateStamp(func) {
//   //create const named obj assign it to the empty obj;
//   //return fuction with one parameter num;
//   //create the key, date, in the obj, and assign the value to todays date
//   //create another key, output, in the obj, and assign the value to the evaluated result of invoking function func passing in num
//   // return obj
//   const obj = {};
//   return function (num) {
//     obj.date = new Date();
//     obj.output = func(num);
//     return obj;
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// // Challenge 12
// // Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When
// // two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned
// // function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second
// // strings (of those saved pairs).

// function censor() {
//   // create const obj, assign it to the empty obj;
//   // create const str, assign it to the empty str;
//   //return function with two parameters named str1 and str2
//   //if both str1 and str2 are true
//   // the key of the obj will become the str1, and assign the value to the obj to str2
//   // return;
//   //if str2 is stickly equals to undefined
//   //create a for loop for the obj
//   //create a for loop for the str1
//   //if the key of the obj is stickly equal to str1 at index i, reassign str to str plus the value of obj
//   //else reassign str to str plus str1 at index i,
//   //return str

//   const obj = {};
//   return function (str1, str2) {
//     if (str1 && str2) {
//       obj[str1] = str2;
//     }
//     //console.log(obj)
//     if (!str2) {
//       for (let key in obj) {
//         str1 = str1.replace(key, obj[key]);
//       }
//       return str1;
//     }
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// // CHALLENGE 13

// // There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which
// // accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

// function createSecretHolder(secret) {}

// // /*** Uncomment these to check your work! ***/
// // obj = createSecretHolder(5)
// // obj.getSecret() // => returns 5
// // obj.setSecret(2)
// // obj.getSecret() // => returns 2

// // CHALLENGE 14

// // Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

// function callTimes() {}

// // /*** Uncomment these to check your work! ***/
// // let myNewFunc1 = callTimes();
// // let myNewFunc2 = callTimes();
// // myNewFunc1(); // => 1
// // myNewFunc1(); // => 2
// // myNewFunc2(); // => 1
// // myNewFunc2(); // => 2

// // CHALLENGE 15

// // Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will
// // return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will
// // return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.

// function russianRoulette(num) {}

// // /*** Uncomment these to check your work! ***/
// // const play = russianRoulette(3);
// // console.log(play()); // => should log 'click'
// // console.log(play()); // => should log 'click'
// // console.log(play()); // => should log 'bang'
// // console.log(play()); // => should log 'reload to play again'
// // console.log(play()); // => should log 'reload to play again'

// // CHALLENGE 16

// // Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all).
// //  When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate
// //     numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned
// //     function is invoked with no arguments before any numbers are passed in, then it should return 0.
// function average() {}

// // /*** Uncomment these to check your work! ***/
// // const avgSoFar = average();
// // console.log(avgSoFar()); // => should log 0
// // console.log(avgSoFar(4)); // => should log 4
// // console.log(avgSoFar(8)); // => should log 6
// // console.log(avgSoFar()); // => should log 6
// // console.log(avgSoFar(12)); // => should log 8
// // console.log(avgSoFar()); // => should log 8

// // CHALLENGE 17

// // Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned
// // function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements
// // (of the same sub-array). Otherwise, the returned function should return false.

// function makeFuncTester(arrOfTests) {}

// // /*** Uncomment these to check your work! ***/
// // const capLastTestCases = [];
// // capLastTestCases.push(['hello', 'hellO']);
// // capLastTestCases.push(['goodbye', 'goodbyE']);
// // capLastTestCases.push(['howdy', 'howdY']);
// // const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// // const capLastAttempt1 = str => str.toUpperCase();
// // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// // console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// // console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// // CHALLENGE 18

// // Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function
// // will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed
// // into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed
// // into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after
// // (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing
// // to undo'.

// function makeHistory(limit) {}

// // /*** Uncomment these to check your work! ***/
// // const myActions = makeHistory(2);
// // console.log(myActions('jump')); // => should log 'jump done'
// // console.log(myActions('undo')); // => should log 'jump undone'
// // console.log(myActions('walk')); // => should log 'walk done'
// // console.log(myActions('code')); // => should log 'code done'
// // console.log(myActions('pose')); // => should log 'pose done'
// // console.log(myActions('undo')); // => should log 'pose undone'
// // console.log(myActions('undo')); // => should log 'code undone'
// // console.log(myActions('undo')); // => should log 'nothing to undo'

// // CHALLENGE 19

// /*Inspect the commented out test cases carefully if you need help to understand these instructions.

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function.
// The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.

// On the FIRST invocation of the PLAYER function, it wilsl return the sum of the two numbers passed into the DEALER function.
// On the SECOND invocation of the PLAYER function, it will return either
// 1. the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function,
// IF that sum is 21 or below, OR

// 2. the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!'
// output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// 1. the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// 2. he string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue
// on to give the next sum with the next number in the array, and so forth.

// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array
// after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
// */

// function blackjack(array) {}

// // /*** Uncomment these to check your work! ***/

// // /*** DEALER ***/
// // const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// // /*** PLAYER 1 ***/
// // const i_like_to_live_dangerously = deal(4, 5);
// // console.log(i_like_to_live_dangerously()); // => should log 9
// // console.log(i_like_to_live_dangerously()); // => should log 11
// // console.log(i_like_to_live_dangerously()); // => should log 17
// // console.log(i_like_to_live_dangerously()); // => should log 18
// // console.log(i_like_to_live_dangerously()); // => should log 'bust'
// // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// // /*** BELOW LINES ARE FOR THE BONUS ***/

// // /*** PLAYER 2 ***/
// // const i_TOO_like_to_live_dangerously = deal(2, 2);
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// // /*** PLAYER 3 ***/
// // const i_ALSO_like_to_live_dangerously = deal(3, 7);
// // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

// // Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

// // Challenge 1
// function addTwo(num) {
//   return num + 2;
// }

// // To check if you've completed it, uncomment these console.logs!
// // console.log(addTwo(3));
// // console.log(addTwo(10));

// // Challenge 2
// function addS(word) {
//   return word + "s";
// }

// // uncomment these to check your work
// // console.log(addS('pizza'));
// // console.log(addS('bagel'));

// // Challenge 3
// // function map(array, callback) {
// //   const result = [];
// //   for (let i = 0; i< array.length; i++){
// //   result.push(callback(array[i]))
// //   }
// //   return result
// // }

// // console.log(map([1, 2, 3], addTwo));

// // Challenge 4
// function forEach(array, callback) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     result += callback(array[i]);
//   }
//   return result;
// }
// // console.log(forEach([`s`,`d`,`f`,`e`,`f`], addS))
// // see for yourself if your forEach works!

// // Challenge 5
// function mapWith(array, callback) {
//   array.forEach((x) => callback(x));
//   return array;
// }
// // console.log(mapWith([3,4,5], addTwo))

// // Challenge 6
// function reduce(array, callback, initialValue) {
//   //if initialValue doesnot exit, assign initialValue to 0
//   //create a variable named result, and assign it to initialValue;
//   //loop through the array
//   //reassgin result to result + evaluated result of invoking function callback passing in array at index i
//   // return result
//   if (!initialValue) initialValue = 0;
//   let result = initialValue;
//   for (let i = 0; i < array.length; i++) {
//     result += callback(array[i]);
//   }
//   return result;
// }
// //  console.log(reduce([1,2,3],addTwo))

// Challenge 7
function intersection(arrays) {
  //create variable named initial, assign it to the value of arrays.pop()
  //using method arrays.pop
  //create an empty array named firstResult;
  //create an empty array named result;
  //loop through the arrays
  // loop through the arrays at index i
  //if initial is included in arrays at index i at index j, push the arrays at index i at index j to firstResult
  // if firstResult is included in arrays at index j

  const obj = {};
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      obj[arrays[i][j]] ? (obj[arrays[i][j]] += 1) : (obj[arrays[i][j]] = 1);
    }
  }
  for (let key in obj) {
    if (obj[key] === arrays.length) {
      result.push(Number(key));
    }
  }
  return result;
}

// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );
//should log: [5, 15]

// Challenge 8h
function union(arrays) {
  // declare empty array named result;
  // loop through the arrays
  // loop through the elements of arrays
  // if element at index i is not includes in result, push element at index i into result
  //return result

  const result = [];
  for (let element of arrays) {
    for (let i = 0; i < element.length; i++) {
      if (!result.includes(element[i])) {
        result.push(element[i]);
      }
    }
  }
  return result;
}

// console.log(
//   union([
//     [5, 10, 15],
//     [15, 88, 1, 5, 7],
//     [100, 15, 10, 1, 5],
//   ])
// );
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  //declear empty obj named obj
  //loop through array1
  // if the evaluated result of inovking function callback passing in array1 at index i is strictly equals to array2 at index i,
  //then the key of the obj would be array1 at index i and the corresponding value would array2 at index i
  // return obj

  const obj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }
  return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  // declare empty obj named obj;
  // declare an empty array named arr;
  // loop through the arrVals
  // loop through arrCallbacks
  // push the result of evlated result of invoking function arrCallbacks at index i passing in arrVals at index i
  // the key of the obj should be arrVals at index i , and the value of the obj  is the arr
  //return obj

  const obj = {};

  for (let i = 0; i < arrVals.length; i++) {
    const arr = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      arr.push(arrCallbacks[j](arrVals[i]));
      console.log(arrCallbacks[j](arrVals[i]));
      obj[arrVals[i]] = arr;
    }
  }
  return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  //create an empty obj named newObj;
  //loop through the obj;
  //if the evluated result of invoking function callback passing in the key is stictly equal to the value of the obj;
  //assign the key of newObj to the key of obj, and the value of the newObj to value of obj
  //return newObj

  const newObj = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? (odd += 1) : (even += 1);
  }
  if (odd > even) return true;
  else return false;
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  // create an empty array named withS
  // create an empty array name withoutS
  // Loop through array
  // if statement: if evaluated result of invoking callback passing in array at index i is true
  // push array at index i to array withS
  // else push to array withoutS
  // create an array named result assign it to array withS to concat with array withoutS
  // return result
  const withS = [];
  const withoutS = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      withS.push(array[i]);
    } else {
      withoutS.push(array[i]);
    }
  }
  const result = withS.concat(withoutS);
  return result;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
//['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  //create an empty object named obj;
  //loop through the array
  //the result of invoking function callback passing in array at index i, this would be the key variable in the obj,
  //if the value of the corrosponding key in obj doesnot exist, we will push the key into an empty array
  // if it is already exist, push the key into the existing array
  //return obj

  const obj = {};
  for (let element of array) {
    if (!obj[callback(element)]) {
      obj[callback(element)] = [element];
    } else {
      obj[callback(element)].push(element);
    }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  //create an empty array named arr
  //loop through the obj
  //if the evoluated result of invoking function callback passing in obj with variable key is true, push the key into the empty arr
  //return arr

  const arr = [];
  for (let key in obj) {
    if (callback(obj[key])) {
      arr.push(key);
    }
  }
  return arr;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  // declare variable named firstResult, assign it to the result of invoking function func1 passing in value
  // declare variable named firstResultFinal, assign it to the result of invoking function func2 passing in firstResult;
  //declare variable named secondResult, assign it to the result of invoking function func2 passing in value
  //declare variable named secondResultFinal, assign it to the result of invoking function func1 passing in secondResult;
  //if firstResultFinal is stictly equals to secondResultFinal, return true
  //else return false

  let firstResult = func1(value);
  let firstResultFinal = func2(firstResult);
  let secondResult = func2(value);
  let secondResultFinal = func1(secondResult);

  if (firstResultFinal === secondResultFinal) return true;
  else return false;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  //input: obj,func
  //output: obj
  //create an empty object called obj
  //loop through obj
  // if statement: if evaluated result of invoking function cb, passing in key, is strictly equals to the
  // value of obj with key variable is true
  // store both the key and value into obj
  // return obj
  const object = {};
  for (let key in obj) {
    if (callback(key) === obj[key]) {
      // assign the value of object at key variable to the result of passing in key to callback
      object[key] = callback(key);
    }
  }
  return object;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating
// should return the percentage of functions from the array that return true when the value is used as input.

// Challenge 19
function rating(arrOfFuncs, value) {
  // create a variable named trueResult and assign it to zero
  // loop through arrOfFuncs
  // if statement: result of invoking arrOfFuncs at index 1 passing in value is true
  // reassign trueResult to trueResult + 1
  // store trueResult divide by the length of array * 100 into a variable called result
  // return result
  let trueResult = 0;
  for (let element of arrOfFuncs) {
    if (element(value)) {
      trueResult += 1;
    }
  }
  const result = (trueResult / arrOfFuncs.length) * 100;
  return result;
  // return trueResult / arrOfFuncs.length * 100
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
// function combineOperations(startVal, arrOfFuncs) {}

// function add100(num) {
//   return num + 100;
// }

// function divByFive(num) {
//   return num / 5;
// }

// function multiplyByThree(num) {
//   return num * 3;
//}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
// function myFunc(array, callback) {}

// const numbers = [2, 3, 6, 64, 10, 8, 12];
// const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
// function myForEach(array, callback) {}

// let sum = 0;

// function addToSum(num) {
//   sum += num;
// }

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6

/*
Declare a function "itemRetriever" that returns a function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two arguments (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.

// const favoriteAuthors = [
//   { name: 'Earnest Hemingway', age: 50, genre: 'Classics' },
//   { name: 'Agatha Christie', age: 57, genre: 'Romance' },
//   { name: 'J.K. Rowling', age: 26, genre: 'Fantasy' },
//   { name: 'Steven King', age: 85, genre: 'Horrors' },
// ];

// const nextAuthor = itemRetriever(favoriteAuthors, 'name');
// console.log(nextAuthor()) //-> 'Earnest Hemingway'
// console.log(nextAuthor()) //-> 'Agatha Christie'
// console.log(nextAuthor()) //-> ''J.K. Rowling'
// console.log(nextAuthor()) //-> 'Steven King'

const nextAuthorsAge = itemRetriever(favoriteAuthors, 'age');
console.log(nextAuthorsAge()) //-> 50
console.log(nextAuthorsAge()) //-> 57

const nextAuthorsGenre = itemRetriever(favoriteAuthors, 'genre');
console.log(nextAuthorsGenre()) //-> Classics
console.log(nextAuthorsGenre()) //-> Romance
*/

//input: array of objs, str
//output: string

//declare function itemRetriever takes two parameters array, and str
//declare a variable named result,
// declare a variable named count and assign it to 0
// return function with no parameter

//reassign result to array at index count, accessing the value of str in obj
//increment the count by 1
// return result

function itemRetriever(array, str) {
  let result;
  let count = 0;
  return function () {
    result = array[count][str];
    count += 1;
    return result;
  };
}

//input: array of objs, 'key'
//output: str or num
//declare function itemRetriever takes arrays of objs and key

// function itemRetriever(objs, key) {
//   let index = 0;
//   return function () {
//     const currentObjs = objs[index];
//     index += 1;
//     return currentObjs[key];
//   };
// }

//declare index variable , assign to 0
// return array of objs at the given index and key
// increment the index

/*
Write a function called 'balancedBrackets' that takes a string of text and returns true if the parentheses are balanced and false otherwise.
Non-bracket characters should not affect the logic.Make your solution work for all types of brackets: () [] {}

Examples:
balancedBrackets(" { }    n");                           // -> true
balancedBrackets("hi][  ");                              // -> false
balancedBrackets("[{random words and such}]");           // -> true
balancedBrackets("[The]Rains(In){Spain}");               // -> true
balancedBrackets("[({}Call me Ishmael)]");               // -> true
balancedBrackets("[(]{)}");                              // -> false
balancedBrackets(" gibberish { howdy: partner() }");     // -> true
balancedBrackets(" isThisAFunction?() { notReally();");  // -> false
*/

// INPUT: string
// OUTPUT: boolean

// Declare function named balancedBrackets that accepts a string
function balancedBrackets(str) {
  //create an empty array named arr
  // loop through the str
  //if str at index i is stictly equal to the closing brackets, return false
  // else if we see the opening prentance, push str at index i into the arr
  //else if we see the closing prentance, pop the arr

  // const arr = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
  //     arr.push(str[i]);
  //   } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
  //     arr.pop();
  //   }
  // }
  // if (arr[0] === undefined) return true;
  // return false;

  // balance out brackets in stack
  const paris = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // Store all brackets into stack
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      // console.log(paris[stack[stack.length-1]])
      if (paris[stack[stack.length - 1]] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack[0] === undefined ? true : false;
}

// console.log(balancedBrackets(" { }    n")); // -> true
// console.log(balancedBrackets("hi][  ")); // -> false
// console.log(balancedBrackets("[{random words and such}]")); // -> true
// console.log(balancedBrackets("[The]Rains(In){Spain}")); // -> true
// console.log(balancedBrackets("[({}Call me Ishmael)]")); // -> true
// console.log(balancedBrackets("[(]{)}")); // -> false
// console.log(balancedBrackets(" gibberish { howdy: partner() }")); // -> true
// console.log(balancedBrackets(" isThisAFunction?() { notReally();")); // -> false

/*
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
// const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
*/
//create function rotateGrid takes one parameter arrofArrays
//declare empty array named emptyArr1;
// declare empty array named emptyArr2
// declare empty array named emptyArr3
//loop through the arrOfArrays
// push arrOfArrays at index 0 to emptyArr1
// push arrOfArrays at index 1 to emptyArr2
// push arrOfArrays at index 2 to emptyArr3
//declare am empty array named result, and push emptyArr1.2.3 to the result
// return result

function rotateGrid(arrOfArrays) {
  const emptyArr1 = [];
  const emptyArr2 = [];
  const emptyArr3 = [];

  for (let i = arrOfArrays.length - 1; i >= 0; i -= 1) {
    emptyArr1.push(arrOfArrays[i][0]);
    emptyArr2.push(arrOfArrays[i][1]);
    emptyArr3.push(arrOfArrays[i][2]);
  }

  return [emptyArr1, emptyArr2, emptyArr3];
}
// const sampleGrid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]

/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
Example:
const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/

// Input: One argument (function)
// Output: Either boolean or Object

// Closure?
// Create a function labeled "checkerLogger"
// Accepts one parameter named "argument"
// Create an empty object "obj"
// Make two variables, 'Even' and 'Odd', assigned to 0
// Return anon function that accepts one number
// If number is defined, evaluate the function "argument", passing in the number
// If true, reassign odd to odd+1 and return true
// If false, even is even+1 and return false
// If number is undefined, obj = {'true' : Odd, 'false' : Even}
// Return ^

function checkerLogger(argument) {
  const obj = { true: 0, false: 0 };

  return (...num) => {
    if (num.length !== 0) {
      if (argument(...num)) {
        obj.true += 1;
        return true;
      } else {
        obj.false += 1;
        return false;
      }
    } else {
      return obj;
    }
  };
}
//update
// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); // ->  { true: 0, false: 0 }
// console.log(oddCounter(3)); // -> true
// console.log(oddCounter(2)); // ->  false
// console.log(oddCounter()); // -> { true: 1, false: 1 }

/*
    Create a function "countChar" that takes two arguments (an input string and a target string of length 1).
    "countChar" will return the number of times the target string is found in the input string.
    Example:
    countChar('hello world', 'o'); -> 2
    countChar('javascript', 'j'); -> 1
    Note: Do not use any native JS methods, or loops.
    */

// RECURSION!

// Declare a function 'countChar' with two parameters 'str1' and 'str2'
// Declare a variable index assigned to 0
// Declare a variable count assigned to 0
// Base case: if str1 at index is equal to undefined, return count
// If str1 at index 'index' is equal to str2
// Increment count by 1
// Return countChar, passing in str1, str2, index, and count

function countChar(str1, str2, index = 0, count = 0) {
  if (str1[index] === undefined) return count;
  if (str1[index] === str2) count += 1;

  return countChar(str1, str2, (index += 1), count);
}

// console.log(countChar('hello world', 'o')); // -> 2
// console.log(countChar('javascript', 'j')); // -> 1
// update

function makePerson(name, age) {
  // add code here'
  const newUser = Object.create(null);
  newUser.name = name;
  newUser.age = age;
  return newUser;
}

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor("Mike", 30);

// add code here
// mike.introduce = function () {console.log(`Hi, my name is ${this.name}`)}

// Uncomment this line to check your work!
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("hello");
  }
}

// add code here
class DeveloperClass extends PersonClass {
  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}
// const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); // -> Logs 'Hello World, my name is Thai'

//updates

for (let i = 0; i < 4; i++) {
  console.log(i);
  i++;
  console.log(i);
}

// Creates a clone of an object.
// const users = [{ user: "barney" }, { user: "fred" }];
// const shallowClone = clone(users);
// console.log(shallowClone[0] === users[0]); // → true
function clone(value) {
  // CODE HERE
  const newArr = [];
  for (let key in value) {
    newArr[key] = value[key];
  }
  return newArr;
}

// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  // CODE HERE
  let sum = 0;
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    for (let key in collection) {
      sum++;
    }
    return sum;
  }
}

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
  // CODE HERE
  if (array.length === 0) return undefined;
  return array[0];
}

// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
  // CODE HERE
  const newArr = [];
  if (n === undefined) {
    n = 1;
  }
  if (n > array.length - 1) return [];
  for (let i = n; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
  // CODE HERE
  const arr = [];
  if (n === undefined) n = 1;
  if (n === 0) return [];
  if (n > array.length) return array;
  for (let i = 0; i < n; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(array, key) {
  // CODE HERE
  const arr = [];
  for (let element of array) {
    arr.push(element[key]);
  }
  return arr;
}

function reverseWords(str) {
  const arr = str.split(/(\s+)/);
  const newArr = [];
  console.log(arr);
  for (let element of arr) {
    for (let i = element.length - 1; i >= 0; i--) {
      newArr.push(element[i]);
    }
  }
  let result = newArr.join("");
  return result;
}
console.log(reverseWords("This is an example!"));

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  if (arrayOfSheep === null || arrayOfSheep.length === undefined) return no;
  let count = 0;
  for (let element of arrayOfSheep) {
    if (element === true) {
      count += 1;
    }
  }
  return count;
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let RNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      RNA += "U";
    } else {
      RNA += dna[i];
    }
  }
  return RNA;
}

function SeriesSum(n) {
  // Happy Coding ^_^
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

function solution(str, ending) {
  console.log(str[0]);
  let left = str.length - ending.length;
  let right = 0;
  while (left < str.length) {
    if (str[left] !== ending[right]) {
      left += 1;
    } else {
      left += 1;
      right += 1;
    }
  }

  if (left === str.length && right === ending.length) return true;
  else {
    return false;
  }
}
// console.log(solution("abcde", "cde"));
// console.log(solution("abcde", "abc"));

function DNAStrand(dna){
  //your code here
  let result = "";
  for（let i=0; i<dna.length; i++) {
    console.log(dna[i])
     if (dna[i] === "A") {
       result += "T"
     } else if (dna[i] === "T") {
       result += "A"
     } else if (dna[i] === "G") {
       result += "C"
     } else if (dna[i] === "C") {
       result += "G"
     }
  }
  return result
}