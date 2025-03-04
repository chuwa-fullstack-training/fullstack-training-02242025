/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const solutions = [];
  for (let a = 0; a <= 48; a++) {
    for (let b = 0; b <= 48 - a; b++) {
      for (let c = 0; c <= 48 - a - b; c++) {
        let d = 48 - a - b - c;
        if (a + 5 * b + 25 * c + 50 * d === 100) {
          solutions.push({ "1c": a, "5c": b, "25c": c, "50c": d });
        }
      }
    }
  }
  return solutions;
}

const sols = pickCoins();
if (sols.length < 2) {
  console.log("Less than 2 solutions");
} else {
  console.log("Solution 1:", sols[0]);
  console.log("Solution 2:", sols[1]);
}
