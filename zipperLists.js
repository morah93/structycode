/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments.
The function should zipper the two lists together into single linked list by alternating nodes.
If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.
The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.


*/


// const zipperLists = (head1, head2) => {
//   // todo
//   let current1 = head1.next
//   let current2 = head2
//   let tail = head1
//   let count = 0
//   while (current2 !== null && current1 !== null) {
//     let next1 = current2
//     let next2 = current1
//     if (count % 2 === 0) {
//       tail.next = current2
//       current2 = current2.next
//     }else {
//       tail.next = current1
//       current1 = current1.next
//     }
//     tail = tail.next
//     count += 1
//   }
//   if (current1 === null) tail.next = current2;
//   if (current2 === null) tail.next = current1;
//   return head1
// };

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null
  if (head1 === null) return head2
  if (head2 === null) return head1
  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2
  head2.next = zipperLists(next1, next2)
  return head1
}
