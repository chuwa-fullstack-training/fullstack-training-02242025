/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const solutions = [];
    const targetAmount = 100; 
    const totalCoins = 48;
    const coinValues = { '1c': 1, '5c': 5, '25c': 25, '50c': 50 };
  
    for (let count1c = 0; count1c <= totalCoins; count1c++) {
      for (let count5c = 0; count5c <= totalCoins - count1c; count5c++) {
        for (let count25c = 0; count25c <= totalCoins - count1c - count5c; count25c++) {
          let count50c = totalCoins - count1c - count5c - count25c;
  
          let totalValue = (count1c * coinValues['1c']) + 
                           (count5c * coinValues['5c']) + 
                           (count25c * coinValues['25c']) + 
                           (count50c * coinValues['50c']);
          
          if (totalValue === targetAmount) {
            solutions.push({
              '1c': count1c,
              '5c': count5c,
              '25c': count25c,
              '50c': count50c
            });
  
            if (solutions.length === 2) {  
              console.log("Two solutions found:");
              solutions.forEach((solution, index) => {
                console.log(`Solution ${index + 1}:`, solution);
              });
              return;
            }
          }
        }
      }
    }
  }
  
  pickCoins();