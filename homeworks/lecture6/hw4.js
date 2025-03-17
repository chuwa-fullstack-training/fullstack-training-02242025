/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const [integer, decimal] = num.toString().split('.'); // Split integer & decimal parts
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;

}
console.log(format(12345678));   // "12,345,678"
console.log(format(1234.56));    // "1,234.56"
console.log(format(1000000.99)); // "1,000,000.99"
console.log(format(987));        // "987"
console.log(format(1234567890)); // "1,234,567,890"
