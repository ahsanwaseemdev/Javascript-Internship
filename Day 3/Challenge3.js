//Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let Dolphinsavg1=(96+108+89)/3
let Koalasavg1=(88+91+110)/3
console.log(Dolphinsavg1,Koalasavg1)
if (Dolphinsavg1>Koalasavg1) {
    console.log("Dolphin is Winner")
} else if(Koalasavg1>Dolphinsavg1){
 console.log("Koalas is Winner")
}
else{
    console.log("Match Darw Because Both have the same score")
}


//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

let Dolphinsavg2=(97+112+101)/3
let Koalasavg2=(109+95+123)/3
console.log(Dolphinsavg2,Koalasavg2)

if (Dolphinsavg2>Koalasavg2) {
    console.log("Dolphin is Winner")
} else if( Koalasavg2>=100 && Koalasavg2>Dolphinsavg2){
 console.log("Koalas is Winner")
}
else{
    console.log("Match Darw Because Both have the same score")
}


//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let Dolphinsavg3=(97+112+101)/3
let Koalasavg3=(109+95+106)/3
console.log(Dolphinsavg3,Koalasavg3)

if (Dolphinsavg3>Koalasavg3 && Dolphinsavg3>=100) {
    console.log("Dolphin is Winner")
} else if( Koalasavg3>=100 && Koalasavg3>Dolphinsavg3){
 console.log("Koalas is Winner")
}
else if(Koalasavg3==Dolphinsavg3 && Koalasavg3>=100 && Dolphinsavg3>=100){
    console.log("Both Win the Match")
}
else{
    console.log("Both Loose the match")
}
