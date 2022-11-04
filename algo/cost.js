

const testStr = `{
    life  
    query {
        jobs{
            ...Frags
            life{
                ...Celine
                haha
            }
        }
      }
    }

    fragment Frags on Jobs{
      title {
        somthing 
      }  
      description
    }
    fragment Celine on Jobs{
        title
        description
      }`;

const testStr2 = `{
      life  
      query {
          jobs{
              ...Frags
              life{
                  Celine
                  haha
              }
          }
        }
      }
    
      
      fragment Frags on Jobs{
        title {
          somthing 
        }  
        description
      }`;

const calcCost = (str, depthFactor, costLimit) => {
  let query = str.slice(0, str.indexOf('fragment'));
  let fragments = str.slice(str.indexOf('fragment'));
  const fragDepths = {};

  console.log(fragments);

  const fragsArr = fragments.split('fragment');
  let targetFrag = [];

  console.log(fragsArr);

  let costSum = 0,
    depthLvl = 1,
    withinLimit = false;
  let fragName;

  console.log(query);

  const split = query.split('\n');
  console.log(split);
  for (let i = 1; i < split.length - 1; i++) {
    if (split[i] === '') {
      continue;
    } else if (split[i].includes('{')) {
      depthLvl += 1;
    } else if (
      !split[i].includes('{') &&
      !split[i].includes('}') &&
      !split[i].includes('...') 
     
    ) {
      if (depthLvl === 1) {
        costSum += 1;
        console.log(costSum);
      } else {
        // console.log(depthLvl);
        console.log(costSum);
        costSum += 1 * depthLvl * depthFactor;
        console.log(costSum);
      }
    } else if (split[i].includes('}')) {
      depthLvl -= 1;
    } else if (split[i].includes('...')) {
      //find the current index of '.
      let currIndex = split[i].indexOf('.');
      fragName = split[i].slice(currIndex + 3);

      console.log(depthLvl);

      const calcFragCost = (fragNameStr) => {
        let fragSum = 0;
        let fragDepthLvl = depthLvl;

        console.log(fragDepthLvl);

        for (let i = 0; i < fragsArr.length; i++) {
          if (fragsArr[i].includes(fragNameStr)) {
            // fragCosts[fragNameStr] =
            console.log(fragsArr[i]);
            const current = fragsArr[i].split('\n');
            console.log(current);
            for (let i = 1; i < current.length - 1; i++) {
              console.log(current[i]);
              if (current[i].includes('{')) {
                fragDepthLvl++;
              } else if (current[i].includes('}')) {
                fragDepthLvl--;
              } else if (
                !current[i].includes('{') &&
                !current[i].includes('}')
              ) {
                if (current[i] === ' ') return;
                console.log(`fragSum`, fragSum, `fragDepthLvl`, fragDepthLvl);
                fragSum += fragDepthLvl * depthFactor;
                console.log(fragSum);
              }
            }
          }
        }
        console.log(fragSum);
        costSum += fragSum;
        console.log(costSum);
      };
      calcFragCost(fragName);

      // console.log(fragSum);
      // console.log(depthLvl);
      console.log(fragName);
    }
  }

  // check for whether the query is within the limit
  console.log(costSum);
  return costSum < costLimit ? (withinLimit = true) : (withinLimit = false);
};
console.log(calcCost(testStr, 1.5, 100));
