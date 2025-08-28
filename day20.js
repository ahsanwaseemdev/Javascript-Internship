/*
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements2 = [200, 450, 70, 1300];
console.log(movements);
//Equality
console.log(movements.includes(-130));
//Conditons
const anyDeposites = movements.some((mov) => mov > 1000);
console.log(anyDeposites);

//Every if all movements greatewr than 0
console.log(movements.every((mov) => mov > 0));
console.log(movements2.every((mov) => mov > 0));

//separate callback
const deposit = (mov) => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
//All values into one array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
//console.log(arr.flat());
//This "2" convert level to 2
const arrDeep = [[[1, 2, 3], [4, 5, 6], 7, 8, 9]];
//console.log(arrDeep.flat(2));
//ARRAys New Emptyy Array MEthod
const x = new Array(7);
console.log(x);

//1 means the value and 0 means starting index for filling
x.fill(1, 0, 4);
console.log(x);

//Array.from
const y = Array.from({ length: 100 }, (crr, i) => i + 1);
console.log(y);
/////////////////////////
const converTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);
  const expecptions = [
    "a",
    "an",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
    "and",
  ];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (expecptions.includes(word) ? word : capitzalize(word)))
    .join(" ");
  return capitzalize(titleCase);
};
console.log(converTitleCase("this is a nice title"));
console.log(converTitleCase("this is a LONG title"));
console.log(converTitleCase("this is another title with an Example"));
