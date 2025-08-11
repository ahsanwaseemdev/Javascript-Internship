/*
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
//with array
const properties = Object.keys(openingHours);
//console.log(properties);

//with Loop
for (const day of weekdays) {
  if (restaurant.openingHours[day]) {
    const { open, close } = restaurant.openingHours[day];
    console.log(`${day}: Open from ${open} to ${close}`);
  } else {
    console.log(`${day} is Closed Now`);
  }
}
*/
