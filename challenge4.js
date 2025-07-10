/*

Coding Challenge #4

let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
let tips=[];
let totals=[];
 
for(let i=0;i<bills.length;i++)
{
   
    tip=bills[i]>=50 && bills[i]<=300? bills[i]*0.15:bills[i]*0.20;
     tips.push(tip);
  totals.push(bills[i] + tips[i]);

    console.log(`Bill Amount=${bills[i]} tip=${tips[i]} and, total=${totals[i]}`)
};

let arr=[100,102,103,104,105];
let sum=0;
 function calcAverage() {
        for(let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
        let average=sum/arr.length
        return average
    }
    console.log(calcAverage())

    */
