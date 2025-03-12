/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  const [integer, decimal] = num.toString().split(".");
  let rsl = []
  const integerArray = integer.split("");
  integerArray.reverse().reduce((acc, ele, index) => {
    if (index > 0 && index % 3 === 0) {
      acc.push(',');
    }
    acc.push(ele)
    return acc
  }, rsl)
  return rsl.reverse().join("") + (decimal ? "." + decimal : "");
}
console.log(format(12345678))
