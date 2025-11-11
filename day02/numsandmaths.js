const score = 400;

const balance = new Number(100.2);
// console.log(balance);

//inspect and check its prototype

// console.log(balance.toString().length);

// console.log(balance.toFixed(3)); //100.200 usually ecomerce websites, it gives us digits after point

const otherNumber = 231.8976;
// console.log(otherNumber.toPrecision(3)); //231 - round off the value and give sthe o/p

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); //10,000,000- it will give us how many digits are in total in ,

//for indian 
// console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000 it will not gives us US but Indian

//we can use MIN_VALUE and MAX_VALUE it will show us what will be minimum value to store and max value to store & they are not a function omly methods 
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// +++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++++++++ 

console.log(Math);

//abs : absolute value 
// console.log(Math.abs(-4));//negative will change into positive 

// console.log(Math.round(4.6)); //round of 

// console.log(Math.ceil(6.3)); // upper value will be chosen after round off

// console.log(Math.floor(9.6)); //lower value will be chosen

// console.log(Math.min(-4,3,5,6));

// console.log(Math.max(-4,3,6,9));

console.log(Math.random()); //(it will be always between 0 to 1 )and always different

console.log(Math.random()*10); //shifts it to 1 back

console.log(Math.random()*10 +1 ); //it can be 0. also so to avoid this use +1 

// 0.04567477076431614
// 0.9591620923683086
// 4.196634365774469

console.log((Math.random()*10)+1); //values will be confirmed
console.log(Math.floor(Math.random()*10)+1); //if we need lower value and single value 

//trick min and max define
const max = 10
const min = 5
console.log((Math.random() *(max-min +1))) //multiple digit value and if we need to get between min and max but it does not goes with min so next step

//but we need 1 digit value 
console.log(Math.floor(Math.random() *(max-min +1)+min)) //singlular value with lower value and if we need between min and max usethis formula 

