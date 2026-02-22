//notes of for in loop and for of loop and 
// loops on array, objects and maps 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//forin loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/
console.log("---------------------    -----------------");

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);   //here forIN loop prints the keys of array ie we can say index which starts from 0 by default
}
/*
0
1
2
3
4
*/

console.log("---------------------    -----------------");
console.log("---------------------    -----------------");

for (const key in programming) {
    console.log(programming[key]);  
}
/*
js
rb
py
java
cpp
*/

console.log("---------------------    -----------------");

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //map do not consider repeated keys

//NOTE:-
/*
The for...in loop does not work properly with a Map object!

for...in is meant for objects, not Maps.

Map is a different data structure that requires for...of loops, or .forEach() for each loop can't return any value(go to five.js file for more info)
*/
for (const key in map) {
    console.log(key);    //kuch nahi print hoga isse 
}