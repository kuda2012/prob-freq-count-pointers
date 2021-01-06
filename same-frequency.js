// add whatever parameters you deem necessary
function countFreq(letters) {
  let frequency = {};
  for (let letter of letters) {
    frequency[letter] = frequency[letter] + 1 || 1;
  }
  return frequency;
}
function sameFrequency(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;
  let nums1Freq = countFreq(String(nums1));
  let nums2Freq = countFreq(String(nums2));
  for (let key in nums1Freq) {
    if (!nums2Freq[key] || nums1Freq[key] !== nums2Freq[key]) return false;
  }

  return true;
}
