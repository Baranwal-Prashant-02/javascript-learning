/*
DATA TYPES are categorised on the basis of how data is stored in m/m and how it accessed
 are of two types as PRIMITIVE and NON PREMITIVE

non-premitive data types are also called Reference type
premitive data types are also called call by value types

In primitive data types, we make a copy of the original data. It is called call by value, and changes take place only in the copied data.
Primitive data types follow call by value, meaning a copy of the data is passed, and changes affect only the copied value, not the original one.

==> there are 7 premitive data types 
as : String, Number, Boolean, null, undefined, Symbol, BigInt // there is no particular data type for float values
Symbol => to find the uniqeness or A data type whose instances are unique and immutable.  

non-premitive data types OR Reference type
Array, Objects, Functions
we can prefer there references(m/m locations) when needed

=> JAVASCRIPT is a DYNAMICALLY typed language, 
which means that data types of variables are determined by the value
they hold at runtime and can change throughout the program as we assign different values to them.


*/
// premitive datatypes
const score = 100    //number type
const scoreValue = 100.3  // number type

const isLoggedIn = false
const outsideTemp = null  //object type
let userEmail;  //if we declare and leave for a time as it is    So its value is undefined automatically

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);   //false because symbol shows the uniqeness either we passes the same value in both


const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);  //bigint


//non-premitive data types
// the return type of all non-premitive data types are object (in case of typeof of function  it return function which called function object )

//array
const heros = ["shaktiman", "naagraj", "doga"];

//object : an object may contain any of premitive data types as we see
let myObj = {
    name: "hitesh",
    age: 22
}
// function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);  //function
// functions return type are function which also called function object 
console.log(typeof heros);       // object


/*read the documentions
https://262.ecma-international.org/5.1/#sec-11.4.3
*/
