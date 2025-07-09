/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

let markMass = 78, markHeight = 1.69;
let johnMass = 92, johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight * johnHeight);
let result1 = markBMI > johnBMI;

console.log("Mark BMI:", markBMI, "John BMI:", johnBMI);
console.log("According to Data 1: Is Mark's BMI greater than John's?", result1);

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markMass2 = 95, markHeight2 = 1.88;
let johnMass2 = 85, johnHeight2 = 1.76;

const markBMI2 = markMass2 / (markHeight2 ** 2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
let result2 = markBMI2 > johnBMI2;

console.log("According to Data 2:", "Mark BMI:", markBMI2, "John BMI:", johnBMI2);
console.log("Is Mark's BMI greater than John's?", result2);

// Data 1:
console.log("Data 1");
console.log("Who has the higher BMI?");
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
    console.log(`Both have Equal BMIs (${johnBMI}) , (${markBMI})`);
}

// Data 2:
console.log("Data 2");
console.log("Who has the higher BMI?");
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else if (markBMI2 < johnBMI2) {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
} else {
    console.log(`Both have Equal BMIs (${johnBMI2}) , (${markBMI2})`);
}
