/*
"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const scoredplayers = game.scored;
let {
  odds: { team1, x: draw, team2 },
} = game;
for (const [index, player] of scoredplayers.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Calculate the average odd
const oddsvalues = Object.values(game.odds);
console.log(oddsvalues);
let sum = 0;
for (const odd of oddsvalues) sum += odd;
const average = sum / oddsvalues.length;
console.log(average);

//4.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team == "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
*/

