/*
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where consecutive occurrences
 of the same characters are compressed into the number of occurrences followed by the character.
Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
  // todo
  let str = [];
  let j = 0;
  let i = 0;

  while (j <= s.length) {
    let count = 0;
    if (s[j] === s[i]) {
      j+=1
    }else{
      count = j - i
      console.log(count)
      if (count === 1){
        str.push(s[i])
      }else{
        str.push(count,s[i])
      }
      i = j
    }
  }
  return str.join('')
};

module.exports = {
  compress,
};


// const compress = (s) => {
//   // todo
//   let str = [];

//   let j = 0;
//   let i = 0;

//   while (j < s.length) {
//     if (s[j] === s[j+1]) {
//       console.log(s[j], 'j')
//       console.log(s[j+1], 'j+1')
//       j+=1
//     }else{
//       let char = s.slice(i,j);
//       console.log(char, 'char')
//       let count = 0;
//       for (let k = 0; k < char.length; k++){
//         count+=1
//         str.push(count,s[i])
//       }
//       j += 1
//       i = j
//     }
//   }
//   return str.toString()
//   // return res.join('')
// };
