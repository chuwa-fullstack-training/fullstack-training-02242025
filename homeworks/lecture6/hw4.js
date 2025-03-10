/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 * @returns {string}
 */
function format(num) {
  return num.toLocaleString("en-US");
}

console.log(format(12345678)); // "12,345,678"
console.log(format(1234.56)); // "1,234.56"
console.log(format(9876543210)); // "9,876,543,210"
console.log(format(1000)); // "1,000"
