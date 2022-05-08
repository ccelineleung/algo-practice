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
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]

