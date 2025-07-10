/*
LECTURE: Iteration: The for Loop

let voters = [];
for (let i = 1; i <= 50; i++) {
  console.log(`Voter No:${i} is currently voting `);
}

LECTURE: Looping Arrays, Breaking and Continuing

let worldpopulation = 7900;
let populations = [10, 1441, 332, 83];
let percentages2 = [];
let percentageOfWorld1 = (population) => (population / worldpopulation) * 100;
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

LECTURE: Looping Backwards and Loops in Loops

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbours: ${listOfNeighbours[i][j]}`);
  }
}

LECTURE: The while Loop

let percentages3 = [];
let i = 0;

while (i < populations.length) {
  let percent = percentageOfWorld1(populations[i]);
  percentages3.push(percent);
  i++;
}

console.log("Percentages3:", percentages3);

*/
