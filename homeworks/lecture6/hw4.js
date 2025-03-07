/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const integerPart = num.split(".")[0].split("").reverse();
  const decimalPart = num.split(".").length == 2 ? "." + num.split(".")[1] : "";
  const formatedInteger = integerPart.reduce((acc, value, index)=>{
    if(index != 0 && index%3 === 0){
      acc = "," + acc;
    }
    return String(value) + acc;
  }, "");
  return formatedInteger + decimalPart;
}


const formattedNum = format("34125435432.32432");
console.log(formattedNum);