/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀 



//§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
let calcAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3
}

let avgDolphins=calcAverage(44,23,71)
let avgKoalas=calcAverage(65,54,49)
function checkWinner(avgDolphins,avgKoalas) {
    if (avgDolphins>=2*avgKoalas) {
        let victorypoints= avgDolphins-avgKoalas;
        console.log(`Dolphins Win with ${victorypoints} Points ,${avgDolphins} vs. ${avgKoalas}`)
    }
     else if(avgKoalas>=2*avgDolphins) {
        let victorypoints= avgKoalas-avgDolphins;
        console.log(`Koalas Win with ${victorypoints} Points, (${avgKoalas} vs. ${avgDolphins})`)
    }

}

checkWinner(avgDolphins,avgKoalas)


//§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let calcAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3
}

let avgDolphins=calcAverage(85,54,41)
let avgKoalas=calcAverage(23,34,27)
function checkWinner(avgDolphins,avgKoalas) {
    if (avgDolphins>=2*avgKoalas) {
        let victorypoints= avgDolphins-avgKoalas;
        console.log(`Dolphins Win with ${victorypoints} Points ,${avgDolphins} vs. ${avgKoalas}`)
    }
     else if(avgKoalas>=2*avgDolphins) {
        let victorypoints= avgKoalas-avgDolphins;
        console.log(`Koalas Win with ${victorypoints} Points, (${avgKoalas} vs. ${avgDolphins})`)
    }

}

checkWinner(avgDolphins,avgKoalas)
*/
