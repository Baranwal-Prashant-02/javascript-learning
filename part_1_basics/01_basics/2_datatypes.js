"use strict"; //treat all the js code as newer version 
//alert(3+3)  // we are using node js not the browser, so it doesnot support to the latest js
/*
✅ Why alert Doesn't Work in Node.js:
alert() is a browser-specific JavaScript function that shows a popup dialog box.

Node.js runs JavaScript outside of the browser — typically in a terminal or server environment.
 so it does not have access to browser objects or functions like window, document, or alert.
*/

// code redability should be high

let name ="hitesh"
let age = 18
let isLoggedIn = false

console.log(age)
console.log(name);


/*DATA TYPES
number => range 2 to power 53 or 52 
bigint => An integer with arbitrary precision. For example: 9007199254740992n
string => "any character " we can also use '' but not a good practice
boolean => true/false
null=> standalone value
undefined => it is also an type in js which shows that value is not assigned to variable
symbol => to find the uniqeness or A data type whose instances are unique and immutable.    
*/
//A special keyword denoting a null value. 
//(Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

// object
console.log(typeof name); // typeof() it is used to show type of the variable /name etc

console.log(typeof undefined) //undefined is also an type
/*important*/ console.log(typeof null) // null is an object in js 


/*
output
18
hitesh
string
undefined
object
 */