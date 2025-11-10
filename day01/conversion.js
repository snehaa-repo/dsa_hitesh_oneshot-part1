/**
 * Conversion & Operation
 */


let score = "33abc";
console.log(typeof score);//1 type to typeof 
console.log(typeof(score)); //2nd type to method declaration in it !

//Converting into Number
let valueInNumber= Number(score); //as like number we can use other datatypes and score is can be converted
console.log(typeof(valueInNumber)); //number

//changed value to 33abc as it is not a number checking wehther what does that gives as a type

console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); //NaN (Not a Number) cause it includes numbers and char

//checking for value Null
let valuecheck = null;
console.log(typeof valuecheck);
let valueInNumber1 = Number(valuecheck);
console.log(valueInNumber1); //0 which means no value is stored but var is declared 

//checking for undefined
let valuecheck1 = undefined
console.log(typeof(valuecheck1));
let valueInNumber2 = Number(valuecheck1);
console.log(valueInNumber2);//NaN (not a number) 

/*
 * For boolean true = 1
 * for boolean false = 0
 * for string = NaN 
 * for undefined = NaN
 * for null = 0
    */

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

/**
 * For converting into boolean use Boolean(var name);
 * 1 => true
 * 0 => false
 * other value =>true
 * "" => false
 * " " => true
 * "snehal" => true
 * null and undefined => false 
 */


let convertNumber = undefined;
console.log(typeof convertNumber);//number
let stringIsLogged = String(convertNumber);
console.log(typeof stringIsLogged); //string 
console.log(stringIsLogged);//1234
/**
 * null => null
 * undefined => undefined 
 */





