/*
const dogs = [
  { weight: 22, curFood: 284, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
let dogEatingOK = [];
dogs.forEach((dog, i) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);

  if (dog.owners.includes("Sarah")) {
    if (
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
    ) {
      console.log(`Find at index ${i}: ${dog.owners[0]}  DOG Eats Normally`);
    } else {
      console.log(`Find at index ${i}: ${dog.owners[0]} DOG Eating Too much`);
    }
  }
  if (dog.curFood > dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
  } else if (dog.curFood === dog.recommendedFood) {
    dogEatingOK.push(dog.owners);
  } else {
    ownersEatTooLittle.push(dog.owners);
  }
});

console.log(
  `Dog EATING OK of Owners: ${dogEatingOK
    .flatMap((owner) => owner)
    .join(" | ")}🥰`
);

console.log(
  `Too little Dogs eating owners: ${ownersEatTooLittle
    .flatMap((owner) => owner)
    .join(" | ")}😣`
);
console.log(
  `Too much Dogs eating owners: ${ownersEatTooMuch
    .flatMap((owner) => owner)
    .join(" | ")}🥱`
);

const shallowDog = dogs
  .slice()
  .sort((a, b) => (a.recommendedFood > b.recommendedFood ? 1 : -1));
console.log(shallowDog);
*/
