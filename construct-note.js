// add whatever parameters you deem necessary
function countFrequency(letters) {
  let frequency = {};
  for (let letter of letters) {
    frequency[letter] = frequency[letter] + 1 || 1;
  }
  return frequency;
}
function constructNote(msg, letters) {
  if (letters.length < msg.length) return false;
  let msgLetterFreq = countFrequency(msg);
  let lettersFreq = countFrequency(letters);

  for (letter of msg) {
    if (!lettersFreq[letter]) return false;
    if (lettersFreq[letter] < msgLetterFreq[letter]) return false;
  }
  return true;
}
// function constructNote(msg, letters) {
//   if (letters.length < msg.length) return false;
//   for (letter of msg) {
//     let idx = letters.indexOf(letter);
//     if (idx === -1) return false;
//     letters = typeof letters != "object" ? letters.split("") : letters;
//     letters.splice(idx, 1);
//   }
//   return true;
// }
