/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  reverse(str, 0, str.length-1);
  let left = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === ' ') {
      reverse(str, left, i-1);
      left = i + 1;
    }
  }
  return str.join('');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
//reverseWords(input);
console.log(reverseWords(input));