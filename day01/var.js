
const accountId = 143;
let accountEmail = "snehaanakil@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur" //not good syntax 
let accountState;

//accountId = 1234; not allowed in const as it cannot change its value after initializing 
console.log(accountId);  //143

// differnece bet let and var is block & functional scope only use let 
accountEmail = "abdcd@gmail.com" //this is let and it changes it value after initialization  
console.log(accountEmail); //abdcd@gmail.com

accountPassword = "98765";
console.log(accountPassword); // same happens with var as like let 

console.log(accountState);//undefined if not initilaized it gives error

console.log(accountCity); //Jaipur

//table is a method of console
console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);
