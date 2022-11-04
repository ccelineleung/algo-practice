const testStr = `{
    life 1
    olajuwon {  
        jobs{
            ...Frags  10.5
            life{
                ...Celine  12
                haha  6
            }
        }
      }
    }

    fragment Frags on Jobs{
      title{
        soth  6
      }
      description 4.5
    }

    
    fragment Celine on Jobs{  
        titl  6
        description  6
    }`;
  
    // const testStr1 = `{
    //     life 1
    //     olajuwon {
    //         jobs{
    //             title{
    //               soth  6
    //             }
    //             description  4.5
    //             life{
    //               titl  6
    //               description  6
    //               haha  6
    //             }
    //         }
    //       }
    //     }
      
    //     `;
  const calcCost2 = (str) => {
    let firstBracket, lastBracket;
    let fragsObj = {};
  
    let query = str.slice(0, str.indexOf("fragment"));
    let fragments = str.slice(str.indexOf("fragment"));
  
    let fragName;
  
    const splitFrags = fragments.split("fragment");
    console.log(splitFrags);
    splitFrags.forEach((line) => {
      if (line === "") return;
  
      //to find the index of the  '{' '}', and store it to bracksCache
      let bracksCache = {};
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "{" || line[i] === "}") {
          if (!bracksCache[i]) bracksCache[i] = i;
        }
      }
      console.log(bracksCache);
      const bracksIndices: number[] = Object.values(bracksCache);
      console.log(bracksIndices);
      firstBracket = Math.min(...bracksIndices);
      lastBracket = Math.max(...bracksIndices);
      console.log(firstBracket, lastBracket);
      let fragmentName = line.slice(1, 5);
      console.log(fragmentName);
      if (!fragsObj[fragmentName])
        fragsObj[fragmentName] = line.slice(firstBracket + 1, lastBracket);
    });
  
    console.log(fragsObj);
  
    const splitQuery = query.split("\n");
    console.log(splitQuery)
    splitQuery.forEach((line, index) => {
      if (line.includes("...")) {
        let currIndex = line.indexOf(".");
        fragName = line.slice(currIndex + 3, currIndex + 7);
        console.log(fragName);
        for (let i = 0; i < splitFrags.length; i++) {
          if (splitFrags[i] !== "") {
            if (splitFrags[i].includes(fragName)) {
              splitQuery[index] = fragsObj[fragName];
            }
          }
        }
      }
    });
    console.log(splitQuery);
    let mapped = splitQuery.map(el => {
      if (el.includes('\n')) {
        el = el.split('\n')
        console.log(el)
        return el
      }
      console.log(el)
      return el
    })
    mapped = mapped.flat(Infinity)
  
    console.log(mapped)
  
    // const totalQuery = splitQuery.join("");
    // console.log(totalQuery);
    // return totalQuery;
    return mapped
  };
  
  const calcCostReal = (split, depthFactor, costLimit) => {
    let costSum: number = 0,
      depthLvl: number = 1,
      withinLimit: Boolean;
    // const split = query.split("\n");
    for (let i = 1; i < split.length - 1; i++) {
      if (split[i] === "") {
        continue;
      } else if (split[i].includes("{")) {
        depthLvl += 1;
      } else if (!split[i].includes("{") && !split[i].includes("}") ) {
        if (depthLvl === 1) costSum += 1;
        else {
            console.log(costSum)  //1,7,11.5 ,17.5 ,23.5, 29.5
          costSum += 1 * depthLvl * depthFactor;
          console.log(costSum) 
        }
      } else if (split[i].includes("}")) {
        depthLvl -= 1;
      }
    }
    // check for whether the query is within the limit
    costSum < costLimit ? (withinLimit = true) : (withinLimit = false);
    return {
      costSum: costSum,
      withinLimit: withinLimit,
    };
  };
  
  console.log(calcCostReal(calcCost2(testStr), 1.5, 100));
//   console.log(calcCostReal(testStr1, 1.5, 100));