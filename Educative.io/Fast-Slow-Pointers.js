//------------------------LinkedList Cycle Leetcode # 141 Linked List Cycle --------------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

const has_cycle = function (head) {
  // TODO: Write your code here
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};

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

//------------------------Start of LinkedList Cycle Leetcode #  --------------------------//

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

let find_cycle_start = function (head) {
  if (head === null || head === head.next) return head;
  let slow = head,
    fast = head,
    pointer = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }
      return pointer;
    }
  }
  return null;
};
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
