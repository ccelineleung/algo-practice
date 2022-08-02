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
    if(node.left) dfs(node.left, sum) 
    if(node.right) dfs(node.right, sum);
  };
  dfs(root)
  return total
};

// var root = new TreeNode(1);
// root.left = new TreeNode(0);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(5);
// console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);

//------------------------------Path With Given Sequence Leetcode # ---------------------//

const find_path = function(root, sequence) {
    if( !root ) return sequence.length === 0;

    const seqLength = sequence.length;

    const dfs = (node, index = 0) => {
        if (!node) return false;

        if (index >= seqLength || node.value !== sequence[index]) return false;

        if(node.left === null && node.right === null && index === seqLength - 1) return true;

        return dfs(node.left, index + 1) || dfs (node.right, index + 1)
    }
    return dfs(root)
  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)