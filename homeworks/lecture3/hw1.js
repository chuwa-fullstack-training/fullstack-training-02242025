/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const solutions = [];
    
    // 遍历可能的 50c, 25c, 5c, 1c 组合
    for (let f = 0; f <= 2; f++) { // 最多 2 枚 50c
        for (let t = 0; t <= 4; t++) { // 最多 4 枚 25c
            for (let v = 0; v <= 20; v++) { // 最多 20 枚 5c
                let o = 48 - (f + t + v); // 剩下的 1c 硬币数量
                
                if (o >= 0 && (f * 50 + t * 25 + v * 5 + o * 1) === 100) {
                    solutions.push({ '50c': f, '25c': t, '5c': v, '1c': o });
                    if (solutions.length === 2) {
                        console.log("Two solutions found:", solutions);
                        return;
                    }
                }
            }
        }
    }
    console.log("No valid solutions found");
}

pickCoins();

