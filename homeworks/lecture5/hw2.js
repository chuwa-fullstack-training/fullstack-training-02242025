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
  return str.split(' ').reverse().join(' ');
}

const input = 'the sky is blue';
console.log(reverseWords(input));