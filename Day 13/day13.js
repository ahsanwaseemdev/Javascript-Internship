"use strcit";

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

const rest1 = {
  name: "Capri",
  numguest: 20,
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(restaurant);
// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };
//.........OR Assignment Operator.............
// rest1.numguest = rest1.numguest || 10;
// rest2.numguest = rest2.numguest || 10;
// rest1.numguest ||= 10;
// rest2.numguest ||= 10;
// console.log(rest1);
// console.log(rest2);

//.........Nullish Assignment Operator(null and undefined).............
// rest1.numguest ??= 10;
// rest2.numguest ??= 10;

// rest2.owner = rest2.owner && "<ANONYMOUS>";
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest1.owner && "<ANONYMOUS>";
// rest2.owner && "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);

// restaurant.orderpizza("mushrooms", "onion", "olives", "spinach");

//Arrays
// const [food1, , food2, ...others] = [
//   ...restaurant.mainMenu,
//   restaurant.starterMenu,
// ];
// console.log(food1, food2, others);

//Objects
// const { fri, ...otherdays } = restaurant.openingHours;
// console.log(otherdays);

//functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 4, 6, 7);
// add(8, 2, 3, 4, 5, 6, 7);
// const x = [2, 3, 4];
// add(...x);
