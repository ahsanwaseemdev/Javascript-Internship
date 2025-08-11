// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
//   [weekdays[6]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   //ES6 Enhanced Object Literals
//   openingHours,
//   //ES6 Method not need : this two dots symbol
//   order(starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   orderpizza(mainthing, ...otherthings) {
//     console.log(mainthing);
//     console.log(otherthings);
//   },
// };

// const rest1 = {
//   name: "Capri",
//   numguest: 20,
// };

// if (restaurant.openingHours && restaurant.openingHours.fri)
//   console.log(restaurant.openingHours.fri.open);

//with optional chain
// console.log(restaurant.openingHours?.mon?.open);
//Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`on ${day} we open at ${open}`);
// }
//Methods
// console.log(restaurant.order?.(2, 1) ?? "Method does not exist");
// console.log(restaurant.orderresturant?.(0, 1) ?? "Method does not exist");

//Arrays
// const user = [
//   {
//     name: "Ahsan",
//     email: "ahsanwaseem398@gmail.com",
//   },
// ];
// console.log(user[0]?.email ?? "User array empty");
// console.log(user[0]?.class ?? "User array empty");
