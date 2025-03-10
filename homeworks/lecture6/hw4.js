/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let numStr = num.toString();
  let result = "";
  let count = 0;

  // Iterate from the right (least significant digit)
  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;

    if (count % 3 === 0 && i !== 0) {
      result = "," + result; 
    }
  }

  return result;
}
