function reverseWords(str) {
  function reverse(start, end) {
    while (start < end) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }

  reverse(0, str.length - 1);

  let start = 0;
  for (let end = 0; end <= str.length; end++) {
    if (end === str.length || str[end] === " ") {
      reverse(start, end - 1);
      start = end + 1;
    }
  }
}

const input = "the sky is blue".split("");
reverseWords(input);
console.log(input.join(""));
