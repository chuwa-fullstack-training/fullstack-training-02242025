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
  const reverse = (start, end) => {
    while(start < end){
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }
  reverse(0, str.length - 1);
  for(let left = 0, right = 0; right <= str.length; right++){
    if(right === str.length || str[right] === " "){
      reverse(left, right-1);
      left = right+1;
    }
  }
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));