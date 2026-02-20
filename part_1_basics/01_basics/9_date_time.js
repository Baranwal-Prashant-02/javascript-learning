//date ka type object hota hai
/*
java script me date 1 january 1970 se count hota hai(begin hota hai) // its represent the first day
*/

/*JavaScript mein Date ek built-in object type hai, yani ki primitive data type (string, number, boolean, null, undefined, symbol, bigint) ki tarah nahi hai.

Date ka instance banane ke liye aap new Date() use karte ho.

Ye ek object return karta hai jo internally date & time ko numbers ki form (milliseconds since 1 Jan 1970 UTC) mein store karta hai.

Lekin jab aap ise print ya convert karte ho (toString(), toLocaleString(), etc.), tab ye human-readable string ban jaata hai.

*/
 

let myDate = new Date() //we making an instance of object named Date
console.log(myDate);   //2025-04-18T14:14:29.415Z

console.log(myDate.toString());  //Fri Apr 18 2025 19:44:29 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());  //18/4/2025, 7:44:29 pm

console.log(myDate.toDateString());  //Fri Apr 18 2025

console.log(typeof myDate);  //object


console.log("------------------------------------")


let myCreatedDate = new Date(2023, 0, 18)   // ✅ preferred: numeric args (month is 0-based!)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

/*
2023-01-17T18:30:00.000Z
Wed Jan 18 2023
*/

console.log("------------------------------------")

let myCreatedDate1 = new Date(2023, 0, 18, 2, 4, 1)
console.log(myCreatedDate1.toDateString()); 
console.log(myCreatedDate1.toLocaleString());

/*
Wed Jan 18 2023
18/1/2023, 2:04:01 am 
*/


console.log("---------------------")

//ISO standard format  YYYY-MM-DDTHH:mm:ss.sssZ

/*
this is use to print the current time 
// let now = new Date();
// console.log(now.toISOString());
*/

//.toLocaleString() converts that date to a local date and time string, based on your computer's time zone.

let myCreatedDate2 = new Date("2023-01-18"); // ✅ ISO string
console.log(myCreatedDate2.toLocaleString());
//18/1/2023, 5:30:00 am

console.log("--------------")

let myTampstamp = Date.now()
console.log(myTampstamp.toLocaleString()) //17,71,13,40,60,420
/*
typeof myTampstamp // "number"
That number represents:

milliseconds passed since 1 Jan 1970 (Unix Epoch)
*/
let date = new Date(myTampstamp) //correct way wo convert the miliseconds representation of date into real format of date
console.log(date.toDateString());  //Sun Feb 15 2026
console.log(date.toLocaleString()); //15/2/2026, 11:11:00 am

console.log("--------       ---      ------")
console.log(Date.now()); // it shows the todays date in millisecond 
console.log(Math.floor(Date.now()/1000)) // it shows the current daate in seconds not in milliseconds

 




