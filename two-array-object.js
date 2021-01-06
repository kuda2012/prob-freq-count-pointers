// add whatever parameters you deem necessary
function frequencyCount(letters, numbers) {
  let frequency = {};
  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = numbers[i] || null;
  }
  return frequency;
}
function twoArrayObject(letters, numbers) {
  return frequencyCount(letters, numbers);
}
