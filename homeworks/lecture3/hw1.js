/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const set = new Set();
    const coins = [1, 5, 25, 50];
    const stringifyResult= (arr) => arr.map((count, i) => `${coins[i]}c: ${count}`).join(", ");

    const dfs=(arr, sum, count, currentIndex) =>{
        if(sum > 100 || count > 48) return;
        if(count === 48 && sum === 100){
            set.add(stringifyResult(arr));
            if (set.size >= 2) return;
        }
        for(let i = currentIndex; i < coins.length; i++){
            arr[i]++;
            dfs(arr, sum + coins[i], count+1, i);
            arr[i]--;
            if (set.size >= 2) return;
        }
    }
    dfs(new Array(4).fill(0), 0, 0, 0);
    return set;
}

const res = pickCoins();
res.forEach((value)=>console.log(value));