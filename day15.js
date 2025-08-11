"Use strict";

/*
const flight = "LH123";
const ahsan = {
  name: "Ahsan WASEEM",
  passport: 23432343234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH99";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport == 23432343234) {
    alert("Check IN");
  } else {
    alert("WRONG pasport");
  }
};
checkIn(flight, ahsan);
console.log(flight);
console.log(ahsan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 2000000000000);
};

newPassport(ahsan);
checkIn(flight, ahsan);

//Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 Way
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 2);
createBooking("LH1234", 2, 4000);


const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase() + " " + str.slice(3);

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${
    type.startsWith("_Delayed") ? "🔴" : ""
  } Type: ${type.replaceAll("_", " ")}\n From: ${getCode(
    from
  )} \n To: ${getCode(to)} \n Time: ${time.replace(":", "h ")}m`.padStart(36);
  console.log(output);
}


const airline = "Tap Air Portugal";
const plane = "A320";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "AhSan";
const passengerlower = passenger.toLowerCase();
const correctpassenger =
  passengerlower[0].toUpperCase() + passengerlower.slice(1);

console.log(passenger);
console.log(passengerlower);
console.log(correctpassenger);

//Comparing Emails
const email = "ahsanwaseem398@gmail.com";
const loginemail = " Ahsanwaseem398@Gmail.com \n";

// const loweremail = loginemail.toLocaleLowerCase();
// const trimmedemail = loweremail.trim();
const normalizedEmail = loginemail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

//Replacing
const priceGB = "286,98#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");
console.log("Converted price is:", priceUS);

//Split & Join

const myname = "Ahsan Waseem".split(" ");
console.log(myname);
const [firstname, lastname] = myname;
const newname = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newname);
if (lastname == "Waseem") {
  console.log("Last Name");
}

if (myname.includes("Ahsan")) {
  console.log(`My name is ${myname}`);
}

const capitilizeName = function (name) {
  const names = name.split(" ");
  let UpperNames = [];
  for (const n of names) {
    //UpperNames.push(n[0].toUpperCase() + n.slice(1));
    UpperNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(UpperNames.join(" "));
};
capitilizeName("ahsan waseem");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(23, "+").padEnd(30, "-")); //add + in starter to make length 25
console.log("Ahsan".padStart(20, "=").padEnd(30, ">)"));

const maskCreditCard = function (number) {
  const str = number + " ";
  const last = str.slice(-5);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(387487236434435));

//Repeat
const message2 = "Bad Weather......All Departures Delayed...";
console.log(message.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} Planes in Line ${"✈".repeat(n)}`);
};
planesInLine(5);

*/
