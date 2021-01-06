// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let numMatches = 0;
  arr.sort((a, b) => a - b);
  while (left < right) {
    let maybeAns = arr[left] + arr[right];
    if (maybeAns === num) {
      numMatches++;
      left++;
      right--;
    } else if (maybeAns > num) {
      right--;
    } else {
      left++;
    }
  }
  return numMatches;
}
