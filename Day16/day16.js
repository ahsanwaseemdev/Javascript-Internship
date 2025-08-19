"use strcit";

/*

//IIFE
(function () {
  console.log("This Will Never Work Again!😢");
})();

//2nd Method
(() => console.log(`This Will also never run again`))();

//Lecture3
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //..Booking Function
  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} fligh ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline} fligh ${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss",
  iataCode: "SW",
  bookings: [],
};

//with event listners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// let btn = document.querySelector("#buy");
// btn.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
//value+value*0.23
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

//............with higher order function..........
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(500));
console.log(addTaxRate(0.23)(500));

const book = lufthansa.book;
// book(23, "Sarah Williams"); this is wrong method
book.call(eurowings, 23, "Sarah Williams");
book.call(lufthansa, 43, "Ali Rehman");
console.log(eurowings);
console.log(lufthansa);
console.log(lufthansa);
lufthansa.book(234, "Ahsan Waseem");
lufthansa.book(1122, "Jonas Smith");
//.........Call Method.............

book.call(swiss, 23444, "Ahsan Ali");
console.log(swiss);
console.log(eurowings);
//........Apply Method.............
const flightData = [585, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
console.log(swiss);
// Bind Method its new here and easy first declare all and then use
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa, 60); //2 properties set automatic
const bookLX = book.bind(swiss);
bookEW(23, "steven");
bookLH("Jamal"); //this 2 have already set
bookLX(23, "Adil");
*/
/*





const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet("Hey");
greeter("Ahsan");
greet("hello")("Ahsan");

//Greet with arrow function
let greet2 = (greeting2) => (name2) => console.log(`${greeting2} ${name2}`);

greet("GoodBye")("waseem");

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstword, ...otherwords] = str.split(" ");
  return [firstword.toUpperCase(), ...otherwords].join(" ");
};
//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("My name is Ahsan Waseem", oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log("👍");
};

document.body.addEventListener("click", high5);
["jonas", "Martha", "Adam"].forEach(high5);

let namecasechange = (name) => (lastname) =>
  console.log(`${name} ${lastname}`.toLocaleUpperCase());

namecasechange("ahsan")("waseem");
*/
