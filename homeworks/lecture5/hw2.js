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
  if (str === null || str.length <= 1) {
    return str;
  }

  swap(str, 0, str.length - 1);

  let start = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ' ') {
      swap(str, start, i - 1);
      start = i + 1;
    } else if (i === str.length - 1) {
      swap(str, start, i);
    }
  }
}

function swap(str, left, right) {
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);