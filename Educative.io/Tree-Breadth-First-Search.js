// ------------------------Binary Tree Level Order Traversal LeetCode # 102. Binary Tree Level Order Traversal----------------------------//
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const traverse = function (root) {
//   if (root === null) return result;

//   const result = [];
//   const queue = [root];

//   while (queue.length) {
//     const length = queue.length;
//     const currentLevel = [];

//     for (i = 0; i < length; i++) {
//       currNode = queue.shift();
//       // add the node to the current level
//       currentLevel.push(currNode.val);
//       // insert the children of current node in the queue;
//       if (currNode.left !== null) queue.push(currNode.left);
//       if (currNode.right !== null) queue.push(currNode.right);
//     }
//     result.push(currentLevel);
//   }
//   return result;
// };

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Level order traversal: ${traverse(root)}`);

// ------------------------Reverse Level Order Traversal LeetCode #107. Binary Tree Level Order Traversal II----------------------------//

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function traverse(root) {
//   if (root === null) return result;
//   result = [];
//   queue = [root];

//   while (queue.length > 0) {
//     let currentLength = queue.length;
//     let currentLevel = [];

//     for (i = 0; i < currentLength; i++) {
//       currentNode = queue.shift();
//       currentLevel.push(currentNode.value);

//       if (currentNode.left) queue.push(currentNode.left);
//       if (currentNode.right) queue.push(currentNode.right);
//     }
//     result.unshift(currentLevel);
//   }

//   return result;
//}

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Reverse level order traversal: ${traverse(root)}`);

// ------------------------Reverse Level Order Traversal LeetCode #103. Binary Tree Zigzag Level Order Traversal----------------------------//

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

const traverse = function (root) {
  if (root === null) return result;
  result = [];
  const queue = [root];
  let leftToRight = true;
  while (queue.length > 0) {
    const currentLength = queue.length;
    const currentLevel = [];

    for (let i = 0; i < currentLength; i++) {
      let currNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currNode.value);
      } else {
        currentLevel.unshift(currNode.value);
      }

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(currentLevel);
    leftToRight = !leftToRight;
  }
  return result;
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// root.right.left.left = new TreeNode(20);
// root.right.left.right = new TreeNode(17);
// console.log(`Zigzag traversal: ${traverse(root)}`);

// ------------------------Level Averages in a Binary Tree  LeetCode #637. Average of Levels in Binary Tree----------------------------//

// class TreeNode {

//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   };

//   const find_level_averages = function(root) {
//     result = [];
//     const queue = [root];

//     while (queue.length > 0) {
//         let currLength = queue.length;
//         let currLevel = []
//         let sum = 0;

//         for (let i =0; i<currLength; i++) {
//             let currNode = queue.shift()
//             sum += currNode.value

//             if (currNode.left) queue.push(currNode.left);
//             if (currNode.right) queue.push(currNode.right)
//         }
//         result.push(sum/currLength)
//     }
//     return result;
//   };

//   var root = new TreeNode(12)
//   root.left = new TreeNode(7)
//   root.right = new TreeNode(1)
//   root.left.left = new TreeNode(9)
//   root.left.right = new TreeNode(2)
//   root.right.left = new TreeNode(10)
//   root.right.right = new TreeNode(5)

//   console.log(`Level averages are: ${find_level_averages(root)}`)

// ------------------------Minimum Depth of a Binary Tree LeetCode #111. Minimum Depth of Binary Tree----------------------------//

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

const find_minimum_depth = function (root) {
  if (root === null) return 0;
  let queue = [root];
  let count = 0;
  while (queue.length > 0) {
    const currLength = queue.length;
    count += 1;

    for (let i = 0; i < currLength; i++) {
      let currNode = queue.shift();

      if (currNode.left === null && currNode.right === null) return count;
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
// root.left.left = new TreeNode(9);
// root.right.left.left = new TreeNode(11);
// console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);

// ------------------------Level Order Successor LeetCode #----------------------------//
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const find_successor = function (root, key) {
  queue = [root];
  result = [];

  while (queue.length > 0) {
    currNode = queue.shift();
    result.push(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }

    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === key) {
      return result[i + 1];
    }
  }
};

// root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);

// console.log(find_successor(root, 9));

// console.log(find_successor(root, 12));

// ------------------------Connect Level Order Siblings LeetCode #116. Populating Next Right Pointers in Each Node----------------------------//

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//     this.next = null;
//   }

// level order traversal using 'next' pointer
// print_level_order() {
//   console.log("Level order traversal using 'next' pointer: ");
//   let nextLevelRoot = this;
//   while (nextLevelRoot !== null) {
//     let current = nextLevelRoot;
//     nextLevelRoot = null;
//     while (current != null) {
//       process.stdout.write(`${current.val} `);
//       if (nextLevelRoot === null) {
//         if (current.left !== null) {
//           nextLevelRoot = current.left;
//         } else if (current.right !== null) {
//           nextLevelRoot = current.right;
//         }
//       }
//       current = current.next;
//     }
//     console.log();
//   }
// }
// }

const connect_level_order_siblings = function (root) {
  if (root === null) return;

  const queue = [root];
  while (queue.length > 0) {
    let prevNode = null;
    levelSize = queue.length;
    //connect all nodes at this level
    for (let i = 0; i < levelSize; i++) {
      currNode = queue.shift();
      if (prevNode !== null) {
        prevNode.next = currNode;
      }
      prevNode = currNode;
      //insert the children of current node in the queue;
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
//connect_level_order_siblings(root);

//   root.print_level_order()
// console.log(connect_level_order_siblings(root));

// ------------------------Connect All Level Order Siblings LeetCode #----------------------------//

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   //tree traversal using 'next' pointer
//   print_tree() {
//     let result = "Traversal using 'next' pointer: ";
//     let current = this;
//     while (current != null) {
//       result += current.value + " ";
//       current = current.next;
//     }
//     console.log(result);
//   }
// }

const connect_all_siblings = function (root) {
  if (root === null) return;
  let prevNode = null;
  const queue = [root];

  while (queue.length > 0) {
    let currentLength = queue.length;

    for (let i = 0; i < currentLength; i++) {
      let currNode = queue.shift();

      if (prevNode !== null) {
        prevNode.next = currNode;
      }
      prevNode = currNode;

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
  return root;
};

// var root = new TreeNode(12);
// root.left = new TreeNode(7);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.right.left = new TreeNode(10);
// root.right.right = new TreeNode(5);
// console.log(connect_all_siblings(root))
// root.print_tree();

// ------------------------Right View of a Binary Tree LeetCode #199. Binary Tree Right Side View----------------------------//

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree_right_view = function (root) {
  if (root === null) return result;
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const currLength = queue.length;

    for (let i = 0; i < currLength; i++) {
      let currNode = queue.shift();
      //result.push(currNode.value);
      //if it is the last node of this level, add it to the result
      if (i === currLength - 1) {
        result.push(currNode.value);
      }
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root));
