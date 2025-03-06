/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let coins=[50, 25, 5, 1];
    let target = 100;
    let pick = 48;
    let result = [];
    function dfs(path, remain, pick_remain, index){
        if (result.length == 2) return;
        if (remain == 0 && pick_remain ==0){
            result.push([...path]);
            return;
        }
        if (remain<0 || pick_remain<0) return;

        for (let i = index; i < coins.length; i++){
            path.push(coins[i])
            dfs(path, remain - coins[i], pick_remain -1, i);
            path.pop();
        }
    }
    dfs([], target, pick, 0)
    return result;
}
