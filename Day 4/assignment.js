/*
//LECTURE: The switch Statement

let language=prompt("Enter Language")

switch (language) {
    case "chinese":
    case "mandarin":
               console.log("MOST number of native speakers!")
        break;

    case "spanish":
               console.log("2nd place in number of native speakers")
        break;    

    case "english":
               console.log("3rd place")
        break; 

        case "hindi":
               console.log("Number 4")
        break; 

        case "arabic":
               console.log("5th most spoken language")
        break; 
        

    default:
        console.log("I dont Know about this")
        break;
}



//LECTURE: The Conditional (Ternary) Operator

const country='pakistan'
const countyrpopulation=22
console.log(`${country}'s Population ${countyrpopulation>33? 'above':'below'} average`)




//LECTURE: Functions

function describeCountry(country,population,capitalCity)
{
      return `${country} have ${population} Million people and its capital is ${capitalCity}`
}

let country1=describeCountry('pakistan',24,'Islamabad')
let country2=describeCountry('Canada',12,'ottawa')
let country3=describeCountry('Finland',6,'Helsinki')

console.log(country1)
console.log(country2)
console.log(country3)



//LECTURE: Function Declarations vs. Expressions


let worldpopulation=7900

function percentageOfWorld1(population)
{
       return (population/worldpopulation)*100
}

let china=percentageOfWorld1(1441)
let pakistan=percentageOfWorld1(24)
let Canada=percentageOfWorld1(10)
console.log(china)
console.log(pakistan)
console.log(Canada)



function percentageOfWorld2(population)
{
       return (population/worldpopulation)*100
}

let india=percentageOfWorld1(1400)
let America=percentageOfWorld1(340)
let palestine=percentageOfWorld1(5)
console.log(india)
console.log(America)
console.log(palestine)



//LECTURE: Arrow Functions



let worldpopulation=7900
let percentageOfWorld3=(population)=> population/worldpopulation*100

let india=percentageOfWorld3(1400)
let America=percentageOfWorld3(340)
let palestine=percentageOfWorld3(5)
console.log(india)
console.log(America)
console.log(palestine)



//LECTURE: Functions Calling Other Functions


1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice



worldpopulation=7900
let percentageOfWorld1= (population)=> population/worldpopulation*100

function describePopulation(country,population)
{

let averagepopulation=percentageOfWorld1(population)
return `${country} has ${population} Million People which is About ${averagepopulation}% of the world`;

}

let india=describePopulation('india',1400)
let America=describePopulation('America',340)
let palestine=describePopulation('palestine',5)
console.log(india)
console.log(America)
console.log(palestine)

*/
