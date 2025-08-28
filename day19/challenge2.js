/*
const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];
const CheckDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const Dogs = dogsJuliaCorrected.concat(dogsKate);
  Dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult🦮, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an Puppy🐶, and is ${dog} years old`);
    }
  });
};
//CheckDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

let adultDogsAges = [];
const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAges.filter((age) => age >= 18);
  console.log(adultDogs);
  const avg = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return avg;
};
const avg1 = calcAverageHumanAge(Data1);
const avg2 = calcAverageHumanAge(Data2);
console.log(avg1);
console.log(avg2);
*/
