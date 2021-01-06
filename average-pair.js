// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let maybeAns = (arr[left] + arr[right]) / 2;
    if (maybeAns === targetAvg) {
      return true;
    } else if (maybeAns > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
