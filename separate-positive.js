// add whatever parameters you deem necessary
function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] < 0 && nums[end] > 0) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    } else {
      if (nums[start] > 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return nums;
}
