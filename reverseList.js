/*
Write a function, reverseList, that takes in the head of a linked list as an argument.
The function should reverse the order of the nodes in the linked list in-place and
return the new head of the reversed linked list.
*/

// const reverseList = (head) => {
//   // todo
//   let current = head
//   let previous = null

//   while (current !== null){
//     let next = current.next
//     current.next = previous
//     previous = current
//     current = next
//     head = previous
//   }
//   return head
// };

const reverseList = (head, prev = null) => {
  // todo
  if (head === null) return prev
  let next = head.next;
  head.next = prev;
  return reverseList(next, head)
};
