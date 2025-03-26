/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  let [integer, fraction] = num.toString().split('.');
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction ? integer + "." + fraction : integer;
}
