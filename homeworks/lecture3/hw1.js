/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here

    let  coins = [1,5,25,50]
    let coinsCount = 48;
    let targetSum = 100;

    let res = []
    function backtracking(coins, count, totalsum, ans ){

        if ( count === 48 && totalsum === 100){
            res.push({...ans});
        }
        if (count >=48 || totalsum >=100){
            return;
        }

        for ( let i=0; i<coins.length-1; i++){
            ans[coins[i]] = (ans[coins[i]] || 0) + 1;
            backtracking(coins, count +1, totalsum+coins[i], ans);
            ans[coins[i]]--;
        }
    }
    backtracking(coins, 0, 0, {})

    return res;
}


