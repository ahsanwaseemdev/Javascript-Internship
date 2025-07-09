/*

//LECTURE: Strings and Template Literals
let Portugal=11
let description=`Portugal is in Europe,and its ${Portugal} million people speak portugee`
console.log(description)

//LECTURE: Taking Decisions: if / else Statements
let pakistan=24
if (pakistan>33) {
    console.log("'Portugal's population is above average'")
} else {
    console.log("'Portugal's population is 22 million below average'")
}

//LECTURE: Type Conversion and Coercion

console.log('9'-'5')
console.log('19'-'13'+'17')
console.log('19' - '13' + 17)
console.log(123<'57')
console.log(5 + 6 + '4' + 9 - 4 - 2)

//LECTURE: Equality Operators: == vs. ===

let numNeighbours=Number(prompt('How many neighbour countries does your country have?'))
let pakNeighbours=4;
 if (pakNeighbours==1) {
    console.log("Only one border")
 }
  else if( pakNeighbours>1)
    { 
    console.log("More then 1 border")
     }
     else{
        console.log("No Neighbours")
     }  


// LECTURE: Logical Operators

let countrypopulation=prompt("Enter Country Population")
let PortugalPopulation=11
let country=prompt("Enter Country Name")
let PortugalLanguage="Portuguese"
let countrylanguage=prompt("Whats Language of Country")
let island=false

if (countrylanguage=="English" || countrylanguage=="english" && countrypopulation<50 && island==false) {
    console.log("You should live in :)",country)
} else {
    console.log(`${country} not Meet Your criteira`)
}



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

*/
