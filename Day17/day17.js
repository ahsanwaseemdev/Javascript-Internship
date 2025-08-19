const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, index, map) {
  console.log(index, value);
});
//with Sets
const currenciesUnique = new Set(["usd", "GBP", "USD", "usd", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(value, value);
});

/*

//Looping Array with ForEach Loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let Deposits = [];
let Widthrawals = [];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    Deposits.push(`${i + 1} Deposited: ${movement}😎`);
  } else {
    Widthrawals.push(`${i + 1} Widthraw: ${Math.abs(movement)}🤑`);
  }
}

console.log(Deposits.join("\n"));
console.log(Widthrawals.join("\n"));

//With Foreach
console.log(`............FOREACH...........`);
let DepositsForEach = [];
let WidthrawalsForEach = [];
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    DepositsForEach.push(` Deposited:${i + 1}: ${movement}😎`);
  } else {
    WidthrawalsForEach.push(` Widthraw: ${i + 1}: ${Math.abs(movement)}🤑`);
  }
});
console.log(DepositsForEach.join("\n"));
console.log(WidthrawalsForEach.join("\n"));
//,.................End Foreach

//Arrays Methods

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // .. New syntax/Method
//Getting last Element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr);
//New Method of getting last element
console.log(arr.at(-1));

console.log("Ahsan".at(2));

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(0, -1));

//Splice Method
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

//Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "n"];
console.log(arr2.reverse());
console.log(arr2);

//Cancat
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//Join
console.log(letters.join(" - "));

//UnShift
let arr3 = ["Ahsan", "Waseem", "Rajpoot"];
console.log(arr3.unshift(2));
console.log(arr3);

// Closure in Practice
//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// For h function
h();
f();

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now bording all ${n} Passengers`);
    console.log(`There are 3 GROUPS, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start bording in ${wait}seconds`);
};
boardPassengers(180, 3);
*/
