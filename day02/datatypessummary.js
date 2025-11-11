/**
 * Primitive Datatypes (call by value : whenever it is shared it is copied not original value is passed ):
 * Number
 * Strings
 * Boolean
 * null
 * undefined
 * Symbol(making value unique)
 * BigInt (scientific value which is big in number use this)
 * 
 * 
 * 
 * Non-Primitive (call by reference : directly allocting memory reference)
 * Array
 * Object
 * Functions
 */

/**
 * js is static typed or dynamic typed language ?
 * It is dynamic typed programming language as it do not declare the datatype of the variable it will convert the datatype at the time of execution 
 * 
 * example below
 * 
 */

// let x= 10;
// a =20;
// b ="abcfd"
// console.log(typeof(x));//number
// console.log(typeof a,typeof b); //number string 

//example of each datatype
const score =100; //number
const scoreValue = 100.3//number
console.log(typeof(scoreValue));

const loggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail; //undefined 

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 793450823489234871234n;

//Reference (Non-Primitive typed)
//Array, Objects, Funcions 

const hero = ["shaktiman", "tigershrof", "hitman"]; //array

let myInfo ={
    name : "snehaa",
    age : 22,
} //objects key value pair 
console.log(myInfo.age) //to get the value or applying methods we should be using .method or .variable

//Functions 
const myFunction = function(a,b){  //here a, b are arguments 
    console.log(a+b);
    console.log("hello world");
    
}
myFunction(18,2); //function calling and arguments passing 

/**
 * typeof bigInt -> bigInt
 * typeof null -> objects
 * undefined -> undefined
 * funtion -> object funtion 
 * all non-primitive typeof datatype is objects 
 * NaN -> number 
 * undeclared -> undefined 
 */

console.log(typeof(bigNumber));

