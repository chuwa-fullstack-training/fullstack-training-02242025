/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  const [integer, decimal] = num.toString().split(".");
  let rsl = ""
  const integerArray = integer.split("");
  integerArray.reduce((acc, ele, index) => {
    if (index > 0 && index % 3 === 0) {
      acc = "," + acc
    }
    return String(value) + acc
  }, rsl)
  return rsl + (decimal ? "." + decimal : "");
}
console.log(format(12345678))
