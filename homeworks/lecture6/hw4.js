const { resourceLimits } = require("worker_threads");

/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const str = num.toString();
  const parts = str.split(".");
  let interger = parts[0];
  let res = "";
  let count = 0;

  for (let i = interger.length - 1; i >= 0; i--) {
    res = interger[i] + res;
    count++;

    if (count % 3 === 0 && i !== 0) {
      res = "," + res;
    }
  }

  if (parts.length > 1) {
    res += "." + parts[1];
  }

  return res;
}
