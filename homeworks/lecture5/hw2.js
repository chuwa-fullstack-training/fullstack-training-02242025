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
  reverse(str, 0, str.length-1);
  let w1=0;
  for (let w2=0; w2<=str.length; w2++){
    if (str[w2]==' ' || w2===str.length){
      reverse(str, w1, w2-1);
      w1=w2+1;
    }
  }
}
function reverse(arr, left, right){
  while (left<right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left ++;
    right --;
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
