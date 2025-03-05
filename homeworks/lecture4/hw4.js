/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 * Cannot use flatten
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  let set1 = new Set(nums1);
  let result = new Set(nums2.filter((num) => set1.has(num)));
  return [...result]; // Convert Set to Array
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9,4]
console.log(intersection([1, 3, 5], [2, 4, 6])); // Output: []
console.log(intersection([1, 2, 3, 4], [2, 3, 5])); // Output: [2, 3]
