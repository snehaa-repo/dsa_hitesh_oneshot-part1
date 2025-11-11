const name = "snehaa";
const repoCount = 12;

// console.log(name + repoCount + "Value");
// this aboove is old and not used syntax

//backticks `` and before accesing any variable ${varible name}
//inside of ${variable name.method} we can add any methods

console.log(`Hey there my Name is ${name} and total repo Count of mine is ${repoCount}`);

//another objects method to decalre strings can copy and paste in browser  
const newString = new String("hello world")
console.log(newString); //[String: 'hello world']

//in browser it will show length and converting as a array it gets its position number and also has prototype

console.log(newString[1]); //e
console.log(newString.__proto__); //{}   //proto is prototypes i.e methods

console.log(newString.length); //1

//toLowerCase and toUpperCase is a function itself and it will never change original value cause its string (call by value)
console.log(newString.toLowerCase());  //hello world
console.log(newString.toUpperCase());  //HELLO WORLD

//chatAt will be telling us which position has what char
console.log(newString.charAt(1)); //e

//indexOf will be telling us char is at which position
console.log(newString.indexOf('r')); //8

//If we want to cut the value & assign into new var then substring is used (start,end-1)
const newString1 = newString.substring(0,4) //substring does not obey -ve values
console.log(newString1); //hell


//slice(start,end-1(will be printed)) (-ve index counts from the end of array) (non-destructive value and does not change original string array)
const anotherString = newString.slice(-11,7) //-11 means start from end as -1 then 1st char is -11 and then end is 7 which means from front its 7-1=6
console.log(anotherString);

//trim() will be used to delete extra spaces 
const spaceExtra = "      snehaa     " 
console.log(spaceExtra.trim());

//trimEnd() delete extar spaces at last 
const spaceExtraEnd = "snehaa     " 
console.log(spaceExtraEnd.trimEnd());

//trimStart() delete extra spaces of Start values 
const spaceExtraStart = "      snehaa"
console.log(spaceExtraStart.trimStart());

//replace method does not chnage its original values 
let newStringreplace = "hello world";
//replace (old, new)
const replaceValue = newStringreplace;
console.log(replaceValue.replace("hello", "snehaa"));

let replaceAll1 = "hey hey"
//replaceAll()
const replaceAllValues = replaceAll1;
console.log(replaceAllValues.replaceAll("hey", "snehaa"))

//includes() used to check whether this word is exists or not !
console.log(replaceValue.includes('heu'));  //false
console.log(replaceValue.includes('hello')); //true

//split it will give us a array form of separated words if there is comma or something special case then use it inside the brackets and get it spilt into half or by cases!
const spiltString = "banana,apple,art,spice"
console.log(spiltString.split(','));

const spiltString1 = "This is a 'STring' method. which name as a 'spilt method'"
console.log(spiltString1.split('.'));

console.log(spiltString1.split('')); //if you wanted to spilt it into all char then use '' only 0

//splice() (start(from to start),remove(delete the value from start), item1 ,item2 , ... (adding the values)) it shoukd separately assign .splice not in console as above 
const spliceValue = ["a","b","c","d","e"];
spliceValue.splice(-3,2,"x","z");
console.log(spliceValue);
// It changes the original value i.e it modifies the value


