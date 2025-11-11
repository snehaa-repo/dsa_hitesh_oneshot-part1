/**
 * Memory have two types 
 * Stack memory and Heap memory 
 * stack : we are getting copy i.e. call by value (primitive types)
 * 
 * Heap Memory : call by reference value i.e non-primitive 
 * 
 */

/**
 * ________________________                             _______________________
 * |                       |                            |                      |
 * |_______________________|                            |                      |
 *  _______________________                             |                      |        
 * |                       |                            |                      |
 * |_______________________|                            |                      |
 * ________________________                             |        HEAP          |
 * |                       |                            |                      |
 * |_______________________|                            |                      |
  * _______________________                             |                      |
 * |                       |                            |                      |
 * |_______________________|                            |______________________|
 * 
 * Stack is this one above another                      Heap is this full one block of memory 
 * 
 
 */

let myName = "snehaa"
let anothername = myName;

anothername = "pikku";
console.log(anothername);
console.log(myName);

let user={
    email : "user@google.com",
    upi : "1234@upi",
}

let userOne = user;
userOne.email = "abcd@google.com"
console.log(user.email); //accessing objects using .
console.log(userOne.email);

/**
 * Here is a concept in primitive datatypes is we will assign the value but after that if we wnated to assign the value 
   then we will be getting stack (varibles are saved) now when this is saved then we will be getting a copy of it not original value 
   then after getting copied value the original var value remains same thorughout 

   Meanwhile working with Heap (non-primitive) values we have to start assigning then the variables are assign into it ! 
   Then if we want to assign the value to another variable then it will change the original value and we will not be accessing 
   the value of before !

   Check out the output and understand !
 * 
 */
