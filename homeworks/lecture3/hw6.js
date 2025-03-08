/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6、】【98765432
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
  let map = new Map();
  let count = 0;
  
  for (let num of nums) {
      if (map.has(num)) {
          count += map.get(num); // 已经出现的 num 次数即为当前 num 贡献的 "好数对"
          map.set(num, map.get(num) + 1);
      } else {
          map.set(num, 1);
      }
  }
  return count;
}

// ✅ 测试
console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  let res = "";
  for (let char of s) {
      if (!"aeiou".includes(char)) {
          res += char;
      }
  }
  return res;
}

// ✅ 测试
console.log(removeVowels("leetcodeisacommunityforcoders")); // "ltcdscmmntyfrcdrs"
console.log(removeVowels("aeiou")); // ""
