/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments.
The function should delete the node containing the target value from the linked list and return the
head of the resulting linked list. If the target appears multiple times in the linked list,
only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
*/

// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;

//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     if (current.val === targetVal) {
//       prev.next = current.next;
//       break;
//     }
//     prev = current;
//     current = current.next;
//   }

//   return head;
// };

const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};
