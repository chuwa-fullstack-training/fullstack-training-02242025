/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  let count = 0;
  let countMap = {}; // HashMap to store frequencies

  for (let num of nums) {
    if (countMap[num]) {
      count += countMap[num]; // Add previous occurrences as pairs
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  return count;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // Output: 6
console.log(numIdenticalPairs([1, 2, 3])); // Output: 0

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  return s.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("hello")); // Output: "hll"
console.log(removeVowels("leetcode")); // Output: "ltcd"
console.log(removeVowels("AEIOUaeiou")); // Output: "" (all vowels removed)
console.log(removeVowels("programming")); // Output: "prgrmmng"
console.log(removeVowels("xyz")); // Output: "xyz" (no vowels removed)

function removeVowels2(s) {
  let vowels = "aeiouAEIOU";
  let result = "";

  for (let char of s) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(removeVowels2("hello")); // Output: "hll"
console.log(removeVowels2("leetcode")); // Output: "ltcd"
console.log(removeVowels2("AEIOUaeiou")); // Output: ""
console.log(removeVowels2("programming")); // Output: "prgrmmng"
console.log(removeVowels2("xyz")); // Output: "xyz"
