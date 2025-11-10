/**
 * Comparision
 */

//Same output will be generated cause it convert it into same datatype

// console.log("2">1);
// console.log("02">1);
// console.log(1<"2");
// console.log(2<1);
// console.log(1<2);

//Rule :mostly compare with sametype of datatype

// console.log(null == 0); //equality check works differnetly 
// console.log(null > 0); //fasle - convert null into 0 
// console.log(null >= 0); //true - converts null to 0

//undefined compared with anything except 2 cases gives false
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

console.log(undefined == null); //true
console.log(undefined === undefined); //true

/**
 * strict equality === "no comversion of datatypes and comparing"
 * loose equality == "used when use of coersion" "conversion in same datatype & comapring"
 */

/**
 * NaN compared with anything gives value false 
 * null == undefines //true special case 
 * 
 * conversion in == 
 * objects -> primitive datatype while comparing
 * boolean -> number
 * strings -> number 
 * 
 * === "always us this over ==, will avoid coersion bug"
 * 
 * for === it will compare the datatype and value 
 * fasle here is != 0
 * NaN always gives false 
 * null === undefined -> false 
 * 
 */






