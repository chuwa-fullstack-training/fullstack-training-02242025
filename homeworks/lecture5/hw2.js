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
  let arr = str.split(' '); 
  let left = 0;
  let right = arr.length - 1;

  // Reverse the words in place
  while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  // Join the array back into a string and return it
  return arr.join(' ');
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
