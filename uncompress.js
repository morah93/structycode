
/*
uncompress
Write a function, uncompress, that takes in a string as an argument.
 The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
You may assume that the input string is well-formed according to the previously mentioned pattern.

uncompress("2c3a1t"); // -> 'ccaaat'

*/

const uncompress = (s) => {
  // todo
  const nums = '0123456789'
  let string = []
  let i = 0;
  let j = 0;
  while (j < s.length){
    if(nums.includes(s[j])) {
      j += 1
    } else {
      let number = Number(s.slice(i,j));
      for (let count = 0; count < number; count++) {
        string.push(s[j]);
      }
      j += 1
      i = j
    }
  }
  return string.join('');
};

module.exports = {
  uncompress,
};
