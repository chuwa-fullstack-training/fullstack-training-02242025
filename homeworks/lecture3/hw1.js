/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
 function pickCoins(coins, amount, x) {
    const result = [];
        function backtrack(start, curr, sum) {
        if (sum === amount && curr.length === x) {
            result.push(curr.slice());
            return;
        }
        
        if (sum > amount || curr.length > x) {
            return;
        }
        
        for (var i = start; i < coins.length; i++) {
            curr.push(coins[i]); 
            backtrack(i, curr, sum + coins[i]); 
            curr.pop();
        }
    }
    
    backtrack(0, [], 0);
    return result;
}

    
    console.log(pickCoins([1, 2, 25, 50], 100, 48));
    
  