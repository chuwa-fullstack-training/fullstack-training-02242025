/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let output = [];
    for (let a = 0; a <= 100; a++) {
        for (let b = 0; b <= 20; b++) {
            for (let c = 0; c <= 4; c++) {
                for (let d = 0; d <= 2; d++) {
                    let sum = a * 1 + b * 5 + c * 25 + d * 50;
                    if (sum === 100 && (a+b+c+d<=48) {
                        output.push([a, b, c, d]);
                    } else if (sum > 100 || (a+b+c+d>48) {
                        break;
                    }
                }
            }
        }
    }
    
    if (output.length > 1) {
        let result1 = `[${output[0].join(", ")}]`;
        let result2 = `[${output[1].join(", ")}]`;
        console.log(result1);
        console.log(result2);
    }
}
