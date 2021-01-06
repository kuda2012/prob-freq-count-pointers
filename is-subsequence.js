// // add whatever parameters you deem necessary
// function freqTally(letters1, letters2) {
//   let frequency1 = new Map();
//   for (let letter of letters1) {
//     if (!frequency1[letter]) {
//       frequency1[letter] = 1;
//     } else {
//       frequency1[letter] = frequency1[letter]++;
//       frequency1[`${letter}${frequency1[letter]}`] = 1;
//     }
//   }
//   let frequency2 = new Map();
//   for (let letter of letters2) {
//     if (!frequency2[letter] && frequency1[letter]) {
//       frequency2[letter] = 1;
//     } else if (
//       frequency2[letter] &&
//       frequency1[`${letter}${frequency1[letter]}`]
//     ) {
//       frequency2[letter] = frequency2[letter]++;
//       frequency2[`${letter}${frequency2[letter]}`] = 1;
//     }
//   }
//   return [frequency1, frequency2];
// }
// function isSubsequence(letters1, letters2) {
//   let bothFrequencies = freqTally(letters1, letters2);
//   for (let i = 0; i < Object.keys(bothFrequencies[0]).length; i++) {
//     if (
//       Object.keys(bothFrequencies[0])[i] !== Object.keys(bothFrequencies[1])[i]
//     )
//       return false;
//   }

//   return true;
// }
function isSubsequence(str1, str2) {
  let str1Idx = 0;
  let str2Idx = 0;
  if (!str1) return true;
  while (str2Idx < str2.length) {
    if (str1[str1Idx] === str2[str2Idx]) {
      str1Idx++;
    }
    if (str1Idx == str1.length) return true;
    str2Idx++;
  }
  return false;
}
