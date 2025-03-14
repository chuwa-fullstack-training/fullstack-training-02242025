/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    solutions = [];
    for (let c1 = 0; c1 <=48; c1++){
        for(let c5 = 0; c5+c1 <=48; c5++){
            for(let c25 = 0; c25+c5+c1 <= 48; c25++){
                for(let c50 = 0; c50+c25+c5+c1 <= 48; c50++){
                    if (c1 + c5*5 + c25*25+ c50*50 === 100){
                        solutions.push([c1, c5, c25, c50]);
                        if (solutions.length === 2){
                            printSol(solutions);
                            return;
                        }
                    }
                }
            }
        }
    }

}
function printSol(solutions){
    solutions.forEach(element => {
        console.log(`1c: ${element[0]}, 5c: ${element[1]}, 25c: ${element[2]}, 50c: ${element[3]}`);
    });
}
pickCoins();
