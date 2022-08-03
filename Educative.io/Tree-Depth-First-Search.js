class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//------------------------------Binary Tree Path Sum Leetcode #112. Path Sum ---------------------//

//   const has_path = function(root, sum) {
//     if (root === null) return false;
//     // if the current node is a leaf and its value is equal to the sum, we found the path
//     if (root.value === sum && root.left === null && root.right === null) return true;

//     //recursively call to traverse the left and right sub-tree
//     //return true if any of the two recursive call return true
//     return has_path(root.left, sum - root.value) || has_path(root.right, sum- root.value)

//   };

//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(9)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)
//   console.log(`Tree has path: ${has_path(root, 23)}`)
//   console.log(`Tree has path: ${has_path(root, 16)}`)

//------------------------------All Paths for a Sum Leetcode #113. Path Sum II ---------------------//

const find_paths = function (root, sum) {
  if (root === null) return [];
  const result = [];

  const dfs = (node, tempSum = 0, path = []) => {
    path.push(node.value);
    tempSum += node.value;

    if (node.left === null && node.right === null && tempSum === sum) {
      result.push(path);
    }

    if (node.left) dfs(node.left, tempSum, [...path]);
    if (node.right) dfs(node.right, tempSum, [...path]);
  };

  dfs(root);
  return result;
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// sum = 23;
// console.log(`Tree paths with sum: ${sum}: ${find_paths(root, 23)}`);

//------------------------------Sum of Path Numbers Leetcode #129. Sum Root to Leaf Numbers ---------------------//

const find_sum_of_path_numbers = function (root) {
  if (root === null) return 0;
  let total = 0;

  const dfs = (node, sum = 0) => {
    sum = sum * 10 + node.value;

    if (node.left === null && node.right === null) {
      total += sum;
    }
    if (node.left) dfs(node.left, sum);
    if (node.right) dfs(node.right, sum);
  };
  dfs(root);
  return total;
};

// var root = new TreeNode(1);
// root.left = new TreeNode(0);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(5);
// console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);

//------------------------------Path With Given Sequence Leetcode # ---------------------//

const find_path = function (root, sequence) {
  if (!root) return sequence.length === 0;

  const seqLength = sequence.length;

  const dfs = (node, index = 0) => {
    if (!node) return false;

    if (index >= seqLength || node.value !== sequence[index]) return false;

    if (node.left === null && node.right === null && index === seqLength - 1)
      return true;

    return dfs(node.left, index + 1) || dfs(node.right, index + 1);
  };
  return dfs(root);
};

//   var root = new TreeNode(1)
//   root.left = new TreeNode(0)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(1)
//   root.right.left = new TreeNode(6)
//   root.right.right = new TreeNode(5)

//   console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
//   console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)

//------------------------------Count Paths for a Sum Leetcode # 437. Path Sum III---------------------//

const count_paths = function (root, S) {
  function countPathsRecursive(currNode, S, currPath = []) {
    if (currNode === null) return 0;

    currPath.push(currNode.value);

    let pathCount = 0;
    let pathSum = 0;

    for (i = currPath.length - 1; i > 0; i--) {
      pathSum += currPath[i];

      if (pathSum === S) {
        pathCount += 1;
      }
    }

    pathCount += countPathsRecursive(currNode.left, S, currPath);
    pathCount += countPathsRecursive(currNode.right, S, currPath);

    //console.log(currPath)
    currPath.pop();
    return pathCount;
  }

  return countPathsRecursive(root, S);
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree has paths: ${count_paths(root, 11)}`);

//------------------------------Tree Diameter Leetcode # 543. Diameter of Binary Tree---------------------//

function find_diameter(root) {
  if (!root) return 0;
  let diameter = 0;

  function helper(node) {
    if (!node) return 0;
    //console.log(node.value);

    const leftPath = helper(node.left);
    //console.log(leftPath)
    const rightPath = helper(node.right);
    //console.log(rightPath)

    diameter = Math.max(diameter, leftPath + rightPath);
    return Math.max(leftPath, rightPath) + 1;
  }
  helper(root);
  return diameter;
}

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(6);
// console.log(find_diameter(root));
// root.left.left = null;
// root.right.left.left = new TreeNode(7);
// root.right.left.right = new TreeNode(8);
// root.right.right.left = new TreeNode(9);
// root.right.left.right.left = new TreeNode(10);
// root.right.right.left.left = new TreeNode(11);
// console.log(find_diameter(root));

//------------------------------Path with Maximum Sum Leetcode # 124. Binary Tree Maximum Path Sum---------------------//


function find_maximum_path_sum(root) {
       let largest = -Infinity;

       function dfs(node) {
        if (!node) return 0;

        let leftSum = dfs(node.left);
        let rightSum = dfs(node.right);

        largest = Math.max(largest, node.value+leftSum+rightSum);
        return Math.max(0, node.value + leftSum, node.value+ rightSum)
       }

       dfs(root)
       return largest
    }


  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
  
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(3)
  root.right.left = new TreeNode(5)
  root.right.right = new TreeNode(6)
  root.right.left.left = new TreeNode(7)
  root.right.left.right = new TreeNode(8)
  root.right.right.left = new TreeNode(9)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
  
  root = new TreeNode(-1)
  root.left = new TreeNode(-3)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)