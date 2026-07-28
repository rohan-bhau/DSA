/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
     if (sorted.length === 0) return 0;
    // console.log(sorted)
      const mid = Math.floor(sorted.length / 2);

  // 3. If odd, return middle. If even, return average of the two middle numbers.
  return sorted.length % 2 !== 0 
    ? sorted[mid] 
    : (sorted[mid - 1] + sorted[mid]) / 2;

};