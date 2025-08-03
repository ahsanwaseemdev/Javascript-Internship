// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //2.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 3. Goalkeeper and field players for Bayern Munich
// const [gk1, ...fieldPlayers] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// //4.
// let playersfinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(playersfinal);

// //5.
// let {
//   odds: { team1, x: draw, team2 },
// } = game;

// //6.
// let printgoal = function (...players) {
//   console.log(`${players.length} Goals are Scored`);
// };

// printgoal(...game.scored);

// //7.

// team1 < team2 && console.log("Team one is more likely to win");
// team1 > team2 && console.log("Team two is more likely to win");
