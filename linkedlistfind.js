/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value.
The function should return a boolean indicating whether or not the linked list contains the target.
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  const linkedListValues = (head) => {
    // todo
    let arr = [];
    // let current = head;

    // while (current !== null) {
    //   arr.push(current.val)
    //   current = current.next
    // }

    fillVal(head, arr)

    return arr
  };

  const fillVal = (head, arr) => {
    if (head === null) return;
    arr.push(head.val)
    fillVal(head.next, arr)
  }
};
