/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
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
  // Your solution here
  let set1 = new Set(nums1); 
    let set2 = new Set(); 

    for (let num of nums2) {
        if (set1.has(num)) {
            set2.add(num);
        }
    }

    return [...set2];
};

console.log(intersection([1, 2, 2, 1], [2, 2])); 
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); 
console.log(intersection([1, 3, 5], [2, 4, 6])); 