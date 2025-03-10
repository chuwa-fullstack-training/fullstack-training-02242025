/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // Convert number to string
  let str = num.toString();

  // Split into integer and decimal parts
  let [integerPart, decimalPart] = str.split(".");

  // Add commas to integer part from right to left
  let formattedInteger = "";
  let count = 0;
  for (let i = integerPart.length - 1; i >= 0; i--) {
    formattedInteger = integerPart[i] + formattedInteger;
    count++;
    if (count % 3 === 0 && i !== 0) {
      formattedInteger = "," + formattedInteger;
    }
  }

  // Return formatted number with decimal part if exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}
console.log(format(12345678));
console.log(format(1234.56));
