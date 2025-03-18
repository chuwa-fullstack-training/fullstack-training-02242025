/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let numStr = num.toString();
  
  let parts = numStr.split('.');
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  let formattedInteger = '';
  for (let i = 0; i < integerPart.length; i++) {
    // Add comma every 3 digits from the right
    if (i > 0 && (integerPart.length - i) % 3 === 0) {
      formattedInteger += ',';
    }
    formattedInteger += integerPart[i];
  }
  
  return formattedInteger + decimalPart;
}