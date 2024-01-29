/*
Write a function, longestStreak, that takes in the head of a linked list as an argument.
The function should return the length of the longest consecutive streak of the same value within the list.
*/

const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;

  while (currentNode !== null) {
    if (currentNode.val === prevVal) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }

    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }

  return maxStreak;
};
