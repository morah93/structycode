/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index.
The function should insert a new node with the value into the list at the specified index.
Consider the head of the linked list as index 0.
The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the
length of the input list.
*/

// const insertNode = (head, value, index) => {
//   if (index === 0) {
//     const newHead = new Node(value);
//     newHead.next = head;
//     return newHead;
//   }

//   let count = 0;
//   let current = head;
//   while (current !== null) {
//     if (count === index - 1) {
//       const next = current.next;
//       current.next = new Node(value);
//       current.next.next = next;
//     }

//     count += 1;
//     current = current.next;
//   }
//   return head;
// };

const insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }

  insertNode(head.next, value, index, count + 1);
  return head;
};
