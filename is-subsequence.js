// add whatever parameters you deem necessary
function freqTally(letters1, letters2) {
  let frequency1 = new Map();
  for (let letter of letters1) {
    if (!frequency1[letter]) {
      frequency1[letter] = 1;
    } else {
      frequency1[letter] = frequency1[letter]++;
      frequency1[`${letter}${frequency1[letter]}`] = 1;
    }
  }
  let frequency2 = new Map();
  for (let letter of letters2) {
    if (!frequency2[letter] && frequency1[letter]) {
      frequency2[letter] = 1;
    } else if (
      frequency2[letter] &&
      frequency1[`${letter}${frequency1[letter]}`]
    ) {
      frequency2[letter] = frequency2[letter]++;
      frequency2[`${letter}${frequency2[letter]}`] = 1;
    }
  }
  return [frequency1, frequency2];
}
function isSubsequence(letters1, letters2) {
  let bothFrequencies = freqTally(letters1, letters2);
  for (let i = 0; i < Object.keys(bothFrequencies[0]).length; i++) {
    if (
      Object.keys(bothFrequencies[0])[i] !== Object.keys(bothFrequencies[1])[i]
    )
      return false;
  }

  return true;
}
