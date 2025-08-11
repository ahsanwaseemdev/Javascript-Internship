/*
"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[6]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 Enhanced Object Literals
  openingHours,
  //ES6 Method not need : this two dots symbol
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderpizza(mainthing, ...otherthings) {
    console.log(mainthing);
    console.log(otherthings);
  },
};

const question = new Map([
  ["question", "What is Best Programming language in the world"],
  [1, "C"],
  [2, "JAvA"],
  [3, "jAVASCRIpt"],
  ["correct", 3],
  [true, "Correct ✔😃"],
  [false, "Wrong 😒"],
]);

const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);
console.log("1:", airline.indexOf("r"));
console.log("2:", airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ")));

const checkmiddleseat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You Got Middle Seat 😒");
  } else {
    console.log("You are the luckiest ONE 🌹");
  }
};
checkmiddleseat("133b");
checkmiddleseat("123B");

//..........Maps Iteration.............
console.log(question);
const hoursMAP = new Map(Object.entries(openingHours));
console.log(hoursMAP);
console.log(Object.entries(openingHours));

for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key}:${value}`);
}
let answer = Number(prompt("Your Answer"));
console.log(answer);
console.log(question.get(question.get("correct") == answer));

//..........Maps...........
const rest = new Map();
rest.set("name", "Ahsan Waseem");
rest.set(1, "Ashir");
rest.set(2, "Arslan");
rest.set(3, "Imran");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("OPen", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are Close :D");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);

//.........Sets........
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Risotto",
  "pasta",
  "pizza",
]);
console.log(orderSet);
console.log(new Set("ahsan"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread"));
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);
const staff = ["waiter", "chef", "Manager", "chef", "waiter"];
const staffunique = [...new Set(staff)];
console.log(staffunique);
*/
