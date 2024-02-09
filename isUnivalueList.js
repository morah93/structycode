/*
is univalue list
Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

*/

// const isUnivalueList = (head) => {
//   let current = head;

//   while (current !== null) {
//     if (current.val !== head.val) return false;
//     current = current.next;
//   }

//   return true;
// }

const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
}
