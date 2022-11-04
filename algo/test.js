// function depthLimit(str, num) {
//   const storage = [];
//   let depthNow = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '{') {
//       storage.push(str[i]);
//     } else if (str[i] === '}') {
//       //depthNow += 1
//       if (storage[storage.length - 1] === '{') {
//         depthNow = Math.max(storage.length, depthNow);
//         storage.pop();
//       }
//     }
//   }
//   if (depthNow - 1 > num) {
//     return `exceeds maximum operation depth of ${num}`;
//   } else {
//     return 'PASSED';
//   }
// }

// const string = `{
//     hello  1
//     user {
//       username  1.5
//       firstLetterOfUsername {
//         firstLetterOfUsername   1.5*2
//       }
//       dsairstLetterOfUsername {
//         firstLetterOfUsername {
//          second                  1.5*2*2
//         }
//         firstLetterOfUsername {
//             name                 1.5*2*2
//             second {
//                 dsadas {
//                     dsadsa       1.5*2*2*2*2
//                 }
//             }
//            }
//       }
//     }
//   }`;

//   function costLimitor (str, num) {
//     let count = 1;
//     // string.split('\n')
//     // for (i=0; i < str.length; i++) {
//     //     if ()
//     // }
//   }

// // console.log(depthLimit(string, 2));
// // console.log(depthLimit(string, 5));

// console.log(string.split('\n'));

// const query231 = `
//     user {
//       age        1 * (1 * 1.5)
//       friends {
//         user {
//           name   1 * (3 * 1.5)
//         }
//         age      1 * (2 * 1.5)
//       }
//       posts {
//         date    1 * (2 * 1.5)
//       }
//     }
// `
const query1 = ` {
    user {
      age    1*1*1.5
      friends {  
        user {
          name     1*3*1.5
        }
        age     1*2*1.5
      }
      posts {
        date      1*2*1.5
      }
    }
}
`;

const calcCost = (query, depthFactor) => {
  let costSum = 0,
    depthLvl = 0;
  const split = query.split('\n');
  console.log(split);
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '') continue;
    if (split[i].includes('{')) {
      depthLvl += 1;
      console.log(depthLvl);
    } else if (!split[i].includes('{') && !split[i].includes('}')) {
      //   depthFactor = 1;
      costSum += 1 * depthLvl * depthFactor;
    } else if (split[i].includes('}')) {
      depthLvl -= 1;
    }
  }
  console.log(depthLvl, costSum);
  return costSum;
};

console.log(calcCost(query1, 1.5));

//
// const calcCost = (query, depthFactor) => {
//   let costSum = 0,
//     depthLvl = 0;
//   const split = query.split('\n');
//   console.log(split);
//   console.log(split.length);
//   for (let i = 1; i < split.length; i++) {
//     if (split[i - 1].includes('{')) {
//       depthLvl += 1;

//       if (!split[i].includes('{')) {
//         costSum += 1 * depthLvl * depthFactor;
//         console.log(costSum);
//       }
//     //   else {
//     //     continue;
//     //   }
//     } else if (split[i - 1].includes('}')) {
//       depthLvl -= 1;
//       costSum += 1 * depthLvl * depthFactor;
//     } else {
//       continue;
//     }
//     console.log(costSum);
//     return costSum;
//   }
