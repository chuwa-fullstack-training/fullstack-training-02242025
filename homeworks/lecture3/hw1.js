/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let count = 0;
    for (let i = 0; i <= 48; i++) {
        for (let j = 0; j <= 24; j++) {
            for (let k = 0; k <= 4; k++) {
                for (let l = 0; l <= 1; l++) {
                    if (i + j * 5 + k * 25 + l * 50 === 100) {
                        count++;
                        console.log(`Solution ${count}: ${i} 1c, ${j} 5c, ${k} 25c, ${l} 50c`);
                    }
                }
            }
        }
    }
}

pickCoins();

