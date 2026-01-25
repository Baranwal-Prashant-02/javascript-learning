const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  //not a good practice so avoid this syntax

// in modern JS we use backticks(the button just below the esc)== ``and $ with {} as shown
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//using constructor or making new object
const gameName = new String('hiteshhc')

console.log(gameName[0]); //h
                       //here we using two underscore(_)after and before proto
console.log(gameName.__proto__); //{} 

console.log(gameName.length); //9

//toUpperCase() --> is use to convert the string into uppercase
console.log(gameName.toUpperCase());  // HITESHHC


//charAt()--> is use to return the character at certain position(index) of that given string
console.log(gameName.charAt(2)); //t

console.log(gameName.indexOf('t')); //2

const newstring = gameName.substring(0,4)
console.log(newstring); //hite

const anotherString = gameName.slice(-7, 4)
console.log(anotherString); //ite

const newstringone ="    hitesh    "
console.log(newstringone);

//trim is use for remove the vacent space from string
console.log(newstringone.trim());   // hitesh

const url = "http://hitesh.com/hitesh%20choudhry"

//replace is use to replace the unwanted char from given string with feeasible chars
console.log(url.replace('%20', '-'))


// includes is use to check the given sub-string is present in our main string or not 
console.log(url.includes('hitesh'))  // true
console.log(url.includes('ghhyt'))   //false

//making array from string
console.log(gameName.split('t'))  //[ 'hi', 'eshhc ' ]  it split the string from given char/symbol/space





// output:
// Hello my name is hitesh and my repo count is 50
// h
// {}
// 9
// HITESHHC 
// t
// 2
// hite
// te
//     hitesh    
// hitesh
// http://hitesh.com/hitesh-choudhry
// true
// false
// [ 'hi', 'eshhc ' ]