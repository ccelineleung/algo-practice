//------------------Reverse a LinkedList LeetCode # 206. Reverse Linked List---------------------//
// class Node {
//     constructor(value, next=null){
//       this.value = value;
//       this.next = next;
//     }

//     print_list() {
//         let temp = this;
//         while (temp !== null) {
//           process.stdout.write(`${temp.value} `);
//           temp = temp.next;
//         }
//         console.log();
//       }
//   };

//   const reverse = function(head) {
//     let curr = head;
//     let prev = null;
//     let next;

//     while (curr !== null) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;

//     }
//     return prev;
//   };

//   head = new Node(2);
//   head.next = new Node(4);
//   head.next.next = new Node(6);
//   head.next.next.next = new Node(8);
//   head.next.next.next.next = new Node(10);

//   process.stdout.write('Nodes of original LinkedList are: ');
//   head.print_list();
//   result = reverse(head);
//   process.stdout.write('Nodes of reversed LinkedList are: ');
//   result.print_list();

//------------------Reverse a Sub-list LeetCode #92. Reverse Linked List II---------------------//
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

const reverse_sub_list = function (head, p, q) {
  if (p === q) return head;

  let curr = head;
  let prev = null;
  let i = 0;
  while (curr !== null && i < p - 1) {
    prev = curr;
    curr = curr.next;
    i += 1;
  }

  const lastNodeOfFirstPart = prev;
  //after reversing the LinkedList 'current' will become the last node of the subLIst
  let lastNodeOfSubList = curr;
  let next = null;

  i = 0;
  while (curr !== null && i < q - p + 1) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    i += 1;
  }

  //connect with the first part
  if (lastNodeOfFirstPart !== null) {
    //'previous' is now the first node of the sub-list
    lastNodeOfFirstPart.next = prev;
    // this means p === 1 i.e. we are changing the first node (head) of the LinkedList
  } else {
    head = prev;
  }
  // connect with the last part
  lastNodeOfSubList = curr;
  return head;
};

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// console.log(head);
// console.log(reverse_sub_list(head, 2, 4));
// head;

//------------------Reverse every K-element Sub-list LeetCode #25. Reverse Nodes in k-Group---------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

const reverse_every_k_elements = function (head, k) {
  let curr = head;
  let prev = null;

  while (true) {
    const lastNodeOfPreviousPart = prev;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const lastNodeOfSubList = curr;
    let next = null; // will be used to temporaily store the next node;
    let i = 0;
    while (curr !== null && i < k) {
      // reverse 'k' nodes
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      i += 1;
    }

    //connect with the previous part
    if (lastNodeOfPreviousPart !== null) {
      lastNodeOfPreviousPart.next = prev;
    } else {
      head = prev;
    }
    // connect with the next part
    lastNodeOfSubList.next = curr;

    if (curr === null) {
      break;
    }
    prev = lastNodeOfSubList;
  }
  return head;
};

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);

// console.log(head);
// console.log(reverse_every_k_elements(head, 3));

//------------------Reverse alternating K-element Sub-list LeetCode #---------------------//
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

const reverse_alternate_k_elements = function (head, k) {
  if (k <= 1 || head === null) return head;

  let curr = head;
  let prev = null;

  while (curr !== null) {
    //break if we've reached the end of the list
    const lastNodeOfPreviousPart = prev;
    // after reversing the LinkedList 'current' will become the last node of the sub-list;
    const lastNodeOfSubList = curr;

    let next = null; //will be used to temporarily store the next node;

    // reverse 'k' node
    let i = 0;
    while (curr !== null && i < k) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      i += 1;
    }

    //connect with the previous part
    if (lastNodeOfPreviousPart !== null) {
      lastNodeOfPreviousPart.next = prev;
    } else {
      head = prev;
    }

    //connect with the next part
    lastNodeOfSubList.next = curr;

    //skip 'k' nodes
    i = 0;
    while (curr !== null && i < k) {
      prev = curr;
      curr = curr.next;
      i += 1;
    }
  }
  return head;
};

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);

// console.log(head);
// console.log(reverse_alternate_k_elements(head, 2));

//------------------Rotate a LinkedList LeetCode # 61. Rotate List--------------------//

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const rotate = function (head, rotations) {
  if (head === null || head.next === null || rotations <= 0) return head;

  //find the length and the last node of the list
  let lastNode = head;
  let listLength = 1;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    listLength += 1;
  }
  lastNode.next = head; // connect the last node with the head to make it a circular list
  rotations = rotations % listLength; // no need to do rotations more than the length of the list
  skipLength = listLength - rotations;
  lastNodeOfRotatedList = head;

  for (i = 0; i < skipLength - 1; i++) {
    lastNodeOfRotatedList = lastNodeOfRotatedList.next;
  }

  // 'lastNodeOfRotatedList.next' is pointing to the sub-list of 'k' ending nodes
  head = lastNodeOfRotatedList.next;
  lastNodeOfRotatedList.next = null;

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(head);
console.log(rotate(head, 3));
