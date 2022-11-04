const testStr = `{

  life
  query {
      jobs{
          ...Frags
          life{
              haha
          }
      }
  }
  }
  
  fragment Frags on Jobs{
      title
      description
  }
  `


export const depthLimit = (str: string, maxDepth: number): boolean => {
  let query = str.slice(0, str.indexOf("fragment"));
  let fragments = str.slice(str.indexOf("fragment"));
  const fragDepths = {};

  const fragsArr: string[] = fragments.split("fragment");

  let targetFrag: string[] = [];

  const calcDepth = (string: string) => {
    let maxDepthSoFar: number = 0;
    let currDepth: number = 0;
    let fragName: string;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "{") {
        currDepth += 1;
      } else if (string[i] === "}") {
        maxDepthSoFar = Math.max(currDepth, maxDepthSoFar);
        currDepth -= 1;
      } else if (string[i] === "." && string[i + 1] !== ".") {
        fragName = string.slice(i + 1, i + 3);

        let fragVal;
        for (let key in fragDepths) {
          if (key.includes(fragName)) {
            fragVal = fragDepths[key];
          }
        }
        currDepth += fragVal;
        maxDepthSoFar = Math.max(currDepth, maxDepthSoFar);
        currDepth -= fragVal;
      }
    }
    return maxDepthSoFar;
  };

  fragsArr.forEach((frag) => {
    if (frag !== "") {
      targetFrag.push(frag);
      fragDepths[frag] = calcDepth(frag);
    }
  });

  if (calcDepth(query) > maxDepth) return false;
  else return true;
};