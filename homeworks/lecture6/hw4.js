/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here 
  let numStr = num.toString();
  let numArr = numStr.split('.');
  let decimalPart = numArr.length > 1 ? '.' + numArr[1] : '';
  let intPart = numArr[0].split('');

  let index = intPart.length;
  while (index > 3) {
    index -= 3;
    intPart.splice(index, 0, ',');s
  }
  let int = intPart.join('');

  return int + decimalPart;
}

console.log(format(123456789.56));
