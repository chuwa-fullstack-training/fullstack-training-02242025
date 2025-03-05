/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const solutions = []
    for (let fifty = 0; fifty <= 2; fifty++) {
        for (let twentyFive = 0; twentyFive <= 4; twentyFive++) {
            for (let five = 0; five <= 20; five++) {
                const one = 48 - fifty - twentyFive - five
                if (one < 0) continue;
                const totalCents = fifty * 50 + twentyFive * 25 + five * 5 + one;
                if (totalCents === 100) {
                    solutions.push({ "50Cents": fifty, "25Cents": twentyFive, "5Cents": five, "1Cent": one });
                }
                if (solutions.length === 2) {
                    console.log(solutions)
                    return solutions
                }
            }
        }
    }
}
pickCoins();

