/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  let solutions = new Set();
  function backtrack(x, y, z, w) {
    let totalCoins = x + y + z + w;
    let totalCents = 1 * x + 5 * y + 25 * z + 50 * w;

    if (totalCoins > 48 || totalCents > 100) return;
    if (totalCoins === 48 && totalCents === 100) {
      let solution = JSON.stringify({ "1c": x, "5c": y, "25c": z, "50c": w });
      if (!solutions.has(solution)) {
        solutions.add(solution);

        if (solutions.size === 2) {
          console.log(
            "Two unique solutions found:",
            Array.from(solutions).map((s) => JSON.parse(s))
          );
          return;
        }
      }
    }

    if (solutions.size < 2) {
      backtrack(x + 1, y, z, w);
      backtrack(x, y + 1, z, w);
      backtrack(x, y, z + 1, w);
      backtrack(x, y, z, w + 1);
    }
  }

  backtrack(0, 0, 0, 0);
}

pickCoins();
