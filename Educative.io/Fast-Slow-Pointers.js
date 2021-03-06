//------------------------LinkedList Cycle Leetcode # 141 Linked List Cycle --------------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const has_cycle = function (head) {
//   // TODO: Write your code here
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) return true;
//   }
//   return false;
// };

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

//------------------------Start of LinkedList Cycle Leetcode # 142. Linked List Cycle II --------------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// let find_cycle_start = function (head) {
//   if (head === null || head === head.next) return head;
//   let slow = head,
//     fast = head,
//     pointer = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       while (pointer !== slow) {
//         pointer = pointer.next;
//         slow = slow.next;
//       }
//       return pointer;
//     }
//   }
//   return null;
// };

//    const head = new Node(1);
//    head.next = new Node(2);
//    head.next.next = new Node(3);
//    head.next.next.next = new Node(4);
//    head.next.next.next.next = new Node(5);
//    head.next.next.next.next.next = new Node(6);
//    head.next.next.next.next.next.next = head.next.next;
//    head.next.next.next.next.next.next = head.next.next.next;
//    head.next.next.next.next.next.next = head;
//    console.log(find_cycle_start(head));

//------------------------Happy Number Leetcode # 202. Happy Number --------------------------//

const getNumSum = (num) => {
  let total = 0;

  while (num !== 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    total += Math.pow(lastDigit, 2);
  }
  console.log(total);
  return total;
};

const find_happy_number = function (n) {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getNumSum(getNumSum(fast));
    slow = getNumSum(slow);

    if (fast === slow) {
      return fast === 1;
    }
  }
};

//console.log(`${find_happy_number(23)}`);
// console.log(`${find_happy_number(12)}`);

//------------------------Middle of the LinkedList Leetcode # 876. Middle of the Linked List --------------------------//
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

const find_middle_of_linked_list = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

//console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

// head.next.next.next.next.next = new Node(6);
// console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

//   head.next.next.next.next.next.next = new Node(7)
//   console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)

//------------------------Palindrome LinkedList Leetcode # 234. Palindrome Linked List --------------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const reverse = (head) => {
//   let curr = head;
//   let prev = null;
//   let next;

//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// };

// const is_palindromic_linked_list = function (head) {
//   let slow = head;
//   let fast = head;
//   let startPoint = head;
//   let length = 0;

//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//     length += 1;
//   }
//   let mid = reverse(slow);

//   while (length) {
//     length--;
//     if (mid.val !== startPoint.val) return false;
//     mid = mid.next;
//     startPoint = startPoint.next;
//   }
//   return true;
// };

// head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(2);

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

// head.next.next.next.next.next = new Node(2);
// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

//------------------------Rearrange a LinkedList Leetcode # 143. Reorder List --------------------------//

function reverse(head) {
  let curr = head;
  let prev = null;
  let next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }

//   print_list() {
//     let result = "";
//     let temp = this;
//     while (temp !== null) {
//       result += temp.value + " ";
//       temp = temp.next;
//     }
//     console.log(result);
//   }
// }

const reorder = function (head) {
  if (head === null || head.next === null) {
    return;
  }
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow);
  let headFirstHalf = head;

  while (headFirstHalf !== null && headSecondHalf !== null) {
    let temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
};

// head = new Node(2);
// head.next = new Node(4);
// head.next.next = new Node(6);
// head.next.next.next = new Node(8);
// head.next.next.next.next = new Node(10);
// head.next.next.next.next.next = new Node(12);
// reorder(head);
// head.print_list();

//------------------------Cycle in a Circular Array Leetcode # 457. Circular Array Loop --------------------------//

const circular_array_loop_exists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    isForward = arr[i] >= 0;
    let slow = i;
    let fast = i;
    console.log(slow, fast);

    while (true) {
      slow = findNextIndex(arr, isForward, slow);
      fast = findNextIndex(arr, isForward, fast);
      console.log(slow, fast);
      if (fast !== -1) {
        fast = findNextIndex(arr, isForward, fast);
      }
      console.log(slow, fast);
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
};

function findNextIndex(arr, isForward, currentIndex) {
  let direction = arr[currentIndex] >= 0;
  console.log(direction);
  if (isForward !== direction) return -1; //change the direction , return -1;

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  console.log(nextIndex);
  if (nextIndex < 0) {
    nextIndex += arr.length; //wrap around for negative numbers
  }

  if (nextIndex === currentIndex) {
    //one element cycle, return -1
    nextIndex = -1;
  }

  return nextIndex;
}

//console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`);
// console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
// console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`);
