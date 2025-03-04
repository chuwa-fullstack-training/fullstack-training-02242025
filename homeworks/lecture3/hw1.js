/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function pickCoins() {
    // 1 dollar = 100 cents
    // Equation: 1a + 5b + 25c + 50d = 100
    // Coin count constraint: a + b + c + d = 48

    let solutions = [];

    for (let a = 0; a <= 48; a++) { // 1c coins
      for (let b = 0; b <= 48 - a; b++) { // 5c coins
        for (let c = 0; c <= 48 - a - b; c++) { // 25c coins
          let d = 48 - a - b - c; // 50c coins

          if (1 * a + 5 * b + 25 * c + 50 * d === 100) {
            solutions.push([a,b,c,d]);

            // Stop after finding 2 solutions
            if (solutions.length === 2) {
              console.log(solutions[0]);
              console.log(solutions[1]);
              return;
            }
          }
        }
      }
    }
  }

  pickCoins();
