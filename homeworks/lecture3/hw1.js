/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let solutions = [];
    for (let a = 0; a <= 48; a++) {
      for (let b = 0; b <= 48 - a; b++) {
        for (let c = 0; c <= 48 - a - b; c++) {
          let d = 48 - a - b - c;
          let totalValue = a + 5 * b + 25 * c + 50 * d;
          if (totalValue === 100) {
            solutions.push({ a, b, c, d });
            if (solutions.length === 2) {
              console.log(`Solution 1: 1c: ${solutions[0].a}, 5c: ${solutions[0].b}, 25c: ${solutions[0].c}, 50c: ${solutions[0].d}`);
              console.log(`Solution 2: 1c: ${solutions[1].a}, 5c: ${solutions[1].b}, 25c: ${solutions[1].c}, 50c: ${solutions[1].d}`);
              return;
            }
          }
        }
      }
    }
  }
