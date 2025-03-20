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
  const reverse = (start, end) => {
    while (start < end) {
      const temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input)
console.log(input);