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
  reverse(str, 0, str.length - 1);

  let start = 0; 

  for (let end = 0; end <= str.length; end++) {
    if (end === str.length || str[end] === ' ') { 
      reverse(str, start, end - 1); 
      start = end + 1; 
    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);