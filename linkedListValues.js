/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  // todo
  let arr = [];
  fillVal(head, arr)

  return arr
};

const fillVal = (head, arr) => {
  if (head === null) return;
  arr.push(head.val)
  fillVal(head.next, arr)
}

// const linkedListValues = (head) => {
//   let arr = [];
//   let current = head;
//   while (current !== null) {
//     arr.push(current.val)
//     current = current.next
//   }

//   return(arr)
// }
