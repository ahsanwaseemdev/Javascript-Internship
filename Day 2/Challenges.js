//§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

let marksmass=78,marksheight=1.69;
let Johnmass=92, jhonheight=1.95;

const MarkBMIs= marksmass/marksheight**2
const JhonBMIs=Johnmass/(jhonheight*jhonheight)
let final=MarkBMIs>JhonBMIs
console.log("Mark BMIs",MarkBMIs,"Jhon BMIs:",JhonBMIs)
console.log("According to Data 1","Is Mark BMIs is Greater then Jhon",final)

//§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let massmark=95,heightmarks=1.88;
let massjhon=85, heightjhon=1.76;

const BMIsMarks= massmark/heightmarks**2
const BMIsjhon=massjhon/(heightjhon*heightjhon)
let final2=BMIsMarks>BMIsjhon
console.log("According to Data 2","Mark BMIs:",BMIsMarks,"Jhon BMIs:",BMIsjhon)
console.log("Is Mark BMIs is Greater then Jhon",final2)
