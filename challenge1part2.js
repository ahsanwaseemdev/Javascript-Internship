/*
Coding Challenge #1


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