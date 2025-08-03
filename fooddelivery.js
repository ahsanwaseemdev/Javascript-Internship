"use strict";

/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },

  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
};
//...............................Destructring objects..........................
const { openingHours } = restaurant;
let a = 122,
  b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
//console.log(a, b);

const {
  fri: { open: o },
} = openingHours;
console.log(o);

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// const { sun } = openingHours;
// console.log(sun);

//...............................Destructring Arrays..........................
// const [start, main] = restaurant.order(2, 0);
// console.log(start, main);

// const nested = [2, 4, [5, 6]];
// const [i, j, k] = nested;
// console.log(i, j, k);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;

// //......Difficult Method
// // let temp = main;
// // main = secondary;
// // secondary = temp;

// //......Difficult Method
// [secondary, main] = [main, secondary];

// console.log(main, secondary);

const person = {
  name: "Ahsan",
  age: 20,
  address: {
    city: "Taxila",
    zip: 47080,
  },
  hobbies: ["Coding", "Cricket"],
};

const {
  address: { city: zone, zip: kip },
} = person;
console.log(zone, kip);

const {
  hobbies: [hobby1, hobby2],
} = person;
console.log(hobby1, hobby2);

const { name: userName, ...otherInfo } = person;
console.log(userName);
console.log(otherInfo.address.city);
console.log(otherInfo.hobbies[1]);

function printUser({ name, age, address: { zip: code } }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${code}`);
}
printUser(person);

*/
